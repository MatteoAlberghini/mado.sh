<!-- script -->
<script lang="ts">
  /* imports */
  import type { ContainerWrapper } from '$lib/ui/macro/wrappers/container/container.wrapper.types'

  /* props */
  let { children }: ContainerWrapper = $props()
</script>

<!-- template -->
<div>
  {@render children?.()}
</div>

<!-- styles -->
<style>
  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 16px;
    padding-bottom: 16px;
    row-gap: 1px;
  }
  @container (width < 900px) {
    div {
      padding-right: 16px;
      padding-left: 8px;
    }
  }
  @container (width < 599px) {
    div {
      padding-right: 16px;
      padding-left: 4px;
    }
  }
</style>