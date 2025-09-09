<!-- script -->
<script lang="ts">
  /* imports */
	import Image from '$lib/ui/components/media/image/image.svelte'
  import type { ImageProps } from '$lib/ui/components/media/image/image.types'

  /* props */
  let { src, alt, lazy, position }: ImageProps = $props()
</script>

<!-- template -->
<div>
  <Image src={src} alt={alt} lazy={lazy} position={position} />
</div>

<!-- styles -->
<style>
  /* image */
  div > :global(figure) {
    width: 100%;
    object-fit: cover;
    aspect-ratio: 16/9;
    max-height: 450px;
    justify-self: flex-start;
    border: 1px solid var(--background-color);
    border-bottom-width: 3px;
  }

  /* container queries */
  @container (width > 1000px) {
    div > :global(figure) {
      max-height: 500px;
    } 
  }
  @container (width > 1400px) {
    div > :global(figure) {
      max-height: 550px;
    } 
  }
  @container (width > 1600px) {
    div > :global(figure) {
      max-height: 600px;
    } 
  }
  @container (width > 1700px) {
    div > :global(figure) {
      max-height: 650px;
    } 
  }
  @container (width > 1920px) {
    div > :global(figure) {
      max-height: 700px;
    } 
  }
</style>