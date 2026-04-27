<!-- scripts -->
<script lang="ts">
  /* imports */
  import type { FolderButtonProps } from '$lib/ui/components/buttons/folder/folder.types'
  import GlobeIcon from '$lib/ui/icons/globe.icon.svelte'
	import PaintIcon from '$lib/ui/icons/paint.icon.svelte'
  import TextIcon from '$lib/ui/icons/text.icon.svelte'
  import ScriptIcon from '$lib/ui/icons/script.icon.svelte'

  /* props */
  let { text, path, external, icon }: FolderButtonProps = $props()
</script>

<!-- template -->
{#snippet inner()}
  {#if icon === 'globe'}
    <GlobeIcon />
    <span>{text}</span>
  {/if}
  {#if icon === 'text'}
    <TextIcon />
    <span>{text}</span>
  {/if}
  {#if icon === 'paint'}
    <PaintIcon />
    <span>{text}</span>
  {/if}
  {#if icon === 'script'}
    <ScriptIcon />
    <span>{text}</span>
  {/if}
{/snippet}

{#if external}
  <a
    href={path}
    target="_blank"
    aria-label={text}
    draggable="false"
  >
    {@render inner()}
  </a>
{:else}
  <a
    href={path}
    aria-label={text}
    draggable="false"
  >
    {@render inner()}
  </a>
{/if}

<!-- styles -->
<style>
  /* buttons */
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: background-color var(--transition-timing-fast) ease-out;
    padding-left: 3px;
    padding-right: 3px;
    padding-bottom: 4px;
    user-select: none;
    background: transparent;
    max-width: 110px;
    max-height: 110px;
    width: 110px;
    height: 110px;
    aspect-ratio: 1 / 1;
    text-decoration: none;
  }
  a:hover, a:focus {
    outline: 2px var(--primary-color) dashed;
    background-color: color-mix(in srgb, var(--primary-color) 30%, transparent);
  }

  /* text */
  span {
    color: var(--primary-color);
    font-size: 17px;
    font-weight: 400;
    max-width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: wrap;
    text-align: center;
    margin-top: 2px;
  }
</style>