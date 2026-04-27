<script lang="ts">
  /* imports  */
  import { page } from '$app/state'
  import Selector from '$lib/ui/components/selectors/selector.svelte'
	import { Categories, type Article, type Category } from '$lib/data/articles/articles.types'
	import { ARTICLES, BASE_ARTICLES } from '$lib/data/articles/articles.data'
	import Image from '$lib/ui/components/media/image/image.svelte'
	import Container from '$lib/ui/macro/wrappers/container/container.wrapper.svelte'

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
<Container>
  {#if content === null}
  <div class="filters">
    <span class="title">FILTERS</span>
    <span class="data">
      {filteredArticles.length} entries<span class="data-additional"> >> last update {ARTICLES[ARTICLES.length - 1].date}</span>
    </span>
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
      <a
        href={a.path}
        class="article"
        draggable="false"
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
            <p class="excerpt">{a.excerpt}</p>
          </div>
        </div>
      </a>
    {/each}
  </div>
  {:else if content.element}
    {@render content.element()}
  {/if}
</Container>

<!-- styles -->
<style>
  /* filter */
  a {
    text-decoration: none;
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
    margin-top: 6px;
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
  .title {
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
  .data {
    font-size: 16px;
    font-weight: 400;
    position: absolute;
    top: -14px;
    right: 0px;
    color: var(--primary-color);
    background-color: var(--modal-background-color);
    background-image: url(/images/general/bg-texture.png);
    padding-left: 8px;
    padding-right: 8px;
    margin-right: 3px;
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
  .excerpt {
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

  /* media queries */
  @container (width < 900px) {
    .image-container {
      width: 100%;
      max-width: 100%;
      border-right-width: 0px;
      border-bottom: 1px solid var(--background-color);
    }
    .article-content {
      padding-left: 12px;
      padding-right: 12px;
      padding-bottom: 10px;
    }
    .article {
      flex-direction: column;
    }
    hr {
      margin-right: 0px;
    }
    .under-title {
      padding-right: 0px;
    }
    .excerpt {
      padding-right: 0px;
    }
  }
  @container (width < 599px) {
    h3 {
      font-size: 24px;
    }
    .excerpt {
      font-size: 18px;
    }
    .data-additional {
      display: none;
    }
  }
</style>