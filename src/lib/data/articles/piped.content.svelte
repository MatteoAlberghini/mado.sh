<!-- script -->
<script lang="ts">
  /* imports */
  import PipedImage from '$lib/images/articles/piped.png?enhanced'
	import Code from '$lib/ui/components/code/code.svelte'
	import HeroImage from '$lib/ui/components/media/hero-image/hero-image.svelte'
  import Header from '$lib/ui/macro/headers/horizontal-header/horizontal.header.svelte'
	import Article from '$lib/ui/macro/wrappers/article/article.wrapper.svelte'
</script>

<!-- template -->
<div class="container">
  <HeroImage src={PipedImage} alt="selfhosted piped screenshot" position="0% 0%" />

  <Header
    title="setting up your own <span>youtube proxy</span> with selfhosted <span>piped</span>"
    tags={[{ type: 'backend', text: 'selfhost' }]}
  />

  <Article>
    <p class="date">AUG 26, 2025</p>
    <h3>OPENING THOUGHTS</h3>
    <p>
      <span>Old youtube was cool</span> // It was an online space dedicated to weird, funny and unique videos, made with a forum-like community in mind. 
    </p>
    <p>
      <span>New youtube is a data farm</span> // <a href="https://docs.piped.video/" target="_blank" draggable="false">Piped</a> is the solution until something like <a href="https://joinpeertube.org/" draggable="false" target="_blank">Peertube</a> becomes standard. 
    </p>
    <h3>MY SETUP</h3>
    <p>
      You can selfhost <a href="https://docs.piped.video/" target="_blank" draggable="false">Piped</a> in a bunch of different ways, I'll be using:
    </p>
    <ul>
      <li><a href="https://www.proxmox.com/en/" target="_blank" draggable="false">Proxmox</a> as my <a href="https://en.wikipedia.org/wiki/Hypervisor" target="_blank" draggable="false">hypervisor</a> // you do not need Proxmox for this, any Linux OS will do</li>
      <li><a href="https://releases.ubuntu.com/jammy/" draggable="false" target="_blank">Ubuntu 22</a> as my container OS // <a href="https://www.debian.org/download" target="_blank" draggable="false">Debian 12</a> should also work </li>
      <li><a href="https://www.docker.com/" target="_blank" draggable="false">Docker</a> // yeah you should have learned the basics of docker by now :p</li>
      <li>A reverse proxy // will write about this soon, I use <a href="https://nginxproxymanager.com/" target="_blank" draggable="false">Nginx Proxy Manager</a></li>
    </ul>
    <h3>PROXOMOX SPECIFIC STEPS</h3>
    <p>Create your container, I used this specs:</p>
    <Code
      language="typescript"
      title="piped_specs.json"
      code={`{
   disk: "32Gib",
   cpu: "2 cores",
   ram: "3GiB allocated + 512MiB swap",
}`}
    />
    <p>You want at least 2GiB of memory, especially if you plan on subscribing to a lot of channels // a lot being around 200 channels.</p>
    <p>The disk usage comes from caches and databases for users data.</p>
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
  .date {
    font-size: 17px;
    text-transform: uppercase;
    font-weight: 400;
    text-align: left;
    color: var(--primary-color);
  }
</style>