<!-- script -->
<script lang="ts">
  /* imports */
	import { onMount } from 'svelte'
  
  /* refs */
  let container: HTMLHeadElement
  let hours: HTMLDivElement
  let minutes: HTMLDivElement
  let seconds: HTMLDivElement

  /* constants */
  let x: number = 0
  let y: number = 0
  let dragX: number = 0
  let dragY: number = 0
  let frame: number = 0
  let dragging: boolean = false
  const d: Date = new Date()
  const months: string[] = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

  /* state */
  let date: string = $state(`${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`)

  /* support */
  /**
   * set clock to particular hour
   */
  function setClock() {
    if (!hours || !minutes || !seconds) { return }
    const date = new Date()
    const s = date.getSeconds() * 6
    const m = date.getMinutes() * 6 + (s / 60)
    const h = ((date.getHours() % 12) / 12) * 360 + 90 + m / 12
    hours.style.transform = `rotate(${h}deg)`
    minutes.style.transform = `rotate(${m}deg)`
    seconds.style.transform = `rotate(${s}deg)`
  }
  /**
   * start the clock and the timer to keep track of it
   */
  function startClock() {
    setClock()
    setInterval(setClock, 1000)
  }
  /**
   * start tracking the date label
   */
  function startDateTimer() {
    const prefixDateValue = (n: number) => {
      if (n.toString().length < 2) {
        return `0${n.toString()}`
      }
      return n.toString()
    }
    setInterval(() => {
      const d = new Date()
      date = `${prefixDateValue(d.getDate())} ${months[d.getMonth()]} ${d.getFullYear()}`
    }, 60000)
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
   * start timers
  */
  onMount(() => {
    startClock()
    startDateTimer()
  })
</script>

<!-- template -->
<svelte:window onmouseup={onMouseUp} onmousemove={onMouseMove} />
<div
  class="container"
  role="button"
  tabindex="0"
  bind:this={container}
  onmousedown={onMouseDown}
  onfocusin={onFocus}
  onfocusout={onBlur}
  data-draggable="true"
>
  <div class="clock">
    <div class="face"></div>
    <div class="hours" bind:this={hours} style:transform={`rotate(${((((new Date()).getHours()) % 12) / 12) * 360 + 90 + ((new Date()).getMinutes() * 6 + ((new Date()).getSeconds() * 6) / 60) / 12}deg)`}></div>
    <div class="minutes" bind:this={minutes} style:transform={`rotate(${(new Date()).getMinutes() * 6 + ((new Date()).getSeconds() * 6) / 60}deg)`}></div>
    <div class="seconds" bind:this={seconds} style:transform={`rotate(${(new Date()).getSeconds() * 6}deg)`}></div>
  </div>
  <div class="date">
    <p>{date}</p>
  </div>
</div>

<!-- styles -->
<style>
  /* containers */
  .container {
    position: absolute;
    left: calc((100% / 4.5));
    top: 4px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    align-self: flex-start;
    width: 114px;
    z-index: 47;
  }
  .container:hover, .container:focus {
    outline-offset: 1px;
    outline: 2px var(--primary-color) dashed;
  }

  /* clock */
  .clock {
    background-color: var(--secondary-background-color);
    background-image: url(/images/general/bg-texture.png);
    box-shadow: color-mix(in srgb, var(--secondary-background-color) var(--opacity-low), transparent) 1px 1px 1px 1px;
    border: 1px solid var(--primary-color);
    width: 114px;
    height: 96px;
    position: relative;
  }
  .face {
    width: 100%;
    height: 100%;
  }
  .face:after {
    content:"";
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 12px;
    height: 12px;
    margin: -6px 0 0 -6px;
    background-color: var(--secondary-background-color);
    background-image: url(/images/general/bg-texture.png);
    border: 1px solid var(--primary-color);
    z-index: 2;
  }
  .hours {
    width: 0;
    height: 0;
    position:absolute;
    top: 50%;
    left: 50%;
    transform-origin: 100% 50%;
    margin: -1px 0 -4px -10%;
    padding: 1px 0 3px 10%;
    background: var(--primary-color);
  }
  .hours:after {
    content: "";
    position: absolute;
    right: 100%;
    top: 0px;
    transform-origin:100% 50%;
    width: 0px;
    height: 0px;
    border-top: 2px solid transparent;
    border-right: 24px solid var(--primary-color);
    border-bottom: 2px solid transparent;
  }
  .minutes {
    width: 0;
    height: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: 49% 100%;
    margin: -39px 0.5px 0 0;
    padding: 40px 0.5px 0;
    background: var(--primary-color);
  }
  .minutes:after {
    content:"";
    position: absolute;
    left: 100%;
    top: 0;
    bottom: 0;
    transform-origin: -49% 100%;
    width: 0px;
    height: 0px;
    border-top: 3px solid transparent;
    border-right: 3px solid transparent;
    border-bottom: 38px solid var(--primary-color);
  }
  .seconds {
    width: 0;
    height: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: 49% 100%;
    margin: -44px 0.5px 0 0;
    padding: 43px 0.5px 0;
    background: var(--primary-color);
  }
  .seconds:after {
    content: "";
    position: absolute;
    left: 100%;
    top: 0;
    bottom: 0;
    transform-origin: -49% 100%;
    width: 0px;
    height: 0px;
    border-top: 3px solid transparent;
    border-right: 3px solid transparent;
    border-bottom: 42px solid var(--primary-color);
  }
  
  /* date */
  .date {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 114px;
    max-width: 114px;
    min-width: 114px;
    padding-left: 4px;
    padding-right: 4px;
    padding-top: 4px;
    padding-bottom: 4px;
    border: 1px solid var(--primary-color);
    border-bottom-width: 3px;
    border-top: 0px;
    background-color: var(--secondary-background-color);
    background-image: url(/images/general/bg-texture.png);
    box-shadow: color-mix(in srgb, var(--secondary-background-color) var(--opacity-low), transparent) 1px 1px 1px 1px;
  }
  p {
    font-size: 17px;
    font-weight: 400;
    color: var(--primary-color);
    user-select: none;
  }

  /* media queries */
  @media only screen and (min-width: 1920px) {
    .container {
      left: calc((100% / 3));
    }
  }
  @media only screen and (min-width: 520px) and (max-width: 618px) {
    .container {
      top: initial;
      left: initial;
      right: 0px;
      bottom: 0px;
      z-index: 49;
    }
    p {
      font-size: 16px;
    }
  }
  @media only screen and (min-width: 619px) and (max-width: 1279px) {
    .container {
      top: initial;
      left: initial;
      right: 0px;
      bottom: 0px;
      z-index: 49;
    }
  }
  @media only screen and (max-width: 520px) {
    .container {
      top: initial;
      left: initial;
      bottom: 52px;
      right: 0;
      z-index: 49;
    }
    .date {
      border-bottom-width: 2px;
    }
    p {
      font-size: 16px;
    }
  }
</style>