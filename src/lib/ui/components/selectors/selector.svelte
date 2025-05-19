<!--
TODO: 
  - handle arrow navigation
  - handle numpad navigation
  - add better focus highlight
-->
<!-- script -->
<script lang="ts">
	/* imports */
  import type { SelectorProps } from '$lib/ui/components/selectors/selector.types'
	import DropdownIcon from '$lib/ui/icons/dropdown.icon.svelte'
	import { expoOut } from 'svelte/easing'
	import { slide } from 'svelte/transition'

  /* props */
  let { label, selected, items, height, onClick }: SelectorProps = $props()

  /* state */
  let open: boolean = $state(false)

  /* refs */
  let container: HTMLDivElement
  let button: HTMLButtonElement

  /* support */
  /**
   * toggle selector open / closed
   */
  function toggleSelector() {
    open = !open
    button.focus()
  }

  /* callbacks */
  /**
   * handle click on window, to close on click outside
   * @param e mouse event
   */
  function onWindowClick(e: MouseEvent) {
    if (e.target && container && container.contains(e.target as Node)) {
      return
    }
    if (open) {
      toggleSelector()
    }
  }
  /**
   * handle click on item on the list
   * @param val string value from the map
   */
  function onItemClick(val: string) {
    onClick(val)
    toggleSelector()
  }
  /**
   * on key down, handle keys when focusing button
   * @param e keyboard event
   */
  function onButtonKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      e.preventDefault()
      toggleSelector()
    }
    if (e.key === ' ') {
      e.preventDefault()
      toggleSelector()
    }
    if (e.key === 'Escape') {
      e.preventDefault()
      open = false
    }
  }
  /**
   * on key down, handle keys when focusing list item
   * @param e keyboard event
   * @param val value of the item selected
   */
  function onItemKeyDown(e: KeyboardEvent, val: string) {
    if (e.key === 'Enter') {
      e.preventDefault()
      onItemClick(val)
    }
    if (e.key === ' ') {
      e.preventDefault()
      onItemClick(val)
    }
  }

</script>

<!-- template -->
<svelte:window onclick={onWindowClick} />
<div
  class="container"
  bind:this={container}
>
  {#if label}
  <label
    for={`select-${label}`}
    class="label"
  >
    {label}
  </label>
  {/if}
  <button
    id={`select-${label}`}
    bind:this={button}
    role="combobox"
    value="select"
    aria-controls="listbox"
    aria-haspopup="listbox"
    tabindex="0"
    aria-expanded={open}
    style:height={`${height}px`}
    onclick={toggleSelector}
    onkeydown={onButtonKeyDown}
  >
    {selected}
    <div
      data-open={open}
      class="icon-container"
      style:width={`${height + 4}px`}
      style:--width={`${height + 4}px`}
    >
      <DropdownIcon />
    </div>
  </button>
  {#if open}
    <ul
      role="listbox"
      id={`listbox-${label}`}
      transition:slide={{ duration: 85, easing: expoOut }}
    >
      {#each items as item (item[0])}
      <li
        role="option"
        aria-selected={selected === item[0]}
        style:height={`${height + 4}px`}
        onclick={() => onItemClick(item[0])}
        onkeydown={(e) => onItemKeyDown(e, item[0])}
        tabindex="0"
      >
        {item[1]}
      </li>
      {/each}
    </ul>
  {/if}
</div>

<!-- styles -->
<style>
  /* containers */
  .container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    position: relative;
  }
  .icon-container {
    height: 100%;
    border-left: 1px solid var(--primary-color);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon-container > :global(svg) {
    height: 21px;
    width: 21px;
    margin-top: 3px;
    transition: all var(--transition-timing-fast) ease-out;
  }
  .icon-container[data-open=true] > :global(svg) {
    transform: rotate(-180deg);
  }

  /* text */
  label {
    font-size: 17px;
    font-weight: 400;
    margin-bottom: 4px;
    color: var(--primary-color);
  }

  /* list */
  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    background-color: var(--background-color);
    background-image: url(/images/general/bg-texture.png);
    color: var(--text-color);
    border: 1px solid var(--primary-color);
    border-bottom-width: 3px;
    padding-left: 7px;
    font-size: 17px;
    font-weight: 400;
    width: 100%;
  }
  ul {
    position: absolute;
    z-index: 51;
    top: calc(100% + 4px);
    width: 100%;
    background-color: var(--background-color);
    border-top: 1px solid var(--primary-color);
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }
  li {
    width: 100%;
    background-color: var(--background-color);
    background-image: url(/images/general/bg-texture.png);
    color: var(--text-color);
    border: 1px solid var(--primary-color);
    border-bottom-width: 3px;
    border-top-width: 0px;
    font-size: 17px;
    font-weight: 400;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    overflow: hidden;
    padding-left: 7px;
  }
</style>