<!-- script -->
<script lang="ts">
  /* imports  */
	import Button from '$lib/ui/components/buttons/button.svelte'
  import QuitIcon from '$lib/ui/icons/quit.icon.svelte'

  /* callbacks */
  /**
   * on click, toggle quit function on
   */
  function onClick() {
    // TODO: quit function
      
  }

</script>

<!-- template -->
<Button height={40} width={46} onClick={onClick}>
  <QuitIcon />
</Button>