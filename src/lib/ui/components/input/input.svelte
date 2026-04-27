<!-- script -->
<script lang="ts">
  /* imports */
  import type { InputProps } from '$lib/ui/components/input/input.types'
  
  /* props */
  let { id, label, required, type, side, max, height = 36 }: InputProps = $props()
</script>

<!-- template -->
<div class="container">
  <label for={id}>
    {label}
    {#if side}
      <span>{side}</span>
    {/if}
  </label>
  <input
    id={id}
    name={id}
    type={type}
    maxlength={max}
    required={required}
    style:height={`${height}px`}
  />
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
  label {
    font-size: 17px;
    font-weight: 400;
    color: var(--primary-color);
    display: flex;
    width: 30%;
    display: flex;
    align-items: center;
  }
  span {
    font-size: 13px;
    font-weight: 400;
    color: var(--red-color);
    margin-left: 6px;
  }

  /* input */
  input {
    margin-top: 4px;
    background-color: var(--background-color);
    background-image: url(/images/general/bg-texture.png);
    padding-left: 7px;
    padding-right: 7px;
    border: 1px solid var(--primary-color);
    border-bottom-width: 3px;
    font-size: 17px;
    padding-bottom: 1px;
    font-weight: 400;
    color: var(--text-color);
    outline-offset: 2px;
    width: 70%;
  }
  input:focus {
    outline: initial;
  }

  /* media queries */
  @media only screen and (max-width: 683px) {
    .container {
      flex-direction: column;
    }
    input {
      width: 100%;
      margin-top: 6px;
    }
    label {
      width: 100%;
    }
  }
</style>