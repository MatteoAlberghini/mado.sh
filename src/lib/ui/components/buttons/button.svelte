<!-- script -->
<script lang="ts">
  /* imports  */
	import type { ButtonProps } from '$lib/ui/components/buttons/button.types'
	import { clickSoundElement } from '$lib/data/settings/sound.data'

  /* props */
  let { height, width, onClick, children }: ButtonProps = $props()

  /* callbacks */
  /**
   * handles on key down when button is highlighted
   * @param e keyboard event
   */
  function onKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      e.preventDefault()
      $clickSoundElement.play()
      onClick()
    }
  }

</script>

<!-- template -->
<div
  class="container"
  style:width={`${width}px`}
>
  <button
    onclick={onClick}
    onkeydown={onKeyDown}
    style:width={`${width}px`}
    style:height={`${height}px`}
  >
    <span
      style:height={`${height - 2}px`}
    >
      {@render children?.()}
    </span>
  </button>
</div>

<!-- style -->
<style>
  /* containers */
  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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