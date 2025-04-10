<!-- script -->
<script lang="ts">
  /* imports */
  import type { ModalProps } from '$lib/ui/components/buttons/desktop-button/desktop.button.types'

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
</script>

<!-- template -->
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
  <div class="top-bar">
    <span class="title">
      <a draggable="false" href="/">
        this should be the title
      </a>
    </span>
  </div>

  <div class="content" bind:this={content}>
    {@render children?.()}
  </div>

  <div class="left-bar" bind:this={leftBar}></div>
  <div class="right-bar" bind:this={rightBar}></div>
  <div class="bottom-bar" bind:this={bottomBar}></div>
  <div class="bottom-right-handle" bind:this={bottomRightHandle}></div>
  <div class="bottom-left-handle" bind:this={bottomLeftHandle}></div>
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