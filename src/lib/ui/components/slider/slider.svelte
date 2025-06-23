<!-- script -->
<script lang="ts">
  /* imports */
	import type { SliderProps } from '$lib/ui/components/slider/slider.types'
	import { clickSoundElement } from '$lib/data/settings/sound.data'

  /* props */
  const { label, min, max, step, value, ranges, onInput }: SliderProps = $props()

  /* callback */
  /**
   * on input change callback, sends the value to parent & plays click sound
   * @param e event callback
   */
  function onInputCallback(e: Event) {
    const target = e.target as HTMLInputElement
    $clickSoundElement.play()
    onInput(target.value)
  }
</script>

<!-- template -->
<label>
  {label}
  <input
    type="range"
    min={min}
    max={max}
    step={step}
    value={value}
    oninput={onInputCallback}
  />
  <div>
    {#each ranges as range (range)}
      <span>{range}</span>
    {/each}
  </div>
</label>

<!-- styles -->
<style>
  /* label */
  label {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 17px;
    font-weight: 400;
    color: var(--primary-color);
  }
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 1px;
  }
  span {
    font-size: 15px;
  }

  /* input */
  input {
    width: 100%;
    height: 24px;
    -webkit-appearance: none;
    appearance: none;
    outline: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: grab;
    margin-top: 3px;
  }
  input:focus-visible {
    outline: 2px var(--primary-color) dashed;
  }
  input:active {
    cursor: grabbing;
  }
  input::-moz-range-track {
    width: 100%;
    height: 6px;
    background-image: url(/images/general/bg-texture.png), linear-gradient(90deg, var(--background-color) 35%, var(--primary-color) 100%);
    border: 1px solid var(--primary-color);
  }
  input::-moz-range-thumb {
    height: 22px;
    width: 10px;
    border-radius: 0px;
    border: 1px solid var(--primary-color);
    border-bottom-width: 3px;
    background-color: var(--background-color);
    background-image: url(/images/general/bg-texture.png);
    transition: 200ms ease-in-out;
  }
  input::-webkit-slider-runnable-track {
    width: 100%;
    height: 6px;
    background-image: url(/images/general/bg-texture.png), linear-gradient(90deg, var(--background-color) 35%, var(--primary-color) 100%);
    border: 1px solid var(--primary-color);
  }
  input::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 22px;
    width: 10px;
    border-radius: 0px;
    border: 1px solid var(--primary-color);
    border-bottom-width: 3px;
    background-color: var(--background-color);
    background-image: url(/images/general/bg-texture.png);
    transition: 200ms ease-in-out;
    margin-top: -9px;
  }
</style>