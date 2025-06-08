<!-- script -->
<script lang="ts">
  /* imports */
  import Slider from '$lib/ui/components/slider/slider.svelte'
  import { getSliderSoundVolume, setSoundVolume, VOLUMES } from '$lib/data/settings/sound.data'

  /* state */
  const value = $state(getSliderSoundVolume())

  /* callbacks */
  /**
   * map the input value to the value of the volume to set
   * @param value input value
   */
  function onInput(value: string) {
    const number = parseInt(value)
    setSoundVolume(VOLUMES.find((v) => v.step === number)?.value || 0.05)
  }
</script>

<!-- template -->
<Slider
  label="sound volume"
  min={0}
  max={100}
  step={50}
  value={value.step}
  ranges={VOLUMES.map((v) => v.id)}
  onInput={onInput}
/>