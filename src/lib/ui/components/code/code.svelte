<!-- script -->
<script lang="ts">
  /* imports */
  import SimpleBar from 'simplebar'
	import type { CodeProps } from '$lib/ui/components/code/code.types'
	import { highlighter } from '$lib/data/articles/articles.data'
	import CopyIcon from '$lib/ui/icons/code/copy.icon.svelte'
	import BashIcon from '$lib/ui/icons/code/bash.icon.svelte'
	import JsonIcon from '$lib/ui/icons/code/json.icon.svelte'
	import ConsoleIcon from '$lib/ui/icons/code/console.icon.svelte'
	import ConfigIcon from '$lib/ui/icons/code/config.icon.svelte'

  /* props */
  let { language, code, title, icon }: CodeProps = $props()

  /* state */
  let sintax = $state('')
  let tooltip = $state('copy to clipboard')

  /* constansts */
  let timeout: NodeJS.Timeout | null = null

  /* refs */
  let container: HTMLDivElement

  /* functions */
  /**
   * copy to clipboard and change the text after a cd
   */
  function copy() {
    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }
    navigator.clipboard.writeText(code).then(() => {
      tooltip = 'copied to clipboard'
    })
    timeout = setTimeout(() => {
      tooltip = 'copy to cliboard'
    }, 1000)
  }

  /* effects */
  /**
   * start highligter with settings when the highlighter is ready
   */
  $effect(() => {
    if (!$highlighter) return
    sintax = $highlighter?.codeToHtml(code, {
      lang: language,
      theme: 'synthwave-84',
      colorReplacements: {
        '#262335': 'transparent',
      },
    })
    if (!container) return
    new SimpleBar(container, { autoHide: true })
  })
</script>

<!-- template -->
<div class="container">
  <div class="filebar">
    <button class="filename" onclick={copy}>
      {#if icon === 'json'}
        <JsonIcon />
      {:else if icon === 'bash'}
        <BashIcon />
      {:else if icon === 'console'}
        <ConsoleIcon />
      {:else if icon === 'config'}
        <ConfigIcon />
      {/if}
      <h6>
        {title}
      </h6>
    </button>
    <button class="copy" onclick={copy}>
      <CopyIcon />
    </button>
    <div class="tooltip">{tooltip}</div>
  </div>
  <div class="sintax" bind:this={container}>
    {@html sintax}
  </div>
</div>

<!-- styles -->
<style>
  .container {
    background-color: var(--code-background-color);
    border: 1px solid var(--primary-color);
    border-bottom-width: 3px;
    position: relative;
  }
  .sintax {
    background-image: var(--background-image);
    background-color: var(--code-background-color);
    padding-left: 6px;
    padding-right: 2px;
    padding-top: 4px;
    padding-bottom: 4px;
    overflow-x: auto;
  }
  .filebar {
    width: 100%;
    background-color: oklch(0.3118 0.0934 321.01);
    border-bottom: 1px solid var(--primary-color);
    margin-bottom: 1px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-image: var(--background-image);
    padding-left: 6px;
    column-gap: 6px;
  }
  .filename {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    user-select: none;
  }
  h6 {
    color: var(--white-color);
    letter-spacing: 0.3px;
    line-height: 100%;
    font-size: 14px;
    font-family: 'GeistMono';
    font-weight: 400;
    text-shadow: 0px 0px var(--shadow-primary-color), 0px 0px var(--shadow-secondary-color);
    margin-left: 4px;
  }
  button {
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .copy {
    border-left: 1px solid var(--primary-color);
    height: 29px;
    width: 32px;
  }
  .filename:hover h6 {
    text-decoration: underline;
  }
  .copy:hover, .copy:focus, .copy:focus-visible {
    outline-offset: -1px;
    outline: 2px var(--primary-color) dashed;
    background-color: color-mix(in srgb, var(--primary-color) var(--opacity-v-low), transparent);
  }
  .filename:hover ~ .tooltip, .filename:focus ~ .tooltip, .filename:focus-visible ~ .tooltip {
    visibility: visible;
  }
  .copy:hover + .tooltip, .copy:focus + .tooltip, .copy:focus-visible + .tooltip {
    visibility: visible;
  }
  :global(pre) {
    text-shadow: 0px 0px var(--shadow-primary-color), 0px 0px var(--shadow-secondary-color);
    font-size: 17px;
    font-family: 'GeistMono';
    letter-spacing: 1px;
  }
  :global(code) {
    padding-right: 4px;
  }
  .tooltip {
    position: absolute;
    visibility: hidden;
    width: max-content;
    background-color: var(--modal-background-color);
    background-image: url(/images/general/bg-texture.png);
    padding-left: 4px;
    padding-right: 4px;
    padding-bottom: 3px;
    padding-top: 1px;
    border: 1px solid var(--primary-color);
    border-bottom-width: 2px;
    bottom: -2px;
    right: -1px;
    z-index: 2;
    font-size: 16px;
  }

  @container (width < 900px) {
    :global(pre) {
      padding-bottom: 4px;
    }
  }
</style>

