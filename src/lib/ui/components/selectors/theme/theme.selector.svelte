<!-- script -->
<script lang="ts">
	/* imports */
  import Selector from '$lib/ui/components/selectors/selector.svelte'
  import { getThemeValue, setTheme, THEMES } from '$lib/data/settings/themes.data'

  /* state */
  let theme = $state(getThemeValue())

  /* callbacks */
  /**
   * on click, handle screen value change
   * @param value current value of selector
   */
  function onClick(value: string) {
    theme = setTheme(value)
  }
</script>

<!-- template -->
<Selector
  label="color theme"
  selected={theme}
  items={THEMES}
  height={38}
  onClick={onClick}
/>