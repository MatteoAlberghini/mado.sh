<!-- script -->
<script lang="ts">
  /* imports */
  import type { TextAreaProps } from '$lib/ui/components/interactive/text-area/text.area.types'
  
  /* props */
  let { id, label, required, side, max }: TextAreaProps = $props()
</script>

<!-- template -->
<label for={id}>
  {label}
  {#if side}
    <span>{side}</span>
  {/if}
</label>
<textarea id={id} name={id} maxlength={max} required={required}></textarea>

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
  textarea {
    padding-left: 7px;
    padding-right: 7px;
    padding-top: 6px;
    margin-top: 4px;
    height: 176px;
    resize: vertical;
    background-color: var(--background-color);
    background-image: url(/images/general/bg-texture.png);
    border: 1px solid var(--primary-color);
    border-bottom-width: 3px;
    font-size: 17px;
    font-weight: 400;
    color: var(--text-color);
  }
  textarea:focus-within, textarea:focus {
    box-shadow: initial;
    background-color: var(--background-color);
  }
</style>