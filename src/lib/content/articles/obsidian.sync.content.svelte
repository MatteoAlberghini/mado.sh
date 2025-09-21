<!-- script -->
<script lang="ts">
  /* imports */
	import { ARTICLE_DETAILS } from '$lib/data/articles/articles.data'
  import HeroImage from '$lib/ui/components/media/hero-image/hero.image.svelte'
  import Header from '$lib/ui/macro/headers/horizontal-header/horizontal.header.svelte'
	import Article from '$lib/ui/macro/wrappers/article/article.wrapper.svelte'

  /* constants */
  let data = ARTICLE_DETAILS['obsidian-sync']
</script>

<!-- template -->
<HeroImage src={data.image} alt="selfhosted piped screenshot" position="0% 0%" />
<Header
  title={data.title}
  tags={[{ type: 'backend', text: 'selfhost' }]}
/>
<Article date={data.date}>
  <h3>WHY OBSIDIAN</h3>
  <p>
    <a href="https://obsidian.md/" target="_blank" draggable="false">Obsidian</a> is a fenomenal tool, I use it everyday to write all my notes and prepare d&d.
    <br/>
    overtime, <a href="https://obsidian.md/" target="_blank" draggable="false">Obsidian</a> became not only my favourite note taking tool, but an <a href="https://en.wikipedia.org/wiki/Extended_mind_thesis" target="_blank" draggable="false">extension of my mind</a>
    and as such, I want to take it with me everywhere.
  </p>
  <p>
    but how do you keep all your notes synced if <span>by default Obsidian is client side</span>, and as such not stored in some google/microsoft/notion data farm?
    <br/>
    <a href="https://syncthing.net/" target="_blank" draggable="false">Syncthing</a>: a beautiful open source tool to sync any folder across devices without needing to go though some third party cloud. 
  </p>
</Article>