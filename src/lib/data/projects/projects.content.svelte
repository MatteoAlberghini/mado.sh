<!-- script -->
<script lang="ts">
  /* imports */
  import { page } from '$app/state'
	import { BASE_PROJECTS, PROJECTS } from '$lib/data/projects/projects.data'
	import type { Project } from '$lib/data/projects/projects.types'

  /* state */
  let content: Project | null = $state(null)

  /* callbacks */
  /**
   * set selected item as content
   * @param item project item to set as content
   */
  function onClick(item: Project) {
    content = item
  }

  /* effects */
  /**
   * set correct content based on url path changes
  */
  $effect(() => {
    if (page.url.pathname.includes(BASE_PROJECTS.path)) {
      if (page.url.pathname === BASE_PROJECTS.path) {
        content = null
        return
      }
      const currentContent = PROJECTS.find((p) => p.path === page.url.pathname)
      if (currentContent) { content = currentContent }
    }
  })
</script>

<!-- template -->
<div>
  {#if content === null}
    <div>
      {#each PROJECTS as p (p.path)}
        <a href={p.path} onclick={() => onClick(p)}>
          {p.text}
        </a>
      {/each}
    </div>
  {:else}
    {@render content.element()}
  {/if}
</div>
