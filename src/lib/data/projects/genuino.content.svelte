<!-- script -->
<script lang="ts">
  /* imports */
	import Image from '$lib/ui/components/media/image/image.svelte'
	import Video from '$lib/ui/components/media/video/video.svelte'
  import Header from '$lib/ui/macro/headers/horizontal-header/horizontal.header.svelte'
  import Hero from '$lib/images/projects/genuino.webp?enhanced'
</script>

<!-- template -->
<div class="container">
  <div class="image-container">
    <Image src={Hero} alt="genuino.world intro" />
  </div>

  <Header
    title="GENUINO.WORLD"
    external={{ text: 'genuino website', url: 'https://genuino.world/' }}
    tags={[{ type: 'website', text: 'react website' }, { type: 'mobile', text: 'react native mobile app' }, { type: 'iot', text: 'connecting to nfc tags' }, { type: 'blockchain', text: 'ethereum smart contracts'}]}
  />

  <article>
    <p>Feel free to <a draggable="false" href="/contact">contact me</a> if you have any questions or you want to reach out :)</p>
    <h3>COMPANY DETAILS</h3>
    <p>
      <a draggable="false" href="https://genuino.world/" target="_blank">Genuino</a> is a company dedicated to connect digital collectibles with real world objects,
      from match-worn football t-shirts to paintings and songs.
    </p>
    <div class="media-container">
      <Video text="css-only glitch animation" src="/videos/glitch_genuino.mp4" />
      <Video text="play video on cursor hover" src="/videos/hover_card_genuino.mp4" />
    </div>
    <h3>TL;DR TECH STACK</h3>
    <ul>
      <li><a draggable="false" href="https://nextjs.org/" target="_blank">Next.js</a> for the website frontend</li>
      <li><a draggable="false" href="https://reactnative.dev/" target="_blank">React Native</a> (with custom native hooks) for mobile app, interfacing with NFC tags</li>
      <li>Custom made <a draggable="false" href="https://en.wikipedia.org/wiki/Near-field_communication" target="_blank">NFC</a> tags that interface with in-house low-level auth system via app</li>
    </ul>
    <h3>PROJECT OVERVIEW</h3>
    <p>
      I was involved in the total creation of the product: from the design to the building of the
      client-facing website to the creation of the collaborator-facing app.
    </p>
    <p>
      The website is built with <a draggable="false" href="https://nextjs.org/" target="_blank">Next.js</a>,
      with a backend built in Node, which interfaces with custom-made ethereum smart contracts.
    </p>
    <p>
      The app (in <a draggable="false" href="https://reactnative.dev/" target="_blank">React Native</a>) is used by Genuino collaborators
      to connect NFC tags (specifically, custom produced <a draggable="false" href="https://en.wikipedia.org/wiki/Radio-frequency_identification" target="_blank">RFID</a> tags, with authentication) with the original real world object.
    </p>
    <p>
      In the backend, the tag is then connected and saved in the database, and at the same time a Token is minted on the ethereum blockchain.
    </p>
    <p>
      The user can then purchase the token, connected to the real world product, and <a draggable="false" href="https://genuino.world/" target="_blank">Genuino</a> will ensure both a marketplace
      for it, and that the product is delivered and always connected with the digital token.
    </p>
    <p>
      The <a draggable="false" href="https://www.genuino.world/">website</a> is the marketplace and the way to obtain
      different tokens, both via purchasing the token itself and by purchasing "gamify" version of card packs.
    </p>
    <h3>MORE COOL THINGS</h3>
    <div class="media-container">
      <Video text="custom carousel in javascript" src="/videos/carousel_genuino.mp4" />
    </div>
  </article>
</div>

<!-- styles -->
<style>
  /* containers */
  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  article {
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid var(--background-color);
    border-bottom-width: 3px;
    border-top-width: 0px;
    font-size: 19px;
    font-weight: 400;
    line-height: 125%;
    color: var(--white-color);
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 8px;
    padding-bottom: 8px;
    row-gap: 7px;
  }
  .media-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 12px;
    column-gap: 12px;
    margin-top: 24px;
  }

  /* text */
  a {
    font-size: inherit;
    font-weight: 400;
    color: var(--primary-color);
    text-decoration: underline;
    word-break: keep-all;
  }
  a:hover, a:focus, a:focus-visible {
    color: var(--secondary-color);
  }
  h3 {
    font-size: 25px;
    font-weight: 400;
    color: var(--primary-color);
    margin-top: 16px;
  }
  ul {
    list-style-position: inside;
  }

  /* images */
  .image-container > :global(figure) {
    width: 100%;
    height: 450px;
    object-fit: cover;
    justify-self: flex-start;
    border: 1px solid var(--background-color);
    border-bottom-width: 3px;
  }
  @media only screen and (max-width: 600px) {
    .image-container > :global(figure) {
      height: 300px;
    }
  }
</style>