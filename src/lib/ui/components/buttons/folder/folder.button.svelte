<!-- scripts -->
<script lang="ts">
  /* imports */
  import type { FolderButtonProps } from '$lib/ui/components/buttons/folder/folder.types'
  import GlobeIcon from '$lib/ui/icons/globe.icon.svelte'
  import TextIcon from '$lib/ui/icons/text.icon.svelte'

  /* props */
  let { text, path, external }: FolderButtonProps = $props()
</script>

<!-- template -->
<a
  href={path}
  target={external ? '_blank' : '_self'}
  aria-label={text}
  draggable="false"
>
  {#if external}
    <GlobeIcon />
  {:else}
    <TextIcon />
  {/if}
  <span>{text}</span>
  <div class="tooltip">{`${external ? 'goto' : 'open'} >> ${text}`}</div>
</a>

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
  a:hover > .tooltip, a:focus > .tooltip {
    visibility: visible;
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
    top: -28px;
    right: -1px;
    z-index: 2;
    font-size: 17px;
    font-weight: 400;
    color: var(--primary-color);
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
  }
</style>