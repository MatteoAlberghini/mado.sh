<!-- script -->
<script lang="ts">
  /* imports  */
  import { draggable } from '@neodrag/svelte'
	import type { DesktopButtonProps } from './buttons.types'
  import FolderIcon from '../icons/folder.icon.svelte'
  import MailIcon from '../icons/mail.icon.svelte'
  import MusicIcon from '../icons/music.icon.svelte'
  import PCIcon from '../icons/pc.icon.svelte'
  import GlobIcon from '../icons/globe.icon.svelte'
  import TextIcon from '../icons/text.icon.svelte'
  
  /* props */
  let { id, type, text, url, modal, position, children }: DesktopButtonProps = $props()

  /* states */
  let hover: boolean = $state(false)

  /* callbacks */
  function onHover() { hover = true }
  function onBlur() { hover = false }
  function onClick(e: Event) { e.preventDefault() }
  function onDoubleClick(e: Event) {
    e.preventDefault()
    if (type === 'external') {
      return
    }
  }

</script>

<!-- template -->
<button
  aria-label={text}
  onmouseenter={onHover}
  onmouseleave={onBlur}
  onclick={onClick}
  ondblclick={onDoubleClick}
  use:draggable={{ bounds: 'parent' }}
>
  {#if type === 'folder'}
    <FolderIcon animate={hover} />
  {/if}
  {#if type === 'mail'}
    <MailIcon />
  {/if}
  {#if type === 'music'}
    <MusicIcon />
  {/if}
  {#if type === 'pc'}
    <PCIcon />
  {/if}
  {#if type === 'external'}
    <GlobIcon />
  {/if}
  {#if type === 'text'}
    <TextIcon />
  {/if}

  <span>
    {text}
  </span>
</button>

<!-- styles -->
<style>
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    max-height: 100%;
    max-width: 100%;
    transition: all 75ms ease-out;
    padding-left: 3px;
    padding-right: 3px;
    padding-bottom: 4px;
    user-select: none;
    background: transparent;
  }
  button:hover, button:focus {
    background-color: color-mix(in srgb, var(--primary-color) 30%, transparent);
    box-shadow: inset 0 0 0 1px var(--primary-color);
  }
  button > :global(svg) {
    width: 60px;
    height: 60px;
  }
  span {
    color: var(--text-color);
    font-size: 18px;
    font-weight: 400;
    max-width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: wrap;
    text-align: center;
    margin-top: 3px;
  }

  @media only screen and (min-width: 900px) {
    button > :global(svg) {
      width: 63px;
      height: 63px;
    }
  }
</style>

<!--
  style:grid-row={position.row}
  style:grid-column={position.column}
-->