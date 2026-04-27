  <!-- script -->
  <script lang="ts">
    /* imports */
	  import { goto } from '$app/navigation'
    import { onMount } from 'svelte'
    import SimpleBar from 'simplebar'
    import type { Drag, ModalProps } from '$lib/ui/components/buttons/desktop/desktop.button.types'
    import { focusedModal } from '$lib/ui/components/buttons/desktop/modal.store'
    import CloseIcon from '$lib/ui/icons/x.icon.svelte'
    import ExpandIcon from '$lib/ui/icons/expand.icon.svelte'
    import ShrinkIcon from '$lib/ui/icons/shrink.icon.svelte'
	  import HomeIcon from '$lib/ui/icons/home.icon.svelte'
	  import { scale } from 'svelte/transition'

    /* props */
    let { id, width = '550px', height = '550px', top, left, right, bottom, color = '#312454', path, home = true, fullscreen = true, close,  children }: ModalProps = $props()

    /* refs */
    let container: HTMLDivElement
    let rightBar: HTMLDivElement
    let leftBar: HTMLDivElement
    let bottomBar: HTMLDivElement
    let bottomLeftHandle: HTMLDivElement
    let bottomRightHandle: HTMLDivElement
    let content: HTMLDivElement

    /* constants */
    let drag: Drag | null = null
    let position: { x: number, y: number } | null = null
    let rect: { width: number, height: number, left: number, top: number, bottom: number, right: number } | null = null
    let x: number | null = null
    let y: number | null = null
    const adjustedY: string = `clamp(0px, ${top || bottom || '0px'}, calc(100dvh - ${height} - 16px))`
    const adjustedX: string = `clamp(16px, ${left || right || '0px'}, calc(100dvw - ${width} - 16px))`

    /* states */
    let isFullScreen: boolean = $state(false)

    /* callbacks */
    /**
     * all keyboard events, overwrites escape and f11 to close modal and go fullscreen
     * @param e keyboard event
     */
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        e.preventDefault()
        close() 
      }
      if (e.key === 'F11') {
        e.preventDefault()
        toggleFullScreen()
      }
    }
    /**
     * on mouse down event, set initial values for drag
     * @param e mouse event
     * @param type type of drag, based on which element calls it
     */
    function onMouseDown(e: MouseEvent, type: Drag) {
      if (!container) return
      focusedModal.set(id)
      if (type === 'container') return
      drag = type
      if (type === 'top') {
        x = e.clientX
        y = e.clientY
        return
      }
      const clientRect = container.getBoundingClientRect()
      const parentRect = container.parentElement?.getBoundingClientRect()
      if (!parentRect) { return }
      rect = {
        width: clientRect.width,
        height: clientRect.height,
        left: clientRect.left - parentRect.left,
        right: parentRect.right - clientRect.right,
        top: clientRect.top - parentRect.top,
        bottom: parentRect.bottom - clientRect.bottom
      }
      position = { x: e.pageX, y: e.pageY }
    }
    /**
     * on mouse up event, reset drag positions
     */
    function onMouseUp() {
      rect = null
      position = null
      x = null
      y = null
      drag = null
    }
    /**
     * on mouse move event, handles drags and expending
     * @param e mouse event
     */
    function onMouseMove(e: MouseEvent) {
      if (!container) return
      // dragging
      if (drag === 'top' && x && y) {
        if (isFullScreen) {
          container.style.width = width
          container.style.height = height
          container.style.top = `${e.clientY - 14}px`
          container.style.left = `${e.clientX - (container.getBoundingClientRect().width / 2)}px`
          isFullScreen = false
          return
        }
        const left = x - e.clientX
        const top = y - e.clientY
        x = e.clientX
        y = e.clientY
        container.style.top = `${container.offsetTop - top}px`
        container.style.left = `${container.offsetLeft - left}px`
        return
      }
      /// expanding
      if (!bottomRightHandle || !bottomLeftHandle || !leftBar || !rightBar || !bottomLeftHandle || !bottomBar || !position || !rect) return
      let direction = ''
      let delta: number = 0
      if (drag === 'bottom-right') {
        direction = bottomRightHandle.getAttribute('data-direction') || ''
      } else if (drag === 'bottom-left') {
        direction = bottomLeftHandle.getAttribute('data-direction') || ''
      } else if (drag === 'bottom') {
        direction = bottomBar.getAttribute('data-direction') || ''
      } else if (drag === 'left') {
        direction = leftBar.getAttribute('data-direction') || ''
      } else if (drag === 'right') {
        direction = rightBar.getAttribute('data-direction') || ''
      }
      if (direction.match('right')) {
          delta = e.pageX - position.x
          let width = rect.width + delta
          if (width < 550) { width = 550 }
          container.style.width = `${width}px`				
      }
      if (direction.match('left')) {
        delta = position.x - e.pageX
        let width = rect.width + delta
        if (width < 550) {
          width = 550
          container.style.width = `${width}px`
          return
        }
        container.style.width = `${width}px`
        container.style.left = `${rect.left - delta}px`
      }
      if (direction.match('up')) {
        delta = position.y - e.pageY
        let height = rect.height + delta
        if (height < 550) { height = 550 }
        container.style.top = `${rect.top - delta}px`
        container.style.height = `${height}px`
      }
      if (direction.match('bottom')) {
        delta = e.pageY - position.y
        let height = rect.height + delta
        if (height < 550) { height = 550 }
        container.style.height = `${height}px`
      }
    }

    /* functions */
    /**
     * toggles fullscreen on the modal, goes back to initial width/height/position when clicked again
     */
    function toggleFullScreen() {
      if (!container) return
      if (isFullScreen) {
        isFullScreen = false
        container.style.left = adjustedX
        container.style.top = adjustedY
        container.style.width = width
        container.style.height = height
        return
      }
      isFullScreen = true
      container.style.left = '0px'
      container.style.top = '0px'
      container.style.width = `${window.innerWidth}px`
      container.style.height = `${window.innerHeight}px`
    }
    /**
     * navigate to the main home link
     */
    function navigateHome() {
      goto(path[0].path)
    }

    /* effects */
    /**
     * handle z index change on focus change from store handling modal focus
    */
    $effect(() => {
      if (!container) return
      if ($focusedModal === id) {
        container.style.zIndex = '50'
        return
      }
      container.style.zIndex = '49'
    })
    /**
     * start simplebar, set current id and z index
    */
    onMount(() => {
      if (!content) return
      focusedModal.set(id)
      new SimpleBar(content, { autoHide: false })
    })
  </script>

  <!-- template -->
  <svelte:window onmouseup={onMouseUp} onmousemove={onMouseMove} />
  <div
    tabindex="-1"
    role="dialog"
    bind:this={container}
    style:width={`min(100%, ${width})`}
    style:height={`min(100%, ${height})`}
    style:top={top ? parseInt(height.replace('px', ''), 10) > window.innerHeight ? '0px' : adjustedY : undefined}
    style:bottom={bottom ? parseInt(height.replace('px', ''), 10) > window.innerHeight ? '0px' : adjustedY : undefined}
    style:left={left ? parseInt(width.replace('px', ''), 10) > window.innerWidth ? '0px' : adjustedX : undefined}
    style:right={right ? parseInt(width.replace('px', ''), 10) > window.innerWidth ? '0px' : adjustedX : undefined}
    style:z-index={49}
    style:background-color={color}
    style:box-shadow={`${color}30 1px 1px 1px 1px`}
    style:--modal-background-color={color}
    class="container"
    onkeydown={onKeyDown}
    onmousedown={(e) => onMouseDown(e, 'container')}
    transition:scale={{ duration: 220 }}
  >
    <div
      class="top-bar"
    >
      <div
        role="button"
        class="draggable-top-bar"
        data-draggable="true"
        tabindex="-1"
        onmousedown={(e) => onMouseDown(e, 'top')}
      >
        <div class="buttons">
          {#if home === true}
            <button
              onclick={navigateHome}
              class="br"
              style:border-color={color}
            >
              <HomeIcon />
            </button>
          {/if}
          <span class="title">
            {#each path as p, i (p.path)}
              {#if i > 0}
                <span class={i === 1 ? 'home-span' : undefined}>
                  >>
                </span>
              {/if}
              <a class={i === 0 && path.length > 1 ? 'home' : undefined} draggable="false" href={p.path}>
                {p.text}
              </a>
            {/each}
          </span>
        </div>
      </div>
      <div class="buttons">
        {#if fullscreen === true}
          <button
            onclick={toggleFullScreen}
            class="fullscreen-button"
            style:border-color={color}
          >
            {#if isFullScreen}
              <ShrinkIcon />
            {:else}
              <ExpandIcon />
            {/if}
          </button>
        {/if}
        <button
          onclick={close}
          style:border-color={color}
        >
          <CloseIcon />
        </button>
      </div>
    </div>

    <div class="content" bind:this={content}>
      {@render children?.()}
    </div>

    <div role="button" tabindex="-1" class="left-bar" data-draggable="true" bind:this={leftBar} onmousedown={(e) => onMouseDown(e, 'left')} data-direction="left" style:pointer-events={isFullScreen ? 'none' : 'auto'}></div>
    <div role="button" tabindex="-1" class="right-bar" data-draggable="true" bind:this={rightBar} onmousedown={(e) => onMouseDown(e, 'right')} data-direction="right" style:pointer-events={isFullScreen ? 'none' : 'auto'}></div>
    <div role="button" tabindex="-1" class="bottom-bar" data-draggable="true" bind:this={bottomBar} onmousedown={(e) => onMouseDown(e, 'bottom')} data-direction="bottom" style:pointer-events={isFullScreen ? 'none' : 'auto'}></div>
    <div role="button" tabindex="-1" class="bottom-right-handle" data-draggable="true" bind:this={bottomRightHandle} onmousedown={(e) => onMouseDown(e, 'bottom-right')} data-direction="bottom-right" style:pointer-events={isFullScreen ? 'none' : 'auto'}></div>
    <div role="button" tabindex="-1" class="bottom-left-handle" data-draggable="true" bind:this={bottomLeftHandle} onmousedown={(e) => onMouseDown(e, 'bottom-left')} data-direction="bottom-left" style:pointer-events={isFullScreen ? 'none' : 'auto'}></div>
  </div>

  <!-- styles -->
  <style>
    /* containers */
    .container {
      position: absolute;
      background-image: url(/images/general/bg-texture.png);
      display: grid;
      grid-template-columns: 4px calc(100% - 8px) 4px;
      grid-template-rows: 30px calc(100% - 34px) 4px;
      border: 1px solid var(--text-color);
      container-type: size;
      outline-offset: 2px;
    }
    .content {
      display: flex;
      width: 100%;
      align-self: center;
      height: 100%;
      position: relative;
      user-select: none;
      grid-row: 2;
      grid-column: 2;
    }
    .content:active {
      background: initial;
    }

    /* top bar */
    .top-bar {
      grid-row: 1;
      grid-column: 1 / -1;
      width: 100%;
      height: 30px;
      background-color: var(--background-color);
      background-image: url(/images/general/bg-texture.png);
      display: flex;
      justify-content: space-between;
      align-items: center;
      user-select: none;
      border-bottom: 1px solid var(--text-color);
      cursor: var(--cursor-grab) 0 10, grab;
    }
    .draggable-top-bar {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      height: 100%;
    }
    .title {
      color: var(--text-color);
      font-size: 17px;
      text-transform: uppercase;
      font-weight: 400;
      margin-left: 8px;
      display: flex;
      flex-direction: row;
      column-gap: 3px;
    }
    .title > a {
      color: var(--text-color);
      text-decoration: underline;
    }
    .title > a:hover, .title > a:focus {
      color: var(--primary-color);
      background-color: initial;
      box-shadow: initial;
    }

    /* buttons */
    .buttons {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      align-self: flex-end;
      height: 100%;
    }
    button {
      width: 48px;
      height: 100%;
      background-color: transparent;
      border-left-width: 1px;
      border-style: solid;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      align-self: flex-end;
      position: relative;
      transition: background-color var(--transition-timing-medium) ease-out;
      border-bottom: 0px;
    }
    button:hover, button:focus, button:focus-visible {
      background-color: color-mix(in srgb, var(--primary-color) var(--opacity-medium), transparent);
      outline: 2px var(--primary-color) dashed;
    }
    .br {
      border-left-width: 0px;
      border-right-width: 1px;
    }

    /* draggable bars */
    .bottom-bar {
      grid-column: 1 / -1;
      grid-row: 3;
      height: 100%;
      border-bottom: 3px solid var(--background-color);
      background-image: url(/images/general/bg-texture.png);
      margin-bottom: 1px;
    }
    .left-bar {
      grid-column: 1;
      grid-row: 2;
      width: 100%;
      height: calc(100% - 1px);
      border-left: 2px solid var(--background-color);
      background-image: url(/images/general/bg-texture.png);
      margin-bottom: 4px;
      margin-top: 1px;
    }
    .right-bar {
      grid-column: 3;
      grid-row: 2;
      width: 100%;
      height: calc(100% - 1px);
      border-right: 2px solid var(--background-color);
      background-image: url(/images/general/bg-texture.png);
      margin-top: 1px;
    }
    .bottom-right-handle {
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 5;
      width: 19px;
      height: 19px;
      background-color: transparent;
      background-image: url(/images/general/bg-texture.png);
    }
    .bottom-left-handle {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 5;
      width: 19px;
      height: 19px;
      background-color: transparent;
      background-image: url(/images/general/bg-texture.png);
    }
    .bottom-left-handle:hover, .bottom-left-handle:active {
      outline: 2px var(--primary-color) dashed;
      background-color: color-mix(in srgb, var(--primary-color) var(--opacity-low), transparent);
    }
    .bottom-right-handle:hover, .bottom-right-handle:active {
      outline: 2px var(--primary-color) dashed;
      background-color: color-mix(in srgb, var(--primary-color) var(--opacity-low), transparent);
    }
    .right-bar:hover, .right-bar:active {
      outline: 2px var(--primary-color) dashed;
      background-color: color-mix(in srgb, var(--primary-color) var(--opacity-low), transparent);
    }
    .left-bar:hover, .left-bar:active {
      outline: 2px var(--primary-color) dashed;
      background-color: color-mix(in srgb, var(--primary-color) var(--opacity-low), transparent);
    }
    .bottom-bar:hover, .bottom-bar:active {
      outline: 2px var(--primary-color) dashed;
      background-color: color-mix(in srgb, var(--primary-color) var(--opacity-low), transparent);
    }

    /* media queries */
    @media only screen and (max-width: 1280px) {
      .container {
        width: 100dvw !important;
        height: 100dvh !important;
        left: 0px !important;
        bottom: 0px !important;
        top: 0px !important;
        right: 0px !important;
      }
      .fullscreen-button {
        display: none;
      }
    }
    @media only screen and (max-width: 450px) {
      .home {
        display: none;
      }
      .home-span {
        display: none;
      }
    }
  </style>