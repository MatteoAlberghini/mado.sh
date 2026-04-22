<script lang="ts">
	/* imports */
	import Container from '$lib/ui/macro/wrappers/container/container.wrapper.svelte'
	import { RSS_ARTICLES, RSS_INFO } from '$lib/data/rss/rss.data'
	import { Categories, type Category, type RSSArticle } from '$lib/data/rss/rss.types'
	import Selector from '$lib/ui/components/selectors/selector.svelte'
	import Image from '$lib/ui/components/media/image/image.svelte'

	/* state */
	let filteredArticles: RSSArticle[] = $state(RSS_ARTICLES)
	let category: string = $state('everything')

	/* callbacks */
	/**
	 * handle category changes to filter shown list
	 * @param value the category value to change to
	 */
	function onCategoryClick(value: string) {
		category = value
		if (value === 'everything') {
			filteredArticles = RSS_ARTICLES
			return
		}
		filteredArticles = RSS_ARTICLES.filter((a) => a.category.includes(value as Category))
	}
</script>

<!-- template -->
<Container>
  <div class="filters">
    <span class="title">FILTERS</span>
    <span class="data">
      {filteredArticles.length} entries >> last update {RSS_INFO.date}
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
    {#each filteredArticles as a (a.title)}
      <a
        href={a.href}
        class="article"
        draggable="false"
        target="_blank"
      >
        <div class="image">
          <Image
            src={a.image}
            alt={a.title}
          />
        </div>
        <div class="text-container">
          <h3>{@html a.title}</h3>
          <div class="categories">
            {#each a.category as c (c)}
              <div class="category">
                {c}
              </div>
            {/each}
          </div>
        </div>
      </a>
    {/each}
  </div>
</Container>

<!-- style -->
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
    gap: 8px;
  }
  .article {
    display: flex;
    flex-direction: row;
    text-align: left;
    width: 100%;
    height: 80px;
    border: 1px solid var(--background-color);
    border-bottom-width: 3px;
    transition: background-color var(--transition-timing-medium) ease-out;
    position: relative;
    user-select: none;
    background: transparent;
  }
  .article:hover, .article:focus, .article:focus-visible {
    outline-offset: 1px;
    outline: 2px var(--primary-color) dashed;
    background-color: color-mix(in srgb, var(--primary-color) var(--opacity-v-low), transparent);
  }
  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 4px;
  }
  a {
    text-decoration: none;
  }
  h3 {
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
    color: var(--primary-color);
  }
  h3 > :global(span) {
    color: var(--secondary-color);
  }
  .image {
    height: 100%;
    width: 100px;
    min-width: 100px;
    border-right: 2px solid var(--background-color);
  }
  .categories {
    display: flex;
    flex-direction: row;
    margin-bottom: 6px;
    column-gap: 5px;
  }
  .category {
    border: 1px solid var(--background-color);
    border-bottom-width: 2px;
    width: max-content;
    padding-right: 3px;
    padding-left: 3px;
    padding-top: 2px;
    padding-bottom: 2px;
    font-size: 12px;
    text-transform: uppercase;
    color: var(--primary-color);
  }

  /* media queries */
  @container (width < 500px) {
    .article {
      height: 110px;
    }
    .data {
      display: none;
    }
  }
</style>