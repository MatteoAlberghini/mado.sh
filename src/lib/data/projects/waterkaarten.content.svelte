<!-- script -->
<script lang="ts">
  /* imports */
  import Header from '$lib/ui/macro/headers/horizontal-header/horizontal.header.svelte'
  import Hero from '$lib/images/projects/waterkaarten.webp?enhanced'
	import HeroImage from '$lib/ui/components/media/hero-image/hero.image.svelte'
	import Article from '$lib/ui/macro/wrappers/article/article.wrapper.svelte'
</script>

<!-- template -->
<div class="container">
  <HeroImage src={Hero} alt="waterkaarten intro" />

  <Header
    title="WATERKAARTEN"
    external={{ text: 'waterkaarten website', url: 'https://waterkaarten.app/' }}
    tags={[{ type: 'mobile', text: 'native ios and android apps' }, { type: 'iot', text: 'connecting to AIS transceivers' }, { type: 'data', text: 'scripts for pulling city data & more'}]}
  />

  <Article>
    <p>Feel free to <a draggable="false" href="/contact">contact me</a> if you have any questions or you want to reach out :)</p>
    <h3>COMPANY DETAILS</h3>
    <p>
      <a draggable="false" href="https://waterkaarten.app/" target="_blank">Waterkaarten</a> is a native android and ios app used for safe boating navigation.
      8 countries are currently supported, with all canals, streams, rivers and seas included. It has <a draggable="false" href="https://en.wikipedia.org/wiki/Automatic_identification_system" target="_blank">AIS</a> support and POIs descriptions.
    </p>
    <h3>TL;DR TECH STACK</h3>
    <ul>
      <li>Native ios app built using <a draggable="false" href="https://www.swift.org/" target="_blank">swift</a></li>
      <li>Native android app built with <a draggable="false" target="_blank" href="https://kotlinlang.org/">kotlin</a>, with java hooks to support older code</li>
      <li>Scripts for constant data updates for cities/POIs using <a draggable="false" href="https://www.python.org/" target="_blank">python</a></li>
    </ul>
    <h3>PROJECT OVERVIEW</h3>
    <p>
      My main task was the redesign of the app to feel more smooth and attractive to customers.
    </p>
    <p>
      After a UX/UI design and implementation in both native android and ios apps, I started working on populating a database of cities based on population number and relevancy.
      I used info from websites such as <a draggable="false" href="https://www.geonames.org/" target="_blank">Geonames</a>,
      for which you can find scripts in
      <a draggable="false" href="https://github.com/MatteoAlberghini/geonames.scripts" target="_blank">this git repository</a>.
    </p>
    <p>
      Another simple but significant improvement was the handling of different zoom levels, giving priority to the most important POIs
      and the biggest cities first.
    </p>
    <p>
      The project was delivered 2 month prior to deadline (already beta tested), making it my personal best project in terms of turnover time.
    </p>
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