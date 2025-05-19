<!-- script -->
<script lang="ts">
  /* imports */
	import { soundActive, setSoundActive } from '$lib/data/settings/sound.data'
  import Checkbox from '$lib/ui/components/checkboxes/checkbox.svelte'

  /* stores */
  let checked = $derived($soundActive)

  /* callbacks */
  function onChange() {
    setSoundActive(!checked)
  }
</script>

<!-- template -->
<Checkbox
  label="enable sounds"
  checked={checked}
  onChange={onChange}
/>