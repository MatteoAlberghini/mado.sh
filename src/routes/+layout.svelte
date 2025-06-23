<!--
TODO:
 - make cursor selection a setting
 - add themes
 - add audio queue on click
 - add sparks when clicking
-->

<!-- script -->
<script lang="ts">
  /* imports */
  import 'simplebar/dist/simplebar.min.css'
  import '$lib/styles/scrollbars.css'
	import { onMount, type Snippet } from 'svelte'
  import { DESKTOP_ICONS } from '$lib/data/desktop/desktop.data'
  import { getScreenSaverID, screenPlaying, setScreenSaver, currentScreen, SCREENS } from '$lib/data/settings/screen.saver.data'
	import DesktopButton from '$lib/ui/components/buttons/desktop/desktop.button.svelte'
	import { getSoundActive, getSoundVolume, setSoundActive, setSoundVolume, soundActive, clickSoundElement, soundVolume } from '$lib/data/settings/sound.data'
	import { getIconSize, setIconSize } from '$lib/data/settings/icon.data'
	import Topbar from '$lib/ui/macro/topbar/topbar.svelte'
  
  /* props */
  let { children }: { children?: Snippet } = $props()

  /* derived */
  let isScreenPlaying = $derived($screenPlaying)
  let screen = $derived($currentScreen)

  /* callbacks */
  /**
   * click sound on click
   */
  function onClick() {
    $clickSoundElement.play()
  }

  /* effects */
  /**
   * set initial values for store upon page load
  */
  onMount(() => {
    setScreenSaver(getScreenSaverID())
    setSoundActive(getSoundActive())
    setSoundVolume(getSoundVolume())
    setIconSize(getIconSize())
  })
</script>

<!-- template -->
<svelte:head>
  <meta name="darkreader-lock">
  <link rel="preload" as="image" href="/cursors/bg2/cursor.png" />
  <link rel="preload" as="image" href="/cursors/bg2/cursor_click.png" />
  <link rel="preload" as="image" href="/images/general/bg-texture.png" />
</svelte:head>

