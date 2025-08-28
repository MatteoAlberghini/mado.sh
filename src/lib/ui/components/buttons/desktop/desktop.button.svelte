<!-- script -->
<script lang="ts">
  /* imports  */
  import { page } from '$app/state'
  import { goto } from '$app/navigation'
	import type { DesktopButtonProps } from '$lib/ui/components/buttons/desktop/desktop.button.types'
  import FolderIcon from '$lib/ui/icons/folder.icon.svelte'
  import MailIcon from '$lib/ui/icons/mail.icon.svelte'
  import MusicIcon from '$lib/ui/icons/music.icon.svelte'
  import PCIcon from '$lib/ui/icons/pc.icon.svelte'
  import GlobeIcon from '$lib/ui/icons/globe.icon.svelte'
  import TextIcon from '$lib/ui/icons/text.icon.svelte'
  import Modal from '$lib/ui/components/buttons/desktop/modal.svelte'
	import { focusedModal } from '$lib/ui/components/buttons/desktop/modal.store'

  /* props */
  let { id, type, text, url, modal, position, pathname, children }: DesktopButtonProps = $props()

  /* states */
  let hover: boolean = $state(false)
  let open: boolean = $state(false)
  let currentPath: [{ text: string, path: string }, ...{ text: string, path: string }[]] = $state([pathname[0]])

  /* refs */
  let container: HTMLButtonElement

  /* constants */
  let x: number = 0
  let y: number = 0
  let dragX: number = 0
  let dragY: number = 0
  let frame: number = 0
  let dragging: boolean = false

  /* support */
  /**
   * handle click of the button to open link if external, or go to pathname if internal
   */
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
  /**
   * on key down, handles enter event
   * @param e keyboard event
   */
  function onKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleButtonClick()
      return
    }
  }
  /**
   * on mouse down, handles drag event
   * @param e mouse event
   */
  function onMouseDown(e: MouseEvent) {
    if (!container) return
    x = e.pageX
    y = e.pageY
    dragging = true
  }
  /**
   * on mouse up, stop drag event
   */
  function onMouseUp() {
    dragging = false
  }
  /**
   * on mouse move, handles animation frame and drag calculation
   * @param e mouse event
   */
  function onMouseMove(e: MouseEvent) {
    if (!container || !dragging) return
    const deltaX = x - e.pageX
    const deltaY = y - e.pageY
    x = e.pageX
    y = e.pageY
    dragX -= deltaX
    dragY -= deltaY
    cancelAnimationFrame(frame)
    frame = requestAnimationFrame(() => {
      container.style.transform = `translate3d(${dragX}px, ${dragY}px, 0)`
    })
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
<svelte:window onmouseup={onMouseUp} onmousemove={onMouseMove} />
<button
  bind:this={container}
  aria-label={text}
  onmouseenter={onHover}
  onmouseleave={onBlur}
  onclick={onClick}
  ondblclick={onDoubleClick}
  onfocus={onHover}
  onblur={onBlur}
  onkeydown={onKeyDown}
  onmousedown={onMouseDown}
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
    <GlobeIcon />
  {/if}
  {#if type === 'text'}
    <TextIcon />
  {/if}

  <span>
    {text}
  </span>
</button>
<div class="tooltip">{`${type === 'external' ? 'goto' : 'open'} >> ${text}`}</div>

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
    transition: background-color var(--transition-timing-fast) ease-out;
    padding-left: 3px;
    padding-right: 3px;
    padding-bottom: 4px;
    user-select: none;
    background: transparent;
  }
  button:hover, button:focus {
    outline: 2px var(--primary-color) dashed;
    background-color: color-mix(in srgb, var(--primary-color) var(--opacity-low), transparent);
  }
  button:hover + .tooltip, button:focus + .tooltip {
    visibility: visible;
  }
  span {
    color: var(--text-color);
    font-size: calc(18px * var(--icon-size));
    font-weight: 400;
    max-width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: wrap;
    text-align: center;
    margin-top: 3px;
  }

  /* tooltip */
  .tooltip {
    position: fixed;
    visibility: hidden;
    width: max-content;
    background-color: var(--secondary-background-color);
    background-image: url(/images/general/bg-texture.png);
    padding-left: 4px;
    padding-right: 4px;
    padding-bottom: 3px;
    padding-top: 1px;
    border: 1px solid var(--primary-color);
    border-bottom-width: 2px;
    left: 0px;
    bottom: 0px;
    z-index: 2;
    font-size: 17px;
    font-weight: 400;
    color: var(--primary-color);
  }

  /* media queries */
  @media only screen and (max-width: 1279px) {
    button {
      grid-row: auto !important;
      grid-column: auto !important;
    }
    .tooltip {
      display: none;
    }
    span {
      font-size: 18px;
      margin-top: 4px;
    }
    button > :global(svg) {
      max-width: 65px;
    }
  }
</style>