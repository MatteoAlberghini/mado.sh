<!-- template -->
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
  <path
    d="M12 20H16M12 20H8M12 20V16M12 16H5C4.44772 16 4 15.5523 4 15V6C4 5.44771 4.44772
    5 5 5H19C19.5523 5 20 5.44772 20 6V15C20 15.5523 19.5523
    16 19 16H12Z"
    stroke="inherit"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
<svg class="before" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
  <path
    d="M12 20H16M12 20H8M12 20V16M12 16H5C4.44772 16 4 15.5523 4 15V6C4 5.44771 4.44772
    5 5 5H19C19.5523 5 20 5.44772 20 6V15C20 15.5523 19.5523
    16 19 16H12Z"
    stroke="inherit"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
<svg class="after" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
  <path
    d="M12 20H16M12 20H8M12 20V16M12 16H5C4.44772 16 4 15.5523 4 15V6C4 5.44771 4.44772
    5 5 5H19C19.5523 5 20 5.44772 20 6V15C20 15.5523 19.5523
    16 19 16H12Z"
    stroke="inherit"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>

<!-- styles -->
<style>
  svg {
    width: 30px;
    height: auto;
    position: relative;
    z-index: 3;
    stroke: var(--text-color);
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