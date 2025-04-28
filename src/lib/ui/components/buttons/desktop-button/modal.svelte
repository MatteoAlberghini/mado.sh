<!-- script -->
<script lang="ts">
  /* imports */
  import type { Drag, ModalProps } from '$lib/ui/components/buttons/desktop-button/desktop.button.types'

  /* props */
  let { id, width = '550px', height = '450px', top = '0px', left = '0px', color = '#312454',  children }: ModalProps = $props()

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

  /* callbacks */
  function onMouseDown(e: MouseEvent, type: Drag) {
    if (!container) return

    // set focus depending on id here
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
  function onMouseUp(e: MouseEvent) {
    rect = null
    position = null
    x = null
    y = null
    drag = null
  }
  function onMouseMove(e: MouseEvent) {
    if (!container) return
    // dragging
    if (drag === 'top' && x && y) {
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

</script>

<!-- template -->
<svelte:window onmouseup={onMouseUp} onmousemove={onMouseMove} />
<div
  bind:this={container}
  style:width={width}
  style:height={height}
  style:top={top}
  style:left={left}
  style:z-index={49}
  style:background-color={color}
  style:box-shadow={`${color}30 1px 1px 1px 1px`}
  class="container"
>
  <div role="button" tabindex="0" class="top-bar" onmousedown={(e) => onMouseDown(e, 'top')}>
    <span class="title">
      <a draggable="false" href="/">
        this should be the title
      </a>
    </span>
  </div>

  <div class="content" bind:this={content}>
    {@render children?.()}
  </div>

  <div role="button" tabindex="0" class="left-bar" bind:this={leftBar} onmousedown={(e) => onMouseDown(e, 'left')} data-direction="left"></div>
  <div role="button" tabindex="0" class="right-bar" bind:this={rightBar} onmousedown={(e) => onMouseDown(e, 'right')} data-direction="right"></div>
  <div role="button" tabindex="0" class="bottom-bar" bind:this={bottomBar} onmousedown={(e) => onMouseDown(e, 'bottom')} data-direction="bottom"></div>
  <div role="button" tabindex="0" class="bottom-right-handle" bind:this={bottomRightHandle} onmousedown={(e) => onMouseDown(e, 'bottom-right')} data-direction="bottom-right"></div>
  <div role="button" tabindex="0" class="bottom-left-handle" bind:this={bottomLeftHandle} onmousedown={(e) => onMouseDown(e, 'bottom-left')} data-direction="bottom-left"></div>
</div>

<!-- styles -->
<style>

  /* containers */
  .container {
    position: absolute;
    overflow: hidden;
    background-image: url(/images/general/bg-texture.png);
  }
  .content {
    display: flex;
    width: 100%;
    height: 100%;
    margin-top: 28px;
    margin-bottom: 4px;
    padding-bottom: 32px;
    position: relative;
    z-index: 4;
  }

  /* top bar */
  .top-bar {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    width: calc(100% - 2px);
    height: 28px;
    background-color: var(--background-color);
    background-image: url(/images/general/bg-texture.png);
    margin-left: 1px;
    margin-right: 1px;
    margin-top: 1px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .top-bar:hover {
    cursor: grab;
  }
  .top-bar:active {
    cursor: grabbing;
  }
  .title {
    color: var(--text-color);
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 400;
    margin-left: 8px;
  }
  .title > a {
    color: var(--text-color);
    text-decoration: underline;
  }
  .title > a:hover {
    color: var(--primary-color)
  }

  /* draggable bars */
  .bottom-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 5;
    width: calc(100% - 2px);
    height: 4px;
    background-color: var(--background-color);
    background-image: url(/images/general/bg-texture.png);
    margin-left: 1px;
    margin-right: 1px;
    margin-bottom: 1px;
    cursor: s-resize;
  }
  .left-bar {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
    width: 2px;
    height: calc(100% - 36px);
    background-color: var(--background-color);
    background-image: url(/images/general/bg-texture.png);
    margin-left: 1px;
    margin-right: 1px;
    margin-bottom: 4px;
    margin-top: 30px;
    cursor: w-resize;
  }
  .right-bar {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 5;
    width: 2px;
    height: calc(100% - 36px);
    background-color: var(--background-color);
    background-image: url(/images/general/bg-texture.png);
    margin-left: 1px;
    margin-right: 1px;
    margin-bottom: 4px;
    margin-top: 30px;
    cursor: w-resize;
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
    cursor: nwse-resize;
  }
  .bottom-left-handle {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 5;
    width: 16px;
    height: 1px;
    background-color: transparent;
    background-image: url(/images/general/bg-texture.png);
    cursor: nesw-resize;
  }
</style>