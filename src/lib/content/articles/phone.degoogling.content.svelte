<!-- script -->
<script lang="ts">
  /* imports */
	import { ARTICLE_DETAILS } from '$lib/data/articles/articles.data'
  import HeroImage from '$lib/ui/components/media/hero-image/hero.image.svelte'
  import Header from '$lib/ui/macro/headers/horizontal-header/horizontal.header.svelte'
	import Article from '$lib/ui/macro/wrappers/article/article.wrapper.svelte'

  /* constants */
  let data = ARTICLE_DETAILS['phone-degoogling']
</script>

<!-- template -->
<HeroImage src={data.image} alt="phone degoogling screenshot" position="0% 0%" />
<Header
  title={data.title}
  tags={[{ type: 'backend', text: 'selfhost' }, { type: 'mobile', text: 'mobile' }]}
/>
<Article date={data.date}>
  <h3>THE GOAL</h3>
  <p>
    Last year, I spent a lot of time removing big tech from my life.
    <br/>
    I started with my own homeserver, then moving to fedora linux from the <a href="https://youtu.be/d8WEzjDx4-E" target="_blank" draggable="false">garbage pile windows became</a>
    (thank you <a href="https://github.com/ValveSoftware/Proton" target="_blank" draggable="false">proton team</a>), and finally moving to <a href="https://e.foundation/e-os/" target="_blank" draggable="false">e/OS</a> from googled-android.
  </p>
  <p>
    <span>This article is about the last step</span> // what I did to ditch all big tech apps and services on my phone.
    <br/>
    Consider this a list of alternatives and a report on how my philosophy changed around some services that I used daily.
  </p>
  <h3>/e/OS AND Fairphone</h3>
  <p>
    I used to buy shitty phones for 100 euroes. I also had really high end phones, which I mostly used for app testing.
    <br/>
    I never cared for having a nice phone to use daily, my phone was used to browse social media, read articles and watch youtube in bed. Nothing more.
  </p>
  <p>
    <span>Everything changed when I learned about <a href="https://www.fairphone.com/" target="_blank" draggable="false">Fairphone</a></span>, a fantastic phone that aims to be repairable, upgradable and sustainable.
    <br/>
    The cherry on top is that you can choose to have <a href="https://e.foundation/e-os/" target="_blank" draggable="false">e/OS</a> preinstalled on it.
  </p>
  <p>
    This was my first step into degoogled android, and a changed that after a year turned out to be one of the best changes I have ever done, next to switching to linux as my full daily OS.
  </p>

  <h3>BROWSER</h3>
  <p>
    After a brief switch to brave browser (mostly for the built in adblock and anti-fingerprinting), I swapped back to firefox (to keep my desktop pc and phone syncronized with custom scripts).
  </p>
  <p>
    The best part about the firefox app is extensions support, my personal list of must have extension is as follows:
  </p>
  <ul>
    <li>
      <span><a href="https://github.com/gorhill/uBlock" target="_blank" draggable="false">uBlockOrigin</a> + <a href="https://www.tampermonkey.net/" target="_blank" draggable="false">Tempermonkey</a></span> to block ads, annoyances and cookie banners. check out <a href="https://github.com/StellarSand/privacy-settings/blob/main/Extensions%20Settings/uBlock-Origin.md" target="_blank" draggable="false">this github repo</a> for uBlockOrigin best privacy settings,
      and <a href="https://raw.githubusercontent.com/pixeltris/TwitchAdSolutions/master/vaft/vaft.user.js" target="_blank" draggable="false">this userscript</a> for removing ads on Twitch.
    </li>
    <li>
      <a href="https://libredirect.github.io/" target="_blank" draggable="false">LibRedirect</a> to redirect all the garbage tracking websites to sane ones, I use it mostly for google maps
      (redirecting to <a href="https://www.openstreetmap.org" target="_blank" draggable="false">openstreetmap</a>), youtube (redirecting to <a href="/articles/selfhosted-piped" draggable="false">my selfhosted Piped instance</a>) and reddit (redirecting to <a href="https://redlib.catsarch.com/" target="_blank" draggable="false">redlib</a>)
    </li>
  </ul>

  <h3>NEWS</h3>
  <p>
    I used to follow news outlet on twitter (the decent version from years ago, not the right wing car man one). As alternative, I recommend an RSS feed viewer.
  </p>
  <p>
    Currently I'm using an integrated one to my android launcher, but I plan on building an open source app myself similar to Google news but without the tracking and data collection.
  </p>
  

  <h3>SOCIAL MEDIA</h3>
  <p>
    I removed all social media but Linkedin. Sadly the cringworthy workaholic website is still needed to find jobs in tech in Europe.
  </p>
  <p>
    I recommend removing all social media, no exceptions. The unknowing toll it takes on your mind and the amount of daily wasted time is baffling.
  </p>
  <p>
    Don't wait, just go. <span>Don't delete the app, delete the accounts</span>.
  </p>
  <p>
    If you have a very hard time, get a phone OS with support for different profiles (such as <a href="https://grapheneos.org/" draggable="false" target="_blank">GrapheneOS</a>, as <a href="https://youtu.be/5nL-Eq1lpDU" draggable="false" target="_blank">pewdiwpie pointed out</a>) and put all the social media app in a profile different then the one you use for chatting/emails/alarm/etc.
  </p>
  <p>
    The small delay of accessing this apps will make you want to use them less and less.
  </p>
</Article>