<!-- script -->
<script lang="ts">
  /* imports  */
  import { draggable } from '@neodrag/svelte'
  import { page } from '$app/state'
  import { goto } from '$app/navigation'
	import type { DesktopButtonProps } from '$lib/ui/components/buttons/desktop/desktop.button.types'
  import FolderIcon from '$lib/ui/icons/folder.icon.svelte'
  import MailIcon from '$lib/ui/icons/mail.icon.svelte'
  import MusicIcon from '$lib/ui/icons/music.icon.svelte'
  import PCIcon from '$lib/ui/icons/pc.icon.svelte'
  import GlobIcon from '$lib/ui/icons/globe.icon.svelte'
  import TextIcon from '$lib/ui/icons/text.icon.svelte'
  import Modal from '$lib/ui/components/buttons/desktop/modal.svelte'
	import { focusedModal } from '$lib/ui/components/buttons/desktop/modal.store'

  /* props */
  let { id, type, text, url, modal, position, pathname, children }: DesktopButtonProps = $props()

  /* states */
  let hover: boolean = $state(false)
  let open: boolean = $state(false)
  let currentPath: [{ text: string, path: string }, ...{ text: string, path: string }[]] = $state([pathname[0]])

  /* support */
  function handleButtonClick() {
    if (type === 'external') {
      window.open(url, '_blank')
      return
    }
    goto(pathname[0].path)
    open = true
  }

  /* callbacks */
  /**
   * mouse hover
   */
  function onHover() {
    hover = true
  }
  /**
   * mouse blur
   */
  function onBlur() {
    hover = false
  }
  /**
   * on click, prevent single click
   * @param e mouse event
   */
  function onClick(e: Event) {
    e.preventDefault()
    if (window.innerWidth < 1280) {
      handleButtonClick()
    }
  }
  /**
   * on double click
   * @param e mouse event
   */
  function onDoubleClick(e: Event) {
    e.preventDefault()
    if (window.innerWidth >= 1280) {
      handleButtonClick()
    }
  }
  function onKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleButtonClick()
      return
    }
  }

  /* functions */
  /**
   * close the modal, navigate to home page
   */
  function close() {
    goto('/').then(() => {
      open = false
    })
  }

  /* effects */
  /**
   * on page change: focus modal, open modal, check for children pages in url
  */
  $effect(() => {
    if (page.url.pathname.includes(pathname[0].path) && type !== 'external') {
      if (open === false) { open = true }
      focusedModal.set(id)
      if (pathname.length > 1) {
        if (page.url.pathname === pathname[0].path) {
          currentPath = [pathname[0]]
          return
        }
        const currentPage = pathname.find((p) => p.path === page.url.pathname)
        if (currentPage) { currentPath = [pathname[0], currentPage]}
        return
      }
    }
  })

</script>

<!-- template -->
<button
  aria-label={text}
  onmouseenter={onHover}
  onmouseleave={onBlur}
  onclick={onClick}
  ondblclick={onDoubleClick}
  onkeydown={onKeyDown}
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
    {...modal}
    close={close}
    path={currentPath}
  >
    {@render children?.()}
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

  /* media queries */
  @media only screen and (max-width: 900px) {
    button {
      grid-row: auto !important;
      grid-column: auto !important;
    }
  }
</style>