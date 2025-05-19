<!-- script -->
<script lang="ts">
  /* imports  */
	import Button from '$lib/ui/components/buttons/button.svelte'
  import ScreenIcon from '$lib/ui/icons/screen.icon.svelte'
  import { screenPlaying } from '$lib/data/settings/screen.saver.data'

  /* callbacks */
  /**
   * on click, handle toggle of screen saver to on
   */
  function onClick() {
    screenPlaying.set(true)
  }

</script>

<!-- template -->
<Button height={40} width={46} onClick={onClick}>
  <div>
    <ScreenIcon />
  </div>
</Button>

<!-- style -->
<style>
  div {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
  }
</style>