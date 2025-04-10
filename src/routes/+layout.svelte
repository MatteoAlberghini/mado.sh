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
	import type { Snippet } from 'svelte'
  import DesktopButton from '$lib/ui/components/buttons/desktop-button/desktop.button.svelte'
	import { UniqueID } from '$lib/ui/components/buttons/desktop-button/desktop.button.data'
  
  /* props */
  let { children }: { children?: Snippet } = $props()

</script>

<!-- template -->
<svelte:head>
  <link rel="preload" as="image" href="/cursors/bg2/cursor.png" />
  <link rel="preload" as="image" href="/cursors/bg2/cursor_click.png" />
</svelte:head>
<main>
  <div class="grain"></div>
  <div class="content">
    <DesktopButton
      text="projects.dir"
      id={UniqueID.changelog}
      type="folder"
      url="https://google.com"
      modal={{}}
      position={{ row: '1', column: '1' }}
    />
    {@render children?.()}
  </div>
</main>

<!-- styles -->
<style>
  /* global */
  :root {
    --background-color: #B682FF;
    --primary-color: #FFD200;
    --text-color: #27213C;
    --selection-color: #FFD200;
    --selection-background-color: #BF354B;
    --shadow-primary-color: #0FD2FF;
    --shadow-secondary-color: #F60099;
    
    --cursor-idle: url(/cursors/bg2/cursor.png);
    --cursor-click: url(/cursors/bg2/cursor_click.png);
    /*
    --red-color: #BF354B;
    --black-color: #27213C;
    --white-color: #FFF4E9;
    --yellow-color: #FFD200;
    --blue-color: #0FD2FF;
    --violet-color: #F60099;
    */
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
    *::selection {
      color: var(--selection-color);
      background-color: var(--selection-background-color);
    }
    span, p, a, h1, h2, h3, h4, h5, h6, input, label, textarea {
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
    80% { transform:translate(3%, 35%) }
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
  }
  .grain {
    background-image: url(/images/general/bg-texture.png);
    animation: grain 8s steps(10) infinite;
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
    grid-template-columns: repeat(auto-fill, 91px);
    grid-template-rows: repeat(auto-fill, 91px);
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
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
      column-gap: 8px;
      row-gap: 8px;
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