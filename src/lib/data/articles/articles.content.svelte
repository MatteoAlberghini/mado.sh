<script lang="ts">
  /* imports  */
  import { page } from '$app/state'
	import { goto } from '$app/navigation'
  import Selector from '$lib/ui/components/selectors/selector.svelte'
	import { Categories, type Article, type Category } from '$lib/data/articles/articles.types'
	import { ARTICLES, BASE_ARTICLES } from '$lib/data/articles/articles.data'
	import Image from '$lib/ui/components/media/image/image.svelte'

  /* state */
  let filteredArticles: Article[] = $state(ARTICLES)
  let category: string = $state('everything')
  let content: Article | null = $state(null)

  /* callbacks */
  /**
   * handle category changes to filter the shown list
   * @param value the category to change to
   */
  function onCategoryClick(value: string) {
    category = value
    if (value === 'everything') {
      filteredArticles = ARTICLES
      return
    }
    filteredArticles = ARTICLES.filter((a) => a.category.includes(value as Category))
  }
  /**
   * on click, prevent single click
   * @param e mouse event
   * @param path
   */
  function onClick(e: Event, path: string) {
    e.preventDefault()
    goto(path)
  }
  /**
   * on key down, handles enter event
   * @param e keyboard event
   * @param path
   */
  function onKeyDown(e: KeyboardEvent, path: string) {
    if (e.key === 'Enter') {
      e.preventDefault()
      goto(path)
      return
    }
  }

  /* effects */
  /**
   * set correct content based on url path changes
   */
  $effect(() => {
    if (page.url.pathname.includes(BASE_ARTICLES.path)) {
      if (page.url.pathname === BASE_ARTICLES.path) {
        content = null
        return
      }
      const currentContent = ARTICLES.find((a) => a.path === page.url.pathname)
      if (currentContent) { content = currentContent }
    }
  })

</script>

<!-- template -->
<div class="container">
  {#if content === null}
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
      <button
        class="article"
        onclick={(e) => onClick(e, a.path)}
        onkeydown={(e) => onKeyDown(e, a.path)}
      >
        <div class="image-container">
          <Image src={a.image} alt={a.text} position="0% 0%"/>
        </div>
        <div class="article-content">
          <div>
            <h3>{@html a.title}</h3>
            <hr />
            <div class="under-title">
              <p class="date">{a.date}</p>
              <div class="categories">
                {#each a.category as c (c)}
                  <div class="category">
                    {c}
                  </div>
                {/each}
              </div>
            </div>
            <p class="exerpt">{a.excerpt}</p>
          </div>
        </div>
        <div class="tooltip">open >> {a.text}</div>
      </button>
    {/each}
  </div>
  {:else if content.element}
    {@render content.element()}
  {/if}
</div>

<!-- styles -->
<style>
  /* filter */
  .container {
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 16px;
  }
  .filters {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    border: 1px solid var(--background-color);
    border-bottom-width: 3px;
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
    margin-top: 20px;
    gap: 20px;
  }
  .under-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 14px;
    padding-right: 16px;
  }
  .article {
    display: flex;
    flex-direction: row;
    text-align: left;
    width: 100%;
    min-height: 300px;
    border: 1px solid var(--background-color);
    border-bottom-width: 3px;
    transition: background-color var(--transition-timing-medium) ease-out;
    position: relative;
    user-select: none;
    background: transparent;
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
    max-width: 36%;
    min-width: 36%;
    width: 36%;
    border-right: 2px solid var(--background-color);
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
    padding-left: 16px;
    padding-right: 16px;
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
    margin-right: 16px;
    border-bottom: 2px solid var(--background-color);
  }
  .date {
    font-size: 16px;
    color: var(--primary-color);
  }
  .exerpt {
    margin-top: 16px;
    padding-right: 20px;
    font-size: 19px;
    color: var(--primary-color);
  }
  .categories {
    display: flex;
    flex-direction: row;
    margin-bottom: 6px;
    column-gap: 3px;
  }
  .category {
    border: 1px solid var(--background-color);
    border-bottom-width: 2px;
    width: max-content;
    padding-right: 3px;
    padding-left: 3px;
    padding-top: 2px;
    padding-bottom: 2px;
    font-size: 15px;
    text-transform: uppercase;
    color: var(--primary-color);
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
    bottom: -3px;
    right: 0px;
    z-index: 2;
    font-size: 17px;
    font-weight: 400;
    color: var(--primary-color);
  }

  /* media queries */
  @container (width < 900px) {
    .image-container {
      display: none;
    }
    .article-content {
      padding-left: 12px;
      padding-right: 12px;
      padding-bottom: 6px;
    }
    .container {
      padding-right: 16px;
      padding-left: 8px;
    }
  }
  @container (width < 599px) {
    h3 {
      font-size: 24px;
    }
    .exerpt {
      font-size: 18px;
    }
    .container {
      padding-right: 16px;
      padding-left: 4px;
    }
  }
</style>