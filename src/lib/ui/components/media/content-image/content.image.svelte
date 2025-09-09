<!-- script -->
<script lang="ts">
  /* imports */
	import Image from '$lib/ui/components/media/image/image.svelte'
  import type { ContentImageProps } from '$lib/ui/components/media/content-image/content.image.types'

  /* props */
  let { src, alt, lazy, position, text }: ContentImageProps = $props()
</script>

<!-- template -->
<div>
  <p>{text}</p>
  <Image src={src} alt={alt} position={position} lazy={lazy} />
</div>

<!-- styles -->
<style>
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
    z-index: 2;
  }
  div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    width: max-content;
    max-width: 100%;
  }
  div :global(img) {
    border: 2px solid var(--primary-color);
    border-bottom-width: 4px;
    object-fit: cover;
    max-width: 450px;
  }
</style>