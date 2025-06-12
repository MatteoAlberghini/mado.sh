<!-- script -->
<script lang="ts">
  /* imports */
  import { page } from '$app/state'
	import { BASE_PROJECTS, PROJECTS, REPOSITORIES } from '$lib/data/projects/projects.data'
	import type { Project } from '$lib/data/projects/projects.types'
  import FolderButton from '$lib/ui/components/buttons/folder/folder.button.svelte'

  /* state */
  let content: Project | null = $state(null)

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
<div class="container">
  {#if content === null}
    <div class="projects-container">
      <span>WORK</span>
      {#each PROJECTS as p (p.path)}
        <FolderButton
          text={p.text}
          path={p.path}
          external={false}
        />
      {/each}
    </div>
    <div class="projects-container">
      <span>REPOSITORIES</span>
      {#each REPOSITORIES as p (p.path)}
        <FolderButton
          text={p.text}
          path={p.path}
          external={true}
        />
      {/each}
    </div>
  {:else if content.element}
    {@render content.element()}
  {/if}
</div>

<!-- style -->
<style>
  /* containers */
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 16px;
    padding-bottom: 16px;
    row-gap: 1px;
  }
  .projects-container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    flex-direction: row;
    border: 1px solid var(--background-color);
    border-bottom-width: 3px;
    width: 100%;
    min-height: 155px;
    margin-top: 16px;
    margin-bottom: 16px;
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 16px;
    padding-right: 16px;
    column-gap: 16px;
    row-gap: 16px;
    position: relative;
  }

  /* text */
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
</style>