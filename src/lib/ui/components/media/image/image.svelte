<!-- script -->
<script lang="ts">
  /* imports */
	import { onMount } from 'svelte'
  import type { ImageProps } from '$lib/ui/components/media/image/image.types'

  /* props */
  let { src, alt, lazy, position = '50% 50%' }: ImageProps = $props()

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
{#if typeof src === 'string'}
  <div class="figure">
    <img
      src={src}
      alt={alt}
      loading={lazy ? 'lazy' : undefined}
      draggable="false"
      onload={onLoad}
      style:opacity={loading ? '0' : '1'}
      style:object-position={position}
    />
    {#if loading}
      <div class="loading-container">
        <div class="loading-bar" style:height="22px">
          {#each loadingTags as t, i (i)}
            <div class="loading-tag" data-tag={t}></div>
          {/each}
        </div>
      </div>
    {/if}
  </div>
  {:else}
  <figure>
      <enhanced:img
        src={src}
        alt={alt}
        loading={lazy ? 'lazy' : undefined}
        draggable="false"
        onload={onLoad}
        style:opacity={loading ? '0' : '1'}
        style:object-position={position}
      />
    {#if loading}
      <div class="loading-container">
        <span>THE IMAGE IS LOADING...</span>
        <div class="loading-bar">
          {#each loadingTags as t, i (i)}
            <div class="loading-tag" data-tag={t}></div>
          {/each}
        </div>
      </div>
    {/if}
  </figure>
{/if}

<!-- styles -->
<style>
  /* animations */
  @keyframes loading-tag-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  /* image */
  figure {
    position: relative;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .figure {
    position: relative;
    max-width: 100%;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  :global(picture) {
    width: 100%;
    height: 100%;
  }
  :global(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
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