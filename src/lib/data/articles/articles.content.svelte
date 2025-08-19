<script lang="ts">
  /* imports  */
	import Selector from '$lib/ui/components/selectors/selector.svelte'
  import Input from '$lib/ui/components/input/input.svelte'
	import { Categories, type Article, type Category } from '$lib/data/articles/articles.types'
	import { ARTICLES } from '$lib/data/articles/articles.data'
	import Image from '$lib/ui/components/media/image/image.svelte'

  /* state */
  let filteredArticles: Article[] = $state(ARTICLES)
  let category: string = $state('everything') 

  /* callbacks */
  function onCategoryClick(value: string) {
    category = value
    if (value === 'everything') {
      filteredArticles = ARTICLES
      return
    }
    filteredArticles = ARTICLES.filter((a) => a.category.includes(value as Category))
  }

</script>

<!-- template -->
<div class="filters">
  <span>FILTERS</span>
  <div class="filter">
    <Selector
      label="category"
      selected={category}
      items={Categories}
      height={40}
      onClick={onCategoryClick}
    />
  </div>
</div>
<div class="content">
  {#each filteredArticles as a (a.path)}
    <a draggable="false" href={a.path} class="article">
      <div class="image-container">
        <Image src={a.image} alt={a.text} />
      </div>
      <div class="article-content">
        <div>
          <h3>{@html a.title}</h3>
          <hr />
          <p class="date">{a.date}</p>
          <p class="exerpt">{a.excerpt}</p>
        </div>
        <div>
          {#each a.category as c (c)}
            <div class="category">
              {c}
            </div>
          {/each}
        </div>
      </div>
      <div class="tooltip">open >> {a.text}</div>
    </a>
  {/each}
</div>

<!-- styles -->
<style>
  /* filter */
  .filters {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    border: 1px solid var(--background-color);
    border-bottom-width: 3px;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
    margin-bottom: 16px;
    padding-top: 12px;
    padding-bottom: 12px;
  }
  .filter {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 6px;
    max-width: 400px;
  }
  span {
    font-size: 18px;
    font-weight: 400;
    position: absolute;
    top: -14px;
    color: var(--primary-color);
    background-color: var(--modal-background-color);
    background-image: url(/images/general/bg-texture.png);
    padding-left: 8px;
    padding-right: 8px;
    margin-left: 3px;
  }

  /* content */
  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border-bottom-width: 3px;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
    margin-bottom: 16px;
    gap: 20px;
  }
  .article {
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: 300px;
    border: 1px solid var(--background-color);
    border-bottom-width: 3px;
    transition: background-color var(--transition-timing-medium) ease-out;
    position: relative;
  }
  .article:hover, .article:focus, .article:focus-visible {
    outline-offset: 2px;
    outline: 2px var(--primary-color) dashed;
    background-color: color-mix(in srgb, var(--primary-color) var(--opacity-v-low), transparent);
  }
  .article:hover > .tooltip, .article:focus > .tooltip {
    visibility: visible;
  }
  .image-container {
    max-width: 33%;
    min-width: 33%;
    width: 33%;
    border-right: 1px solid var(--background-color);
  }
  .image-container > :global(figure) {
    object-fit: cover;
    max-width: 100%;
    height: 100%;
  }
  .article-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 8px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 12px;
    width: 100%;
  }
  h3 {
    font-size: 26px;
    font-weight: 400;
    text-transform: uppercase;
    color: var(--primary-color);
  }
  h3 > :global(span) {
    color: var(--secondary-color);
  }
  hr {
    margin-top: 15px;
    border-bottom: 3px solid var(--background-color);
  }
  .date {
    padding-top: 14px;
    font-size: 18px;
    color: var(--primary-color);
  }
  .exerpt {
    padding-top: 14px;
    padding-right: 20px;
    font-size: 19px;
    color: var(--primary-color);
  }
  a {
    text-decoration: none;
    word-break: keep-all;
  }
  .category {
    border: 1px solid var(--background-color);
    border-bottom-width: 2px;
    width: max-content;
    padding-right: 3px;
    padding-left: 3px;
    padding-top: 2px;
    padding-bottom: 2px;
    color: var(--primary-color);
    margin-bottom: 8px;
  }

  /* tooltip */
  .tooltip {
    position: absolute;
    visibility: hidden;
    width: max-content;
    background-color: var(--modal-background-color);
    background-image: url(/images/general/bg-texture.png);
    padding-left: 4px;
    padding-right: 4px;
    padding-bottom: 3px;
    padding-top: 1px;
    border: 1px solid var(--primary-color);
    border-bottom-width: 2px;
    bottom: 1px;
    right: 1px;
    z-index: 2;
    font-size: 17px;
    font-weight: 400;
    color: var(--primary-color);
  }
</style>