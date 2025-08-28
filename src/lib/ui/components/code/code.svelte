<!-- script -->
<script lang="ts">
  /* imports */
  import { onMount } from 'svelte'
	import type { CodeProps } from '$lib/ui/components/code/code.types'
  import { codeToHtml } from 'shiki'
	import FolderConfig from '$lib/ui/icons/folder.config.icon.svelte'

  /* props */
  let { language, code, title }: CodeProps = $props()

  /* state */
  let sintax = $state('')

  /* effects */
  onMount(async () => {
    sintax = await codeToHtml(code, { lang: language, theme: 'synthwave-84' })
  })
</script>

<!-- template -->
<div class="container">
  <div class="filebar">
    <FolderConfig />
    <h6>
      {title}
    </h6>
  </div>
  {@html sintax}
</div>

<!-- styles -->
<style>
  .container {
    background-color: var(--code-background-color);
    border: 1px solid var(--primary-color);
    border-bottom-width: 3px;
  }
  .filebar {
    width: 100%;
    background-color: oklch(0.2679 0.0333 221.66);
    border-bottom: 1px solid var(--primary-color);
    margin-bottom: 1px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-image: var(--background-image);
    padding-left: 6px;
    padding-top: 5px;
    padding-bottom: 5px;
    column-gap: 4px;
  }
  h6 {
    color: var(--white-color);
    letter-spacing: 0.5px;
    line-height: 100%;
    font-size: 14px;
    font-family: 'GeistMono';
    font-weight: 400;
    text-shadow: 0px 0px var(--shadow-primary-color), 0px 0px var(--shadow-secondary-color);
  }
  :global(pre) {
    white-space: pre-wrap;
    text-shadow: 0px 0px var(--shadow-primary-color), 0px 0px var(--shadow-secondary-color);
    font-size: 17px;
    padding-left: 6px;
    padding-top: 4px;
    padding-bottom: 2px;
    background-image: var(--background-image);
    font-family: 'GeistMono';
    letter-spacing: 1px;
  }
</style>

