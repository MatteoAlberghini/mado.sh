<!-- template -->
<svg
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8 6V18L18 12L8 6Z"
    stroke="inherit"
    stroke-width="1.4"
    stroke-linejoin="round"
  />
</svg>
<svg
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="before"
>
  <path
    d="M8 6V18L18 12L8 6Z"
    stroke="inherit"
    stroke-width="1.4"
    stroke-linejoin="round"
  />
</svg>
<svg
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="after"
>
  <path
    d="M8 6V18L18 12L8 6Z"
    stroke="inherit"
    stroke-width="1.4"
    stroke-linejoin="round"
  />
</svg>

<!-- styles -->
<style>
  svg {
    width: 26px;
    height: 26px;
    stroke: var(--text-color);
    z-index: 3;
  }
  .before {
    position: absolute;
    margin-left: -1px;
    z-index: 2;
    stroke: var(--shadow-primary-color);
  }
  .after {
    position: absolute;
    margin-right: -1px;
    z-index: 1;
    stroke: var(--shadow-secondary-color);
  }
</style>