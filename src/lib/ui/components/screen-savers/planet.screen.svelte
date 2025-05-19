<!-- script -->
<script lang="ts">
  /* imports */
	import { screenPlaying } from '$lib/data/settings/screen.saver.data'
	import { onMount } from 'svelte'

  /* refs */
  let container: HTMLDivElement

  /* callbacks */
  /**
   * stop playing of the screen
   */
  function stopScreen() {
    screenPlaying.set(false)
  }

  /* effect */
  /**
   * autofocus the main div when the screen loads
   */
  onMount(() => {
    if (!container) { return }
    container.focus()
  })
</script>

<!-- template -->
<div
  role="button"
  tabindex="0"
  class="screen-saver"
  onclick={stopScreen}
  onkeydown={stopScreen}
  bind:this={container}
>
  <div class="planet"></div>
</div>

<!-- styles -->
<style>
  /* container */
  .screen-saver {
    background-color: #00000070;
    position: absolute;
    z-index: 999;
    height: 100dvh;
    width: 100dvw;
  }
  .planet {
    display: block;
    width: 240px;
    height: 240px;
    position: absolute;
    background-color: var(--color-black);
    background-image: url(/images/screen/globe_240.jpg);
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    -webkit-animation: moveX 3s linear 0s infinite alternate, moveY 3.4s linear 0s infinite alternate, spin 1.4s steps(21) infinite;
    -moz-animation: moveX 3s linear 0s infinite alternate, moveY 3.4s linear 0s infinite alternate, spin 1.4s steps(21) infinite;
    -o-animation: moveX 3s linear 0s infinite alternate, moveY 3.4s linear 0s infinite alternate, spin 1.4s steps(21) infinite;
    animation: moveX 3s linear 0s infinite alternate, moveY 3.4s linear 0s infinite alternate, spin 1.4s steps(21) infinite;
  }

  /* keyframes */
  @-webkit-keyframes moveX {
    from { left: calc(100% - 240px); } to { left: 0; }
  }
  @-moz-keyframes moveX {
    from { left: calc(100% - 240px); } to { left: 0; }
  }
  @-o-keyframes moveX {
    from { left: calc(100% - 240px); } to { left: 0; }
  }
  @keyframes moveX {
    from { left: calc(100% - 240px); } to { left: 0; }
  }
  @-webkit-keyframes moveY {
    from { top: calc(100% - 240px); } to { top: 0; }
  }
  @-moz-keyframes moveY {
    from { top: calc(100% - 240px); } to { top: 0; }
  }
  @-o-keyframes moveY {
    from { top: calc(100% - 240px); } to { top: 0; }
  }
  @keyframes moveY {
    from { top: calc(100% - 240px); } to { top: 0; }
  }
  @-webkit-keyframes spin {
    from { background-position: -5040px; }
    to { background-position: 0px; }
  }
  @-moz-keyframes spin {
    from { background-position: -5040px; }
    to { background-position: 0px; }
  }
  @-ms-keyframes spin {
    from { background-position: -5040px; }
    to { background-position: 0px; }
  }
  @-o-keyframes spin {
    from { background-position: -5040px; }
    to { background-position: 0px; }
  }
  @keyframes spin {
    from { background-position: -5040px; }
    to { background-position: 0px; }
  }
</style>