<!-- script -->
<script lang="ts">
  /* imports */
	import type { CheckboxProps } from '$lib/ui/components/checkboxes/checkbox.types'

  /* props */
  let { label, checked, onChange }: CheckboxProps = $props()

</script>

<!-- template -->
<label>
  <input
    type="checkbox"
    name="checkbox"
    checked={checked}
    onchange={onChange}
  />
  {label}
</label>

<!-- styles -->
<style>
  /* label */
  label {
    font-size: 17px;
    font-weight: 400;
    color: var(--primary-color);
    display: grid;
    grid-template-columns: 1em auto;
    gap: 10px;
    position: relative;
  }

  /* input */
  input {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
    background-color: #01010100;
    font: inherit;
    width: 20px;
    height: 20px;
    transform: translateY(-0.075em);
    margin-top: 0.075em;
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
    border-bottom-width: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input::before {
    content: "";
    width: 12px;
    height: 12px;
    transform: scale(0);
    box-shadow: inset 1em 1em var(--background-color);
  }
  input:checked::before {
    transform: scale(1);
  }
</style>