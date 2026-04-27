<!-- script -->
<script lang="ts">
  /* imports */
  import type { TextAreaProps } from '$lib/ui/components/text-area/text.area.types'
  
  /* props */
  let { id, label, required, side, max }: TextAreaProps = $props()
</script>

<!-- template -->
<div class="container">
  <label for={id}>
    {label}
    {#if side}
      <span>{side}</span>
    {/if}
  </label>
  <textarea id={id} name={id} maxlength={max} required={required}></textarea>
</div>

<!-- styles -->
<style>
  /* containers */
  .container {
    display: flex;
    flex-direction: column;
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
    align-items: center;
  }
  span {
    font-size: 13px;
    font-weight: 400;
    color: var(--red-color);
    margin-left: 6px;
    margin-top: 2px;
  }

  /* input */
  textarea {
    padding-left: 7px;
    padding-right: 7px;
    padding-top: 6px;
    margin-top: 6px;
    height: 176px;
    resize: vertical;
    background-color: var(--background-color);
    background-image: url(/images/general/bg-texture.png);
    border: 1px solid var(--primary-color);
    border-bottom-width: 3px;
    font-size: 17px;
    font-weight: 400;
    color: var(--text-color);
    outline-offset: 2px;
  }
  textarea:focus {
    outline: initial;
  }
</style>