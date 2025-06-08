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
  <div class="bubbles"></div>
  <div class="butterfly fish row1 ltr"></div>
  <div class="jelly fish row1 rtl-fast"></div>
  <div class="guppy fish row2 rtl"></div>
  <div class="angel fish row2 rtl-delay1"></div>
  <div class="seahorse fish row3 rtl-delay-2"></div>
  <div class="red fish row4 rtl-delay2"></div>
  <div class="jelly fish row4 ltr"></div>
  <div class="minnow fish row5 rtl"></div>
  <div class="seahorse fish row5 ltr-fast"></div>
  <div class="angel fish row6 rtl-fast"></div>
  <div class="striped fish row7 ltr"></div>
  <div class="guppy fish row7 ltr-delay1"></div>
  <div class="angel fish row8 ltr-delay2"></div>
  <div class="minnow fish row8 rtl-delay2"></div>
  <div class="flounder fish row9 rtl"></div>
  <div class="red fish row9 ltr-delay1"></div>
</div>

<!-- styles -->
<style>
  /* container */
  .screen-saver {
    background-color: #00699470;
    background-image: url(/images/screen/seafloor.jpg);
    background-position: bottom;
    background-repeat: repeat-x;
    position: absolute;
    z-index: 999;
    height: 100dvh;
    width: 100dvw;
  }

  /* bubbles */
  .bubbles {
    position: absolute;
    bottom: -60px;
    display: block;
    width: 50px;
    height: 56px;
    background-repeat: no-repeat;
    background-image: url(/images/screen/bubbles_50.png);
    -webkit-animation: rise 13s linear infinite, reappear 39s steps(3) infinite, bubble-alt 0.2s steps(2) infinite;
    -moz-animation: rise 13s linear infinite, reappear 39s steps(3) infinite, bubble-alt 0.2s steps(2) infinite;
    -o-animation: rise 13s linear infinite, reappear 39s steps(3) linear infinite, bubble-alt 0.2s steps(2) infinite;
    animation: rise 13s linear infinite, reappear 39s steps(3) linear infinite, bubble-alt 0.2s steps(2) infinite;
  }

  /* fishes */
  .fish {
    width: 145px;
    height: 145px;
    position: absolute;
    left: -50%;
    top: -50%;
  }
  .butterfly { background-image: url(/images/screen/fish-butterfly.png) }
  .guppy { background-image: url(/images/screen/fish-guppy.png) }
  .seahorse { background-image: url(/images/screen/fish-seahorse.png) }
  .jelly { background-image: url(/images/screen/fish-jelly.png) }
  .minnow { background-image: url(/images/screen/fish-minnow.png) }
  .red { background-image: url(/images/screen/fish-red.png) }
  .striped { background-image: url(/images/screen/fish-striped.png) }
  .angel { background-image: url(/images/screen/fish-angel.png) }
  .flounder { background-image: url(/images/screen/fish-flounder.png) }

  /* routes */
  .ltr {
    -webkit-animation: ltr 26s linear infinite, toggle 0.2s steps(2) infinite;
    -moz-animation: ltr 26s linear infinite, toggle 0.2s steps(2) infinite;
    -o-animation: ltr 26s linear infinite, toggle 0.2s steps(2) infinite;
    animation: ltr 26s linear infinite, toggle 0.2s steps(2) infinite;
  }
  .ltr-delay1 {
    -webkit-animation: ltr 26s 4s linear infinite, toggle 0.2s steps(2) infinite;
    -moz-animation: ltr 26s 4s linear infinite, toggle 0.2s steps(2) infinite;
    -o-animation: ltr 26s 4s linear infinite, toggle 0.2s steps(2) infinite;
    animation: ltr 26s 4s linear infinite, toggle 0.2s steps(2) infinite;
  }
  .ltr-delay2 {
    -webkit-animation: ltr 26s 8s linear infinite, toggle 0.2s steps(2) infinite;
    -moz-animation: ltr 26s 8s linear infinite, toggle 0.2s steps(2) infinite;
    -o-animation: ltr 26s 8s linear infinite, toggle 0.2s steps(2) infinite;
    animation: ltr 26s 8s linear infinite, toggle 0.2s steps(2) infinite;
  }
  .ltr-fast {
    -webkit-animation: ltr 17s linear infinite, toggle 0.2s steps(2) infinite;
    -moz-animation: ltr 17s linear infinite, toggle 0.2s steps(2) infinite;
    -o-animation: ltr 17s linear infinite, toggle 0.2s steps(2) infinite;
    animation: ltr 17s linear infinite, toggle 0.2s steps(2) infinite;
  }
  .rtl {
    -webkit-animation: rtl 26s linear infinite, toggle 0.2s steps(2) infinite;
    -moz-animation: rtl 26s linear infinite, toggle 0.2s steps(2) infinite;
    -o-animation: rtl 26s linear infinite, toggle 0.2s steps(2) infinite;
    animation: rtl 26s linear infinite, toggle 0.2s steps(2) infinite;
  }
  .rtl-delay1 {
    -webkit-animation: rtl 26s 3s linear infinite, toggle 0.2s steps(2) infinite;
    -moz-animation: rtl 26s 3s linear infinite, toggle 0.2s steps(2) infinite;
    -o-animation: rtl 26s 3s linear infinite, toggle 0.2s steps(2) infinite;
    animation: rtl 26s 4s linear infinite, toggle 0.2s steps(2) infinite;
  }
  .rtl-delay2 {
    -webkit-animation: rtl 26s 7s linear infinite, toggle 0.2s steps(2) infinite;
    -moz-animation: rtl 26s 7s linear infinite, toggle 0.2s steps(2) infinite;
    -o-animation: rtl 26s 7s linear infinite, toggle 0.2s steps(2) infinite;
    animation: rtl 26s 7s linear infinite, toggle 0.2s steps(2) infinite;
  }
  .rtl-fast {
    -webkit-animation: rtl 17s linear infinite, toggle 0.2s steps(2) infinite;
    -moz-animation: rtl 17s linear infinite, toggle 0.2s steps(2) infinite;
    -o-animation: rtl 17s linear infinite, toggle 0.2s steps(2) infinite;
    animation: rtl 17s linear infinite, toggle 0.2s steps(2) infinite;
  }

  /* positions */
  .row1 { top: 0% }
  .row2 { top: 9% }
  .row3 { top: 18% }
  .row4 { top: 27% }
  .row5 { top: 36% }
  .row6 { top: 45% }
  .row7 { top: 54% }
  .row8 { top: 63% }
  .row9 { top: 72% }

  /* ltr animations */
  @-webkit-keyframes ltr {
    0% { left: -30%; }
    50% { left: 110%; }
    51% {
      -webkit-transform: rotateY(0);
      -moz-transform: rotateY(0);
      -ms-transform: rotateY(0);
      -o-transform: rotateY(0);
      transform: rotateY(0);
    }
    52% {
      -webkit-transform: rotateY(180deg);
      -moz-transform: rotateY(180deg);
      -ms-transform: rotateY(180deg);
      -o-transform: rotateY(180deg);
      transform: rotateY(180deg);
    }
    100% {
      -webkit-transform: rotateY(180deg);
      -moz-transform: rotateY(180deg);
      -ms-transform: rotateY(180deg);
      -o-transform: rotateY(180deg);
      transform: rotateY(180deg);
      left: -30%;
    }
  }
  @-moz-keyframes ltr {
    0% { left: -30%; }
    50% { left: 110%; }
    51% {
      -webkit-transform: rotateY(0);
      -moz-transform: rotateY(0);
      -ms-transform: rotateY(0);
      -o-transform: rotateY(0);
      transform: rotateY(0);
    }
    52% {
      -webkit-transform: rotateY(180deg);
      -moz-transform: rotateY(180deg);
      -ms-transform: rotateY(180deg);
      -o-transform: rotateY(180deg);
      transform: rotateY(180deg);
    }
    100% {
      -webkit-transform: rotateY(180deg);
      -moz-transform: rotateY(180deg);
      -ms-transform: rotateY(180deg);
      -o-transform: rotateY(180deg);
      transform: rotateY(180deg);
      left: -30%;
    }
  }
  @-o-keyframes ltr {
    0% { left: -30%; }
    50% { left: 110%; }
    51% {
      -webkit-transform: rotateY(0);
      -moz-transform: rotateY(0);
      -ms-transform: rotateY(0);
      -o-transform: rotateY(0);
      transform: rotateY(0);
    }
    52% {
      -webkit-transform: rotateY(180deg);
      -moz-transform: rotateY(180deg);
      -ms-transform: rotateY(180deg);
      -o-transform: rotateY(180deg);
      transform: rotateY(180deg);
    }
    100% {
      -webkit-transform: rotateY(180deg);
      -moz-transform: rotateY(180deg);
      -ms-transform: rotateY(180deg);
      -o-transform: rotateY(180deg);
      transform: rotateY(180deg);
      left: -30%;
    }
  }
  @keyframes ltr {
    0% { left: -30%; }
    50% { left: 110%; }
    51% {
      -webkit-transform: rotateY(0);
      -moz-transform: rotateY(0);
      -ms-transform: rotateY(0);
      -o-transform: rotateY(0);
      transform: rotateY(0);
    }
    52% {
      -webkit-transform: rotateY(180deg);
      -moz-transform: rotateY(180deg);
      -ms-transform: rotateY(180deg);
      -o-transform: rotateY(180deg);
      transform: rotateY(180deg);
    }
    100% {
      -webkit-transform: rotateY(180deg);
      -moz-transform: rotateY(180deg);
      -ms-transform: rotateY(180deg);
      -o-transform: rotateY(180deg);
      transform: rotateY(180deg);
      left: -30%;
    }
  }

  /* rtl */
  @-webkit-keyframes rtl {
    0% {
      -webkit-transform: rotateY(180deg);
      -moz-transform: rotateY(180deg);
      -ms-transform: rotateY(180deg);
      -o-transform: rotateY(180deg);
      transform: rotateY(180deg);
      left: 110%;
    }
    50% { left: -30%; }
    51% {
      -webkit-transform: rotateY(180deg);
      -moz-transform: rotateY(180deg);
      -ms-transform: rotateY(180deg);
      -o-transform: rotateY(180deg);
      transform: rotateY(180deg);
    }
    52% {
      -webkit-transform: rotateY(0);
      -moz-transform: rotateY(0);
      -ms-transform: rotateY(0);
      -o-transform: rotateY(0);
      transform: rotateY(0);
    }
    100% { left: 110%; }
  }
  @-moz-keyframes rtl {
    0% {
      -webkit-transform: rotateY(180deg);
      -moz-transform: rotateY(180deg);
      -ms-transform: rotateY(180deg);
      -o-transform: rotateY(180deg);
      transform: rotateY(180deg);
      left: 110%;
    }
    50% { left: -30%; }
    51% {
      -webkit-transform: rotateY(180deg);
      -moz-transform: rotateY(180deg);
      -ms-transform: rotateY(180deg);
      -o-transform: rotateY(180deg);
      transform: rotateY(180deg);
    }
    52% {
      -webkit-transform: rotateY(0);
      -moz-transform: rotateY(0);
      -ms-transform: rotateY(0);
      -o-transform: rotateY(0);
      transform: rotateY(0);
    }
    100% { left: 110%; }
  }
  @-o-keyframes rtl {
    0% {
      -webkit-transform: rotateY(180deg);
      -moz-transform: rotateY(180deg);
      -ms-transform: rotateY(180deg);
      -o-transform: rotateY(180deg);
      transform: rotateY(180deg);
      left: 110%;
    }
    50% { left: -30%; }
    51% {
      -webkit-transform: rotateY(180deg);
      -moz-transform: rotateY(180deg);
      -ms-transform: rotateY(180deg);
      -o-transform: rotateY(180deg);
      transform: rotateY(180deg);
    }
    52% {
      -webkit-transform: rotateY(0);
      -moz-transform: rotateY(0);
      -ms-transform: rotateY(0);
      -o-transform: rotateY(0);
      transform: rotateY(0);
    }
    100% { left: 110%; }
  }
  @keyframes rtl {
    0% {
      -webkit-transform: rotateY(180deg);
      -moz-transform: rotateY(180deg);
      -ms-transform: rotateY(180deg);
      -o-transform: rotateY(180deg);
      transform: rotateY(180deg);
      left: 110%;
    }
    50% { left: -30%; }
    51% {
      -webkit-transform: rotateY(180deg);
      -moz-transform: rotateY(180deg);
      -ms-transform: rotateY(180deg);
      -o-transform: rotateY(180deg);
      transform: rotateY(180deg);
    }
    52% {
      -webkit-transform: rotateY(0);
      -moz-transform: rotateY(0);
      -ms-transform: rotateY(0);
      -o-transform: rotateY(0);
      transform: rotateY(0);
    }
    100% { left: 110%; }
  }

  /* bubbles animations */
  @-webkit-keyframes rise {
    from {
      -webkit-transform: translate(0, 0);
      -moz-transform: translate(0, 0);
      -o-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
      transform: translate(0, 0);
    }
    to {
      -webkit-transform: translate(0, -1800px);
      -moz-transform: translate(0, -1800px);
      -o-transform: translate(0, -1800px);
      -ms-transform: translate(0, -1800px);
      transform: translate(0, -1800px);
    }
  }
  @-moz-keyframes rise {
    from {
      -webkit-transform: translate(0, 0);
      -moz-transform: translate(0, 0);
      -o-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
      transform: translate(0, 0);
    }
    to {
      -webkit-transform: translate(0, -1800px);
      -moz-transform: translate(0, -1800px);
      -o-transform: translate(0, -1800px);
      -ms-transform: translate(0, -1800px);
      transform: translate(0, -1800px);
      }
  }
  @-o-keyframes rise {
    from {
      -webkit-transform: translate(0, 0);
      -moz-transform: translate(0, 0);
      -o-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
      transform: translate(0, 0);
    }
    to {
      -webkit-transform: translate(0, -1800px);
      -moz-transform: translate(0, -1800px);
      -o-transform: translate(0, -1800px);
      -ms-transform: translate(0, -1800px);
      transform: translate(0, -1800px);
    }
  }
  @keyframes rise {
    from {
      -webkit-transform: translate(0, 0);
      -moz-transform: translate(0, 0);
      -o-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
      transform: translate(0, 0);
    }
    to {
      -webkit-transform: translate(0, -1800px);
      -moz-transform: translate(0, -1800px);
      -o-transform: translate(0, -1800px);
      -ms-transform: translate(0, -1800px);
      transform: translate(0, -1800px);
    }
  }
  @-webkit-keyframes reappear {
    from { left: 20%; }
    to   { left: 80%; }
  }
  @-moz-keyframes reappear {
    from { left: 20%; }
    to   { left: 80%; }
  }
  @-o-keyframes reappear {
    from { left: 20%; }
    to   { left: 80%; }
  }
  @keyframes reappear {
    from { left: 20%; }
    to   { left: 80%; }
  }
  @-webkit-keyframes bubble-alt {
    from { background-position: 0; }
    to   { background-position: -100px; }
  }
  @-moz-keyframes bubble-alt {
    from { background-position: 0; }
    to   { background-position: -100px; }
  }
  @-o-keyframes bubble-alt {
    from { background-position: 0; }
    to   { background-position: -100px; }
  }
  @keyframes bubble-alt {
    from { background-position: 0; }
    to   { background-position: -100px; }
  }
  @-webkit-keyframes toggle {
    from { background-position: 0; }
    to   { background-position: -290px; }
  }
  @-moz-keyframes toggle {
    from { background-position: 0; }
    to   { background-position: -290px; }
  }
  @-o-keyframes toggle {
    from { background-position: 0; }
    to   { background-position: -290px; }
  }
  @keyframes toggle {
    from { background-position: 0; }
    to   { background-position: -290px; }
  }
</style>