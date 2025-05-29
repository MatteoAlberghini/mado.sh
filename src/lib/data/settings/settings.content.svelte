<!-- script -->
<script lang="ts">
  /* imports  */
	import ScreenSaverButton from '$lib/ui/components/buttons/screen-saver/screen.saver.button.svelte'
	import QuitButton from '$lib/ui/components/buttons/quit/quit.button.svelte'
	import ThemeSelector from '$lib/ui/components/selectors/theme/theme.selector.svelte'
	import ScreenSelector from '$lib/ui/components/selectors/screen-saver/screen.saver.selector.svelte'
	import SoundCheckbox from '$lib/ui/components/checkboxes/sound/sound.checkbox.svelte'
	import SoundSlider from '$lib/ui/components/slider/sound/sound.slider.svelte'
	import IconSlider from '$lib/ui/components/slider/icon/icon.slider.svelte'

</script>

<!-- template -->
<div
  class="header-buttons"
>
  <ScreenSaverButton />
  <QuitButton />
</div>
<div class="content">
  <div class="section">
    <span>THEME</span>
    <div class="section-content">
      <ThemeSelector />
      <ScreenSelector />
    </div>
  </div>
  <div class="section">
    <span>ICONS</span>
    <div class="section-content mt">
      <IconSlider />
    </div>
  </div>
  <div class="section">
    <span>SOUNDS</span>
    <div class="section-content mt">
      <SoundCheckbox />
      <SoundSlider />
    </div>
  </div>
</div>

<!-- styles -->
<style>
  /* containers */
  .header-buttons {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: flex-start;
    margin-left: 20px;
    margin-right: 20px;
    padding-top: 16px;
  }
  .content {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 16px;
    column-gap: 16px;
    row-gap: 16px;
  }
  .section {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border: 1px solid var(--background-color);
    border-bottom-width: 3px;
    width: 400px;
    min-height: 165px;
    margin-top: 12px;
    padding-top: 8px;
    padding-bottom: 26px;
  }
  .section-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 6px;
    row-gap: 12px;
  }
  .mt {
    margin-top: 4px;
  }

  /* text */
  span {
    font-size: 18px;
    font-weight: 400;
    position: absolute;
    top: -14px;
    color: var(--primary-color);
    background-color: var(--modal-background-color);
    background-image: url(/images/general/bg-texture.png);
    padding-left: 8px;
    padding-right: 8px;
    margin-left: 3px;
  }
</style>