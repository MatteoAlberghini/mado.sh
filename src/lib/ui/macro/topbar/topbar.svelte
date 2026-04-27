<!-- script -->
<script lang="ts">
  /* imports */
  import { onMount } from 'svelte'
	import { slide } from 'svelte/transition'
	import { expoOut } from 'svelte/easing'
  import { goto } from '$app/navigation'
	import { DESKTOP_NAVIGATION, MESSAGES_OF_THE_DAY } from '$lib/data/desktop/desktop.data'
  import Clock from '$lib/ui/components/widgets/clock/clock.svelte'
	import MultiLevelSelector from '$lib/ui/components/selectors/multilevel.selector.svelte'
  import ScreenSaverButton from '$lib/ui/components/buttons/screen-saver/screen.saver.button.svelte'
	import QuitButton from '$lib/ui/components/buttons/quit/quit.button.svelte'
	import SettingsButton from '$lib/ui/components/buttons/settings/settings.button.svelte'

  /* refs */
  let container: HTMLHeadElement

  /* constants */
  let x: number = 0
  let y: number = 0
  let dragX: number = 0
  let dragY: number = 0
  let frame: number = 0
  let dragging: boolean = false
  let messageIndex: number = 0
  let messagesLength: number = MESSAGES_OF_THE_DAY.length - 1

  /* state */
  let message: string = $state(MESSAGES_OF_THE_DAY[0])

  /* support */
  /**
   * start the timer for the message swapping
  */
 function startMessagesTimer() {
    setInterval(() => {
      if (messageIndex < messagesLength) {
        messageIndex += 1
      } else {
        messageIndex = 0
      }
      message = MESSAGES_OF_THE_DAY[messageIndex]
    }, 4000)
 }

  /* callbacks */
  /**
   * on focus in, when parent or child gets focus
   */
  function onFocus() {
    container.style.zIndex = '51'
  }
  /**
   * on focus out, when parent and child loses focus
   */
  function onBlur() {
    container.style.zIndex = '48'
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
  /**
   * on click of selector, navigate to the correct page
   * @param value value from multilevel select
   */
  function onNavigationClick(value: string) {
    goto(value)
  }
  /**
   * start messages timer on mount
  */
  onMount(() => {
    startMessagesTimer()
  })
</script>

<!-- template -->
<svelte:window onmouseup={onMouseUp} onmousemove={onMouseMove} />
<Clock />
<header
  role="toolbar"
  tabindex="0"
  bind:this={container}
  onmousedown={onMouseDown}
  onfocusin={onFocus}
  onfocusout={onBlur}
>
  <div class="navigator">
    <MultiLevelSelector
      selected="open >>"
      height={42}
      items={DESKTOP_NAVIGATION}
      onClick={onNavigationClick}
    />
  </div>
  <div class="buttons">
    <ScreenSaverButton />
    <QuitButton />
    <SettingsButton />
  </div>
  <div class="messages">
    {#key message}
      <p
        in:slide={{ duration: 120, easing: expoOut }}
      >
        {@html message}
      </p>
    {/key}
  </div>
</header>

<!-- styles -->
<style>
  /* header */
  header {
    position: absolute;
    display: flex;
    left: calc((100% / 4.5) + 117px);
    top: 4px;
    justify-content: flex-start;
    align-items: center;
    background-color: var(--secondary-background-color);
    background-image: url(/images/general/bg-texture.png);
    box-shadow: color-mix(in srgb, var(--secondary-background-color) var(--opacity-low), transparent) 1px 1px 1px 1px;
    border: 1px solid var(--primary-color);
    border-bottom-width: 3px;
    outline-offset: 1px;
    z-index: 48;
    padding-left: 6px;
    padding-right: 8px;
    padding-top: 6px;
    padding-bottom: 6px;
  }
  header:hover:not(:has(button[aria-expanded=true])) {
    outline: 2px var(--primary-color) dashed;
  }
  .navigator {
    width: 280px;
  }
  .buttons {
    display: flex;
    flex-direction: row;
    margin-left: 6px;
    margin-top: 1px;
  }
  .messages {
    margin-left: 12px;
    -webkit-user-drag: none;
    user-select: none;
  }
  .messages > p {
    font-size: 18px;
    font-weight: 400;
    color: var(--primary-color);
  }
  :global(a) {
    font-size: inherit;
    font-weight: 400;
    color: inherit;
    text-decoration: underline;
    word-break: keep-all;
  }
  :global(a:hover), :global(a:focus), :global(a:focus-visible) {
    color: var(--secondary-color);
  }

  /* media queries */
  @media only screen and (min-width: 1920px) {
    header {
      left: calc((100% / 3) + 117px);
    }
  }
  @media only screen and (max-width: 1279px) {
    header {
      top: initial;
      bottom: 0px;
      left: 0px;
      z-index: 49;
      height: 52px;
      width: 100%;
      max-width: calc(100% - 114px);
      padding-left: 4px;
      padding-right: 4px;
    }
    .navigator {
      display: none;
    }
    .buttons {
      margin-left: 0px;
    }
  }
  @media only screen and (max-width: 618px) {
    .messages > p {
      font-size: 17px;
    }
  }
  @media only screen and (max-width: 520px) {
    header {
      max-width: 100%;
    }
  }
</style>