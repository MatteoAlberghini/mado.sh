<!-- script -->
<script lang="ts">
  /* imports */
	import Image from '$lib/ui/components/media/image/image.svelte'
	import Video from '$lib/ui/components/media/video/video.svelte'
  import Header from '$lib/ui/macro/headers/horizontal-header/horizontal.header.svelte'
</script>

<!-- template -->
<div class="container">
  <div class="image-container">
    <Image src="/images/projects/o9solutions.webp" alt="o9solutions intro" />
  </div>

  <Header
    title="O9SOLUTIONS"
    external={{ text: 'o9solutions website', url: 'https://o9solutions.com/' }}
    tags={[{ type: 'website', text: 'react website' }, { type: 'backend', text: 'headless wordpress as CMS'}]}
  />

  <article>
    <p>Feel free to <a draggable="false" href="/contact">contact me</a> if you have any questions or you want to reach out :)</p>
    <h3>COMPANY DETAILS</h3>
    <p>
      <a draggable="false" href="https://o9solutions.com/" target="_blank">o9Solutions</a> develops a highly customizable supply chain software & integrated planning platform.
    </p>
    <div class="media-container">
      <Video text="manually animated svg" src="/videos/svg_o9.mp4" />
      <Video text="resource page redesign" src="/videos/resource_o9.mp4" />
    </div>
    <h3>TL;DR TECH STACK</h3>
    <ul>
      <li><a draggable="false" href="https://nextjs.org/" target="_blank">Next.js</a> for the website frontend</li>
      <li><a draggable="false" href="https://wordpress.com/" target="_blank">Wordpress</a> as headless CMS</li>
    </ul>
    <h3>PROJECT OVERVIEW</h3>
    <p>
      I worked on the marketing website for <a draggable="false" href="https://o9solutions.com/" target="_blank">o9Solutions</a>. The main focus of the project was moving from a wordpress
      website to a react headless website, using <a draggable="false" href="https://nextjs.org/" target="_blank">Next.js</a> as a frontend &
      <a draggable="false" href="https://wordpress.com/" target="_blank">Wordpress</a> as a backend and CMS. 
    </p>
    <p>
      The project also involved a complete re-design of the website, from modern animations to a complete overall of the design
      system. The main focus of the re-design was improved UX, neat and clean UI, and constant improvement in page
      speed and conversion rates.
    </p>
    <h3>MORE COOL THINGS</h3>
    <div class="media-container">
      <Video text="custom carousels in javascript" src="/videos/carousel_o9.mp4" />
      <Video text="blog pages redesign" src="/videos/blog_o9.mp4" />
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
    max-height: 450px;
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