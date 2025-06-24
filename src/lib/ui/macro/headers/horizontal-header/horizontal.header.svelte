<!-- script -->
<!-- finish tooltip: https://codepen.io/vincentnavetat/pen/JjPVzGL -->
<script lang="ts">
  /* imports */
	import type { HeaderProps } from '$lib/ui/macro/headers/horizontal-header/horizontal.header.types'
	import LaptopIcon from '$lib/ui/icons/laptop.icon.svelte'
	import MobileIcon from '$lib/ui/icons/mobile.icon.svelte'
	import IotIcon from '$lib/ui/icons/iot.icon.svelte'
	import EthereumIcon from '$lib/ui/icons/ethereum.icon.svelte'
  import DataIcon from '$lib/ui/icons/data.icon.svelte'
	import ServerIcon from '$lib/ui/icons/server.icon.svelte'

  /* props */
  let { title, external, tags }: HeaderProps = $props()

</script>

<!-- template -->
<header>
  <h2>{title}</h2>

  <div class="info-container">
    <div class="tag-container">
      {#each tags as t (t.text)}
        <button>
          <div class="tooltip">
            <span>{t.text}</span>
          </div>
          <div class="icon">
            {#if t.type === 'website'}
              <LaptopIcon />
            {/if}
            {#if t.type === 'mobile'}
              <MobileIcon />
            {/if}
            {#if t.type === 'iot'}
              <IotIcon />
            {/if}
            {#if t.type === 'blockchain'}
              <EthereumIcon />
            {/if}
            {#if t.type === 'data'}
              <DataIcon />
            {/if}
            {#if t.type === 'backend'}
              <ServerIcon />
            {/if}
          </div>
        </button>
      {/each}
    </div>
    <a
      draggable="false"
      href={external.url}
      target="_blank"
    >
      {external.text}
    </a>
  </div>
</header>

<!-- styles -->
<style>
  /* containers */
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    padding-top: 4px;
    padding-bottom: 6px;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 24px;
    border: 1px solid var(--background-color);
    border-bottom-width: 3px;
    user-select: text;
    column-gap: 8px;
    row-gap: 2px;
    position: relative;
  }
  .info-container {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    row-gap: 2px;
  }
  .tag-container {
    display: flex;
    flex-direction: row;
    column-gap: 2px;
  }

  /* text */
  h2 {
    font-size: 40px;
    font-weight: 400;
    color: var(--primary-color);
  }
  a {
    font-size: 17px;
    text-transform: uppercase;
    font-weight: 400;
    color: var(--primary-color);
    text-decoration: underline;
    word-break: keep-all;
  }
  a:hover, a:focus, a:focus-visible {
    color: var(--secondary-color);
  }

  /* tags */
  .icon {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 26px;
    height: 26px;
  }
  button {
    background: none;
  }
  button:hover > .tooltip, button:active > .tooltip, button:focus > .tooltip {
    visibility: visible;
  }
  button:hover :global(svg), button:active :global(svg), button:focus :global(svg) {
    stroke: var(--secondary-color);
    fill: var(--secondary-color);
  }
  .tooltip {
    position: absolute;
    visibility: hidden;
    width: max-content;
    background-color: var(--modal-background-color);
    background-image: url(/images/general/bg-texture.png);
    padding-left: 4px;
    padding-right: 4px;
    padding-bottom: 3px;
    padding-top: 1px;
    border: 1px solid var(--primary-color);
    border-bottom-width: 2px;
    top: -28px;
    right: -1px;
    z-index: 2;
  }
  span {
    font-size: 17px;
    font-weight: 400;
    color: var(--primary-color);
  }

  /* media queries */
  @media only screen and (max-width: 600px) {
    header {
      flex-direction: column;
    }
    .info-container {
      align-items: flex-start;
    }
    .tag-container {
      justify-content: flex-start;
    }
    h2 {
      font-size: 36px;
    }
    .tooltip {
      left: -1px;
      right: unset;
    }
  }
</style>