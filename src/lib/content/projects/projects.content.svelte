<!-- script -->
<script lang="ts">
  /* imports */
  import { page } from '$app/state'
	import { PROJECTS, BASE_PROJECTS, SCRIPTS, THEMES } from '$lib/data/projects/projects.data'
	import type { Project } from '$lib/data/projects/projects.types';
  import FolderButton from '$lib/ui/components/buttons/folder/folder.button.svelte'
	import Container from '$lib/ui/macro/wrappers/container/container.wrapper.svelte'

  /* state */
  let content: Project | null = $state(null)
  const COMBINED_PROJECTS = [...PROJECTS, ...SCRIPTS]

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
      const currentContent = COMBINED_PROJECTS.find((p) => p.path === page.url.pathname)
      if (currentContent) { content = currentContent }
    }
  })
</script>

<!-- template -->
<Container>
  {#if content === null}
    <div class="projects-container">
      <span class="title">WORK</span>
      <span class="data">
        {PROJECTS.length} files
      </span>
      {#each PROJECTS as p (p.path)}
        <FolderButton
          text={p.text}
          path={p.path}
          external={false}
          icon="text"
        />
      {/each}
    </div>
    <div class="projects-container">
      <span class="title">SCRIPTS</span>
      <span class="data">
        {SCRIPTS.length} files
      </span>
      {#each SCRIPTS as p (p.path)}
        <FolderButton
          text={p.text}
          path={p.path}
          external={false}
          icon="script"
        />
      {/each}
    </div>
    <div class="projects-container">
      <span class="title">THEMES</span>
      <span class="data">
        {THEMES.length} files
      </span>
      {#each THEMES as p (p.path)}
        <FolderButton
          text={p.text}
          path={p.path}
          external={true}
          icon="paint"
        />
      {/each}
    </div>
  {:else if content.element}
    {@render content.element()}
  {/if}
</Container>

<!-- style -->
<style>
  /* containers */
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
</style>