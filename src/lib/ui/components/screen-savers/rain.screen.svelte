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
  <div class="rain r1"></div>
  <div class="rain r2"></div>
  <div class="rain r3"></div>
  <div class="rain r4"></div>
  <div class="rain r5"></div>
  <div class="rain r6"></div>
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
    -webkit-animation: flash 8s linear infinite;
    -moz-animation: flash linear 8s infinite;
    -o-animation: flash linear 8s infinite;
    animation: flash linear 8s infinite;
  }

  /* rain */
  .rain {
    position: absolute;
    top: -4800px;
    left: -1244px;
    width: calc(100% + 1244px);
    height: 4800px;
  }
  .r1 {
    -webkit-animation: fall 2.2s infinite linear;
    -moz-animation: fall 2.2s infinite linear;
    -o-animation: fall 2.2s infinite linear;
    animation: fall 2.2s infinite linear;
    background: url(/images/screen/rain-tile-near.png) repeat;
  }
  .r2 {
    -webkit-animation: fall 2.2s 1s infinite linear;
    -moz-animation: fall 2.2s 1s infinite linear;
    -o-animation: fall 2.2s 1s infinite linear;
    animation: fall 2.2s 1s infinite linear;
    background: url(/images/screen/rain-tile-near.png) repeat;
  }
  .r3 {
    -webkit-animation: fall 4s infinite linear;
    -moz-animation: fall 4s infinite linear;
    -o-animation: fall 4s infinite linear;
    animation: fall 4s infinite linear;
    background: url(/images/screen/rain-tile-mid.png) repeat;
  }
  .r4 {
    -webkit-animation: fall 4.5s 3.2s infinite linear;
    -moz-animation: fall 4.5s 3.2s infinite linear;
    -o-animation: fall 4.5s 3.2s infinite linear;
    animation: fall 4.5s 3.2s infinite linear;
    background: url(/images/screen/rain-tile-mid.png) repeat;
  }
  .r5 {
    -webkit-animation: fall 6s infinite linear;
    -moz-animation: fall 6s infinite linear;
    -o-animation: fall 6s infinite linear;
    animation: fall 6s infinite linear;
    background: url(/images/screen/rain-tile-distant.png) repeat;
  }
  .r6 {
    -webkit-animation: fall 6s 4s infinite linear;
    -moz-animation: fall 6s 4s infinite linear;
    -o-animation: fall 6s 4s infinite linear;
    animation: fall 6s 4s infinite linear;
    background: url(/images/screen/rain-tile-distant.png) repeat;
  }
  
  /* rain animation */
  @-webkit-keyframes fall {
    from {
      -webkit-transform: translate(0, 0);
      -moz-transform: translate(0, 0);
      -o-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
      transform: translate(0, 0);
    }
    to {
      -webkit-transform: translate(1244px, 6400px);
      -moz-transform: translate(1244px, 6400px);
      -o-transform: translate(1244px, 6400px);
      -ms-transform: translate(1244px, 6400px);
      transform: translate(1244px, 6400px);
    }
  }
  @-moz-keyframes fall {
    from {
      -webkit-transform: translate(0, 0);
      -moz-transform: translate(0, 0);
      -o-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
      transform: translate(0, 0);
    }
    to {
      -webkit-transform: translate(1244px, 6400px);
      -moz-transform: translate(1244px, 6400px);
      -o-transform: translate(1244px, 6400px);
      -ms-transform: translate(1244px, 6400px);
      transform: translate(1244px, 6400px);
    }
  }
  @-o-keyframes fall {
    from {
      -webkit-transform: translate(0, 0);
      -moz-transform: translate(0, 0);
      -o-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
      transform: translate(0, 0);
    }
    to {
      -webkit-transform: translate(1244px, 6400px);
      -moz-transform: translate(1244px, 6400px);
      -o-transform: translate(1244px, 6400px);
      -ms-transform: translate(1244px, 6400px);
      transform: translate(1244px, 6400px);
    }
  }
  @keyframes fall {
    from {
      -webkit-transform: translate(0, 0);
      -moz-transform: translate(0, 0);
      -o-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
      transform: translate(0, 0);
    }
    to {
      -webkit-transform: translate(1244px, 6400px);
      -moz-transform: translate(1244px, 6400px);
      -o-transform: translate(1244px, 6400px);
      -ms-transform: translate(1244px, 6400px);
      transform: translate(1244px, 6400px);
    }
  }
  /* lightning animation */
  @-webkit-keyframes flash {
    0% { }
    98% { background: black; }
    99% { background: white; }
    100% { background: black; }
  }
  @-moz-keyframes flash {
    0% { }
    98% { background: black; }
    99% { background: white; }
    100% { background: black; }
  }
  @-o-keyframes flash {
    0% { }
    98% { background: black; }
    99% { background: white; }
    100% { background: black; }
  }
  @keyframes flash {
    0% { }
    98% { background: black; }
    99% { background: white; }
    100% { background: black; }
  }
</style>