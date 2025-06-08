<!-- script -->
<script lang="ts">
  /* imports */
  import { onMount } from 'svelte'
  import type { VideoProps } from '$lib/ui/components/media/video/video.types'

  /* props */
  let { src, text }: VideoProps = $props()

  /* state */
  let loading: boolean = $state(true)
  let loadingTags: number[] = $state([])
  
  /* constants */
  let timeout: NodeJS.Timeout | null = null

  /* functions */
  /**
   * start animation cycle for loading animation
   */
  function startAnimation() {
    loadingTags = [...loadingTags, 0]
    const random = Math.random() * (600 - 200) + 200
    timeout = setTimeout(() => {
      startAnimation()
    }, random)
  }

  /* callbacks */
  /**
   * image loaded callback
   */
  function onLoad() {
    if (timeout) { clearTimeout(timeout) }
    timeout = null
    loading = false
  }

  /* effects */
  /**
   * start animation on mount
  */
  onMount(() => {
    startAnimation()
  })
</script>

<!-- template -->
<div class="container">
  <p>{text}</p>
  <video muted autoplay loop style:opacity={loading ? '0' : '1'} onloadeddata={onLoad}>
    <source src={src} type="video/mp4" />
  </video>
  {#if loading}
    <div class="loading-container">
      <span>THE VIDEO IS LOADING...</span>
      <div class="loading-bar">
        {#each loadingTags as t, i (i)}
          <div class="loading-tag" data-tag={t}></div>
        {/each}
      </div>
    </div>
  {/if}
</div>

<!-- styles -->
<style>
  /* animations */
  @keyframes loading-tag-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  /* containers */
  .container {
    position: relative;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }

  /* text */
  p {
    position: absolute;
    top: -16px;
    border: 1px solid var(--primary-color);
    border-bottom-width: 3px;
    font-size: 17px;
    text-transform: uppercase;
    color: var(--primary-color);
    background-color: var(--modal-background-color);
    padding-left: 14px;
    padding-right: 16px;
    padding-bottom: 2px;
    padding-top: 2px;
  }

  /* video */
  video {
    width: 100%;
    max-height: 300px;
    height: 300px;
    min-height: 300px;
    width: 430px;
    max-width: 430px;
    min-width: 430px;
    object-fit: cover;
    border: 2px solid var(--primary-color);
    border-bottom-width: 4px;
  }

  /* loading */
  span {
    font-size: 18px;
    font-weight: 400;
    color: var(--primary-color);
    margin-bottom: 4px;
  }
  .loading-container {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: calc(100% - 22px);
  }
  .loading-bar {
    width: 100%;
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
    height: 32px;
    overflow: hidden;
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
</style>