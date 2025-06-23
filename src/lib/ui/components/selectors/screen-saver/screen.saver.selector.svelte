<!-- script -->
<script lang="ts">
	/* imports */
  import Selector from '$lib/ui/components/selectors/selector.svelte'
	import { currentScreen, getScreenSaverValue, SCREEN_SAVERS, screenPlaying, setScreenSaver } from '$lib/data/settings/screen.saver.data'
	import PlayIcon from '$lib/ui/icons/play.icon.svelte'

  /* derived */
  let saver = $derived(getScreenSaverValue())

  /* callbacks */
  /**
   * on click, handle screen value change
   * @param value current value of selector
   */
  function onClick(value: string) {
    setScreenSaver(value)
  }
  /**
   * play screen saver
   */
  function play() {
    screenPlaying.set(true)
  }
  
  /* effects */
  /**
   * change saver based on screen change from anywhere, so it updates when the page load
  */
  $effect(() => {
    saver = SCREEN_SAVERS.get($currentScreen) || 'roaming fishes'
  })
</script>

<!-- template -->
<div>
  <Selector
    label="screen saver"
    selected={saver}
    items={SCREEN_SAVERS}
    height={40}
    onClick={onClick}
  />
  <button
    onclick={play}
    aria-label="play screensaver"
  >
    <PlayIcon />
  </button>
</div>

<!-- style -->
<style>
  /* containers */
  div {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
  }

  /* buttons */
  button {
    height: 40px;
    width: 44px;
    border: 1px solid var(--primary-color);
    border-bottom-width: 3px;
    background-color: var(--background-color);
    background-image: url(/images/general/bg-texture.png);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
</style>