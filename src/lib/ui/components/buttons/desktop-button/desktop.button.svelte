<!-- script -->
<script lang="ts">
  /* imports  */
  import { draggable } from '@neodrag/svelte'
	import type { DesktopButtonProps } from '$lib/ui/components/buttons/desktop-button/desktop.button.types'
  import FolderIcon from '$lib/ui/icons/folder.icon.svelte'
  import MailIcon from '$lib/ui/icons/mail.icon.svelte'
  import MusicIcon from '$lib/ui/icons/music.icon.svelte'
  import PCIcon from '$lib/ui/icons/pc.icon.svelte'
  import GlobIcon from '$lib/ui/icons/globe.icon.svelte'
  import TextIcon from '$lib/ui/icons/text.icon.svelte'
  import Modal from '$lib/ui/components/buttons/desktop-button/modal.svelte'

  /* props */
  let { id, type, text, url, modal, position, children }: DesktopButtonProps = $props()

  /* states */
  let hover: boolean = $state(false)
  let open: boolean = $state(false)

  /* callbacks */
  function onHover() { hover = true }
  function onBlur() { hover = false }
  function onClick(e: Event) { e.preventDefault() }
  function onDoubleClick(e: Event) {
    e.preventDefault()
    if (type === 'external') {
      // TODO: open link here
      return
    }
    open = true
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
  style:grid-row={position.row}
  style:grid-column={position.column}
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

{#if open}
  <Modal
    id={id}
    top="300px"
    left="400px"
  >
    test text
  </Modal>
{/if}

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