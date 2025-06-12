<!-- script -->
<script lang="ts">
  /* imports */
  import type { InputProps } from '$lib/ui/components/input/input.types'
  
  /* props */
  let { id, label, required, type, side, max }: InputProps = $props()
</script>

<!-- template -->
<label for={id}>
  {label}
  {#if side}
    <span>{side}</span>
  {/if}
</label>
<input id={id} name={id} type={type} maxlength={max} required={required} />

<!-- styles -->
<style>
  /* text */
  label {
    font-size: 17px;
    font-weight: 400;
    color: var(--primary-color);
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  span {
    font-size: 15px;
    font-weight: 400;
    color: var(--primary-color);
  }

  /* input */
  input {
    padding-left: 7px;
    padding-right: 7px;
    margin-top: 4px;
    height: 36px;
    background-color: var(--background-color);
    background-image: url(/images/general/bg-texture.png);
    border: 1px solid var(--primary-color);
    border-bottom-width: 3px;
    font-size: 17px;
    padding-bottom: 1px;
    font-weight: 400;
    color: var(--text-color);
  }
  input:focus-within, input:focus {
    outline: initial;
    background-color: var(--background-color);
  }
</style>