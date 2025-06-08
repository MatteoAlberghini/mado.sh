<!-- template -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="miter">
  <path d="M15 15l6 6m-6-6v4.8m0-4.8h4.8"/>
  <path d="M9 19.8V15m0 0H4.2M9 15l-6 6"/>
  <path d="M15 4.2V9m0 0h4.8M15 9l6-6"/>
  <path d="M9 4.2V9m0 0H4.2M9 9L3 3"/>
</svg>
<svg class="before" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="miter">
  <path d="M15 15l6 6m-6-6v4.8m0-4.8h4.8"/>
  <path d="M9 19.8V15m0 0H4.2M9 15l-6 6"/>
  <path d="M15 4.2V9m0 0h4.8M15 9l6-6"/>
  <path d="M9 4.2V9m0 0H4.2M9 9L3 3"/>
</svg>
<svg class="after" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="miter">
  <path d="M15 15l6 6m-6-6v4.8m0-4.8h4.8"/>
  <path d="M9 19.8V15m0 0H4.2M9 15l-6 6"/>
  <path d="M15 4.2V9m0 0h4.8M15 9l6-6"/>
  <path d="M9 4.2V9m0 0H4.2M9 9L3 3"/>
</svg>

<!-- style -->
<style>
  svg {
    width: 22px;
    height: auto;
    position: relative;
    z-index: 3;
    stroke: var(--text-color);
  }
  .before {
    position: absolute;
    margin-left: -1px;
    z-index: 2;
    stroke: var(--shadow-secondary-color);
  }
  .after {
    position: absolute;
    margin-right: -1px;
    z-index: 1;
    stroke: var(--shadow-primary-color);
  }
</style>