<!-- script -->
<script lang="ts">
  /* imports */
  import Slider from '$lib/ui/components/slider/slider.svelte'
	import { getSliderIconSize, ICON_SIZES, setIconSize } from '$lib/data/settings/icon.data'

  /* state */
  const value = $state(getSliderIconSize())

  /* callbacks */
  /**
   * map the input value to the value of the volume to set
   * @param value input value
   */
  function onInput(value: string) {
    const number = parseInt(value)
    setIconSize(ICON_SIZES.find((v) => v.step === number)?.value || 1)
  }
</script>

<!-- template -->
<Slider
  label="icon size"
  min={0}
  max={100}
  step={50}
  value={value.step}
  ranges={ICON_SIZES.map((v) => v.id)}
  onInput={onInput}
/>