<!-- script -->
<script lang="ts">
  /* imports  */
	import { goto } from '$app/navigation'
  import Button from '$lib/ui/components/buttons/button.svelte'
	import GearIcon from '$lib/ui/icons/gear.icon.svelte'

  /* callbacks */
  /**
   * on click, go to settings
   */
  function onClick() {
    goto('/settings')
  }

</script>

<!-- template -->
<Button height={40} width={46} onClick={onClick}>
  <GearIcon />
</Button>