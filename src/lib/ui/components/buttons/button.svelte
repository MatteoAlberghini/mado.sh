<!-- script -->
<script lang="ts">
  /* imports  */
	import type { ButtonProps } from '$lib/ui/components/buttons/button.types'
	import { clickSoundElement } from '$lib/data/settings/sound.data'
	import { untrack } from 'svelte'

  /* props */
  let { height, width, type = 'button', loading, onClick, children }: ButtonProps = $props()

  /* state */
  let stateLoading: boolean = $state(false)
  let loadingTags: number[] = $state([])
  
  /* constants */
  let timeout: NodeJS.Timeout | null = null
  let firstMount: boolean = true

  /* callbacks */
  /**
   * handles on key down when button is highlighted
   * @param e keyboard event
   */
  function onKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      e.preventDefault()
      $clickSoundElement.play()
      if (onClick) onClick()
    }
  }

  /* functions */
  /**
   * start animation cycle for loading animation
   */
  function startAnimation() {
    loadingTags = [...loadingTags, 0]
    if (loadingTags.length === 15) {
      if (timeout) { clearTimeout(timeout) }
      return
    }
    timeout = setTimeout(() => {
      startAnimation()
    }, 300)
  }
  /**
   * recursive function to add more animation values to the loader
   * @param callback function as callback
   */
  function endAnimation(callback: () => void) {
    if (loadingTags.length === 15) {
      if (timeout) { clearTimeout(timeout) }
      callback()
      return
    }
    loadingTags = [...loadingTags, 0]
    timeout = setTimeout(() => {
      endAnimation(callback)
    }, 50)
  }
  /**
   * start loading and start animation
   */
  function startLoading() {
    stateLoading = true
    startAnimation()
  }
  /**
   * stop loading after end animation is called
   */
  function endLoading() {
    if (timeout) { clearTimeout(timeout) }
    if (firstMount === true) {
      firstMount = false
      return
    }
    endAnimation(() => {
      stateLoading = false
      loadingTags = []
    })
  }

  /* effects */
  /**
   * trigger start / end loading based on prop change
  */
  $effect(() => {
    if (loading === true) {
      untrack(() => {
        startLoading()
      }) 
    } else if (loading === false) {
      untrack(() => {
        endLoading()
      })
    }
  })

</script>

<!-- template -->
<div
  class="container"
  style:width={`${width}px`}
>
  <button
    type={type}
    onclick={onClick}
    onkeydown={onKeyDown}
    style:width={`${width}px`}
    style:height={`${height}px`}
  >
    <span
      style:height={`${height - 2}px`}
    >
      {#if !stateLoading}
        {@render children?.()}
      {/if}
      {#if stateLoading}
        <div class="loading-bar" style:height={`${height / 1.7}px`}>
          {#each loadingTags as t, i (i)}
            <div class="loading-tag" data-tag={t}></div>
          {/each}
        </div>
      {/if}
    </span>
  </button>
</div>

<!-- style -->
<style>
  /* animations */
  @keyframes loading-tag-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  /* containers */
  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .loading-bar {
    width: calc(100% - 22px);
    background-color: color-mix(in srgb, var(--primary-color) 30%, transparent);
    background-image: url(/images/general/bg-texture.png);
    border: 1px solid var(--primary-color);
    border-bottom-width: 3px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    column-gap: 4px;
    padding-left: 4px;
    padding-right: 4px;
  }
  .loading-tag {
    height: calc(100% - 4px);
    width: 14px;
    background-color: var(--primary-color);
    background-image: url(/images/general/bg-texture.png);
    flex-shrink: 0;
    animation: loading-tag-in 50ms linear;
    animation-fill-mode: both;
  }

  /* button */
  button {
    background-color: var(--primary-color);
    background-image: url(/images/general/bg-texture.png);
    height: calc(100% + 1px);
  }
  button > span {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--background-color);
    border: 1px solid var(--primary-color);
    background-image: url(/images/general/bg-texture.png);
    transform: translateY(-3px);
    transition: transform 185ms ease-out;
  }
  button:hover > span {
    transform: translateY(-2px);
  }
  button:active > span, button:focus-visible > span {
    transform: translateY(-1px);
  }
  button:disabled > span {
    transform: translateY(-2px);
  }
</style>