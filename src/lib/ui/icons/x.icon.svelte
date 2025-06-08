<!-- template -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
  <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
</svg>
<svg class="before" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
  <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
</svg>
<svg class="after" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
  <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
</svg>

<!-- styles -->
<style>
  svg {
    width: 21px;
    height: auto;
    position: relative;
    z-index: 3;
    fill: var(--text-color);
  }
  .before {
    position: absolute;
    margin-left: -1px;
    z-index: 2;
    fill: var(--shadow-primary-color);
  }
  .after {
    position: absolute;
    margin-right: -1px;
    z-index: 1;
    fill: var(--shadow-secondary-color);
  }
</style>