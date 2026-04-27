<!-- script -->
<script lang="ts">
  /* imports */
  import type { DummyInputProps } from '$lib/ui/components/input/input.types'
  
  /* props */
  let { label, value, height = 36 }: DummyInputProps = $props()
</script>

<!-- template -->
<div class="container">
  <p class="label">
    {label}
  </p>
  <p
    class="value"
    style:height={`${height}px`}
  >
    {value}
  </p>
</div>

<!-- styles -->
<style>
  /* containers */
  .container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
  }
  .container, .container > * {
    cursor: var(--cursor-text) 0 16, auto;
  }
  
  /* text */
  .label {
    font-size: 17px;
    font-weight: 400;
    color: var(--primary-color);
    display: flex;
    width: 30%;
    margin-top: -2px;
  }
  .value {
    padding-left: 7px;
    padding-right: 7px;
    margin-top: 4px;
    background-color: var(--background-color);
    background-image: url(/images/general/bg-texture.png);
    border: 1px solid var(--primary-color);
    border-bottom-width: 3px;
    font-size: 17px;
    padding-bottom: 1px;
    font-weight: 400;
    color: var(--text-color);
    outline-offset: 2px;
    width: 70%;
    display: flex;
    align-items: center;
  }

  /* media queries */
  @media only screen and (max-width: 683px) {
    .container {
      flex-direction: column;
    }
    .value {
      width: 100%;
      margin-top: 6px;
    }
    .label {
      width: 100%;
    }
  }
</style>