<svelte:window onclick={onClick} />
<main>
  {#if isScreenPlaying}
    {#each SCREENS as scr (scr.id)}
      {#if scr.id === screen}
        {@render scr.element()}
      {/if}
    {/each}
  {/if}
  <audio src="/audio/click.ogg" bind:this={$clickSoundElement} muted={!$soundActive} volume={$soundVolume}></audio>
  <div class="grain"></div>
  <div class="content">
    <Topbar />
    {#each DESKTOP_ICONS as icon (icon.id)}
      <DesktopButton {...icon} />
    {/each}
    {@render children?.()}
  </div>
</main>

<!-- styles -->
<style>
  /* global */
  :root {
    --background-color: #B077FF;
    --secondary-background-color: #402F6E;
    --primary-color: #FFD200;
    --secondary-color: #E8492C;
    --text-color: #27213C;
    --selection-color: #FFD200;
    --selection-background-color: #E8492C;
    --shadow-primary-color: #0FD2FF;
    --shadow-secondary-color: #F60099;

    --red-color: #F44336;
    --white-color: #FFF4E9;
    
    --cursor-idle: url(/cursors/bg2/cursor.png);
    --cursor-click: url(/cursors/bg2/cursor_click.png);

    --transition-timing-fast: 85ms;
    --transition-timing-medium: 120ms;
    --transition-timing-long: 400ms;

    --opacity-low: 30%;
  }
  [data-theme='lavender']:root {
    --background-color: #B077FF;
    --secondary-background-color: #402F6E;
    --primary-color: #FFD200;
    --secondary-color: #E8492C;
    --text-color: #27213C;
    --shadow-primary-color: #0FD2FF;
    --shadow-secondary-color: #F60099;
  }
  [data-theme='jordy-blue']:root {
    --background-color: #8FB5F5;
    --secondary-background-color: #3D5A80;
    --primary-color: #FFD200;
    --secondary-color: #E8492C;
    --text-color: #27213C;
    --shadow-primary-color: #0FD2FF;
    --shadow-secondary-color: #F60099;
  }
  [data-theme='pistachio']:root {
    --background-color: #89AB51;
    --secondary-background-color: #19323C;
    --primary-color: #E8492C;
    --secondary-color: #FFD200;
    --text-color: #0D0A17;
    --shadow-primary-color: #5AB1BB;
    --shadow-secondary-color: #F6AE2D;
  }
  [data-icon-size="1"]:root {
    --icon-size: 1.0;
  }
  [data-icon-size="1.1"]:root {
    --icon-size: 1.1;
  }
  [data-icon-size="1.2"]:root {
    --icon-size: 1.2;
  }
  :global {
    html, body {
      height: 100%;
      font-size: 100%;
      text-rendering: optimizeLegibility;
      scroll-behavior: smooth;
      overflow: hidden;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
      font-family: 'Dosis', Arial, sans-serif;
      cursor: var(--cursor-idle) 0 12, pointer;
    }
    *:hover {
      cursor: var(--cursor-idle) 0 12, pointer;
    }
    *:active {
      cursor: var(--cursor-click) 0 12, pointer;
    }
    *:focus-visible {
      outline: 2px var(--primary-color) dashed;
    }
    *::selection {
      color: var(--selection-color);
      background-color: var(--selection-background-color);
    }
    span, p, a, h1, h2, h3, h4, h5, h6, input, label, textarea, button, ul, li {
      text-shadow: 1px 0px var(--shadow-primary-color), 0px -1px var(--shadow-secondary-color);
    }
  }
  
  /* animations */
  @keyframes grain {
    0%, 100% { transform:translate(0, 0) }
    10% { transform:translate(-5%, -10%) }
    20% { transform:translate(-15%, 5%) }
    30% { transform:translate(7%, -25%) }
    40% { transform:translate(-5%, 25%) }
    50% { transform:translate(-15%, 10%) }
    60% { transform:translate(15%, 0%) }
    70% { transform:translate(0%, 15%) }
    80% { transform:translate(3%, 15%) }
    90% { transform:translate(-10%, 10%) }
  }

  /* layouts */
  main {
    height: 100dvh;
    width: 100dvw;
    min-height: 100dvh;
    min-width: 100dvw;
    background-color: var(--background-color);
    background-image: url(/images/general/bg-texture.png);
    position: relative;
    overflow: hidden;
  }
  .grain {
    background-image: url(/images/general/bg-texture.png);
    animation: grain 4s steps(10) infinite;
    background-position: center;
    height: 300%;
    width: 300%;
    left: -50%;
    top: -100%;
    position: absolute;
    z-index: 1;
  }
  .content {
    display: grid;
    overflow: hidden;
    z-index: 2;
    position: relative;
    height: 100%;
    width: 100%;
    max-width: 100dvw;
    grid-template-columns: repeat(auto-fill, calc(91px * var(--icon-size)));
    grid-template-rows: repeat(auto-fill, calc(91px * var(--icon-size)));
    column-gap: 16px;
    row-gap: 16px;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 16px;
    padding-bottom: 16px;
  }

  /* media queries */
  @media only screen and (min-width: 1280px) {
    .content {
      grid-template-columns: repeat(auto-fill, minmax(calc(100px * var(--icon-size)), 1fr));
      grid-template-rows: repeat(auto-fill, minmax(calc(100px * var(--icon-size)), 1fr));
      column-gap: calc(8px * var(--icon-size));
      row-gap: calc(8px * var(--icon-size));
      grid-auto-flow: column;
      padding-left: 8px;
      padding-right: 16px;
      padding-top: 12px;
      padding-bottom: 24px;
    }
  }
  @media only screen and (min-width: 1920px) {
    .content {
      column-gap: 12px;
      row-gap: 12px;
    }
  }
</style>