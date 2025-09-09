<!-- script -->
<script lang="ts">
  /* imports */
	import Video from '$lib/ui/components/media/video/video.svelte'
  import Header from '$lib/ui/macro/headers/horizontal-header/horizontal.header.svelte'
  import Hero from '$lib/images/projects/o9solutions.webp?enhanced'
	import HeroImage from '$lib/ui/components/media/hero-image/hero.image.svelte'
	import Article from '$lib/ui/macro/wrappers/article/article.wrapper.svelte'
</script>

<!-- template -->
<div class="container">
  <HeroImage src={Hero} alt="o9solutions intro" />

  <Header
    title="O9SOLUTIONS"
    external={{ text: 'o9solutions website', url: 'https://o9solutions.com/' }}
    tags={[{ type: 'website', text: 'react website' }, { type: 'backend', text: 'headless wordpress as CMS'}]}
  />

  <Article>
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
  </Article>
</div>

<!-- styles -->
<style>
  /* containers */
  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
</style>