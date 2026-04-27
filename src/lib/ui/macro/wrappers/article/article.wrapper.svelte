<!-- script -->
<script lang="ts">
  /* imports */
  import type { ArticleWrapper } from '$lib/ui/macro/wrappers/article/article.wrapper.types'

  /* props */
  let { children, date }: ArticleWrapper = $props()
</script>

<!-- template -->
<article>
  {#if date}
    <p class="date">{date}</p>
  {/if}
  {@render children?.()}
</article>

<!-- styles -->
<style>
  article {
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid var(--background-color);
    border-bottom-width: 3px;
    border-top-width: 0px;
    font-size: 20px;
    font-weight: 400;
    line-height: 135%;
    color: var(--white-color);
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 8px;
    padding-bottom: 8px;
    row-gap: 14px;
    user-select: text;
  }
  article :global(a) {
    font-size: inherit;
    font-weight: 400;
    color: var(--primary-color);
    text-decoration: underline;
    word-break: keep-all;
  }
  article :global(a:hover), article :global(a:focus), article :global(a:focus-visible) {
    color: var(--secondary-color);
  }
  article :global(ul) {
    list-style: square;
  }
  article :global(li) {
    list-style-position: inside;
  }
  article :global(li::marker) {
    color: var(--primary-color);
  }
  article :global(h3) {
    font-size: 27px;
    font-weight: 400;
    color: var(--primary-color);
    margin-top: 20px;
  }
  article :global(h3:hover::after) {
    visibility: visible;
  }
  article :global(h3:after) {
    content: ' #';
    visibility: hidden;
  }
  article :global(.media-container) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 12px;
    column-gap: 12px;
    margin-top: 16px;
  }
  article :global(span) {
    color: var(--primary-color);
  }
  article :global(code span) {
    text-shadow: 0px 0px var(--shadow-primary-color), 0px 0px var(--shadow-secondary-color);
  }
  .date {
    font-size: 17px;
    text-transform: uppercase;
    font-weight: 400;
    text-align: left;
    color: var(--primary-color);
  }
</style>