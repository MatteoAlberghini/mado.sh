<!-- script -->
<script lang="ts">
  /* imports */
	import { ARTICLE_DETAILS } from '$lib/data/articles/articles.data'
  import Code from '$lib/ui/components/code/code.svelte'
	import HeroImage from '$lib/ui/components/media/hero-image/hero.image.svelte'
  import Header from '$lib/ui/macro/headers/horizontal-header/horizontal.header.svelte'
	import Article from '$lib/ui/macro/wrappers/article/article.wrapper.svelte'
  import PipedProxyConfig from '$lib/images/articles/piped_config.webp?enhanced'
	import ContentImage from '$lib/ui/components/media/content-image/content.image.svelte'

  /* constants */
  let data = ARTICLE_DETAILS['piped']
</script>

<!-- template -->
<HeroImage src={data.image} alt="selfhosted piped screenshot" position="0% 0%" />

<Header
  title={data.title}
  tags={[{ type: 'backend', text: 'selfhost' }]}
/>

<Article>
  <p class="date">{data.date}</p>
  <h3>OPENING THOUGHTS</h3>
  <p>
    <span>old youtube was cool</span> // it was an online space dedicated to weird, funny and unique videos that generated a forum-like community. 
    <br/>
    <span>new youtube is a data farm</span> // <a href="https://docs.piped.video/" target="_blank" draggable="false">Piped</a> is the solution until something like <a href="https://joinpeertube.org/" draggable="false" target="_blank">Peertube</a> becomes standard.
  </p>
  <h3>WHY PIPED?</h3>
  <p>
    on my quest to remove big tech from my life, I run across the youtube problem:
    I consume youtube video as much as my grandma consumes facebook memes.
    <br/>
    so I asked myself, how can I remove google from my life but still keep my addiction?
  </p>
  <p>
    this is where <a href="https://docs.piped.video/" target="_blank" draggable="false">Piped</a> comes in: no data collection, no tracking, no ads, no sponsors and all in a package I can selfhost on my own server.
  </p>
  <h3>MY SETUP</h3>
  <p>
    it's possible to selfhost <a href="https://docs.piped.video/" target="_blank" draggable="false">Piped</a> in a bunch of different ways, I'll be using:
  </p>
  <ul>
    <li><a href="https://www.proxmox.com/en/" target="_blank" draggable="false">Proxmox</a> as my <a href="https://en.wikipedia.org/wiki/Hypervisor" target="_blank" draggable="false">hypervisor</a> // you do not need Proxmox for this, any Linux OS will do</li>
    <li><a href="https://releases.ubuntu.com/jammy/" draggable="false" target="_blank">Ubuntu 22</a> as my container OS // <a href="https://www.debian.org/download" target="_blank" draggable="false">Debian 12</a> should also work </li>
    <li><a href="https://www.docker.com/" target="_blank" draggable="false">Docker</a></li>
    <li>a <a href="https://en.wikipedia.org/wiki/Reverse_proxy" target="_blank" draggable="false">reverse proxy</a> // will write about this soon, I use <a href="https://nginxproxymanager.com/" target="_blank" draggable="false">Nginx Proxy Manager</a></li>
  </ul>
  <h3>MACHINE OR CONTAINER SPECS</h3>
  <p>my container on proxmox uses this specs:</p>
  <Code
    language="typescript"
    icon="json"
    title="piped_specs.json"
    code={`{
  disk: "32Gib",
  cpu: "2 cores",
  ram: "3GiB allocated + 512MiB swap",
}`}
  />
  <p>
    an ideal machine has at least 2GiB of memory, especially if you plan on subscribing to a lot of channels // a lot being around 250 channels.
    <br/>
    the disk usage comes from caches and databases for users data, you can always add more later.
  </p>
  <h3>SETTING UP THE PROXMOX CONTAINER</h3>
  <p>
    if you're using Proxmox, you might have to pass some additional configuration to get docker to work in an unprivileged container.
    <br/>
    in particular, we want for docker to be able to have access to our network tunnel device.
  </p>
  <p>in the console of the server, navigate to the folder containing all the configs for your containers:</p>
  <Code
    language="shellscript"
    title="console"
    icon="console"
    code="cd /etc/pve/lxc"
  />
  <p>if you list all files here, you'll find the newly created config file named xxx.conf where xxx is the id of the container.</p>
  <p>open the config file for the container:</p>
  <Code
    language="shellscript"
    title="console"
    icon="console"
    code="nano xxx.conf"
  />
  <p>and paste this at the end of the file:</p>
  <Code
    language="shellscript"
    title="xxx.conf"
    icon="config"
    code={`lxc.cgroup2.devices.allow: c 10:200 rwm
lxc.mount.entry: /dev/net dev/net none bind,create=dir
lxc.mount.entry: /dev/net/tun dev/net/tun none bind,create=file`}
  />
  <h3>INSTALLING DOCKER AND PIPED</h3>
  <p>
    now we move back to the console of our container.
    <br/>
    <span>before anything else</span>, remember to update all packages:
  </p>
  <Code
    language="shellscript"
    icon="console"
    title="console"
    code="apt-get update && apt-get upgrade"
  />
  <p>install docker and docker compose:</p>
  <Code
    language="shellscript"
    title="console"
    icon="console"
    code="apt install docker docker-compose -y"
  />
  <p>clone the piped-docker git repository and cd into it:</p>
  <Code
    language="shellscript"
    icon="console"
    title="console"
    code="git clone https://github.com/TeamPiped/Piped-Docker && cd Piped-Docker"
  />
  <p>execute the piped installation script:</p>
  <Code
    language="shellscript"
    icon="console"
    title="console"
    code="./configure-instance.sh"
  />
  <p>answer the questions from the installation script, remember to change "yourdomain.com" with the domain name you want to use:</p>
  <Code
    language="apache"
    title="console"
    icon="console"
    code={`Enter a hostname for the Frontend (eg: piped.kavin.rocks):
piped.yourdomain.com

Enter a hostname for the Backend (eg: pipedapi.kavin.rocks):
pipedapi.yourdomain.com

Enter a hostname for the Proxy (eg: pipedproxy.kavin.rocks):
pipedproxy.yourdomain.com

Enter the reverse proxy you would like to use (either caddy or nginx):
nginx`}
  />
  <h3>REVERSE PROXY SETUP</h3>
  <p>
    I personally use <a href="https://nginxproxymanager.com/" target="_blank" draggable="false">Nginx Proxy Manager</a> but any reverse proxy will do.
    <br/>
    add a new proxy host, remember to substitute "yourdomain.com" and the IP:
  </p>
  <div class="media-container">
    <ContentImage
      name="nginx_config.img"
      text="piped confing on nginx proxy manager"
      src={PipedProxyConfig}
      alt="piped proxy config on nginx proxy manager"
      lazy
    />
  </div>
  <p>on a sidenote, you can find the ip of your container using:</p>
  <Code
    language="shellscript"
    title="console"
    icon="console"
    code="ip a"
  />
  <p>remember to activate your SSL certificate if you have one.</p>
  <p>in the advanced tab, add this line in the custom configuration:</p>
  <Code
    language="apache"
    icon="config"
    title="nginx_config.conf"
    code="proxy_set_header Host $host;"
  />
  <h3>RUN PIPED</h3>
  <p>we are now able to go back to the container and run:</p>
  <Code
    language="shellscript"
    title="console"
    icon="console"
    code="docker-compose up -d"
  />
  <p>and finally be able to access piped at <span>piped.yourdomain.com</span>!</p>
  <p>
    you can now start subscribing to channels, create playlists and make channel groups.
    <br/>
    I recommend to check out the preferences page and change the default homepage to feed.
  </p>
  <h3>FIXING FEED NOT UPDATING PROBLEM</h3>
  <p>
    there is a <a href="https://github.com/TeamPiped/Piped/issues/707" target="_blank" draggable="false">notorious bug</a> where your feed will not auto-update unless you visit a channel manually.
    <br/>
    but with a small fix that won't be a problem for long // <a href="https://github.com/TeamPiped/Piped/issues/707#issuecomment-2958774241" target="_blank" draggable="false">thanks to 0xF4CED on github</a>.
  </p>
  <p>create a bash script, I created mine under the Piped-Docker folder:</p>
  <Code
    language="shellscript"
    title="console"
    icon="console"
    code="nano ~/Piped-Docker/refresh_subs.sh"
  />
  <p>paste this bash script, <span>remember</span> to change the values of the 4 constants at the start:</p>
  <Code
    language="shellscript"
    icon="bash"
    title="refresh_subs.sh"
    code={`#!/bin/bash
PIPEDAPI="https://pipedapi.yourdomain.com"
POSTGRES_PASSWORD=your_postgres_psw
POSTGRES_USER=your_postgres_user
POSTGRES_DB=your_postgres_user

curl -LIsfZkw '%{stderr}%{onerror}%{urlnum}: %{url}: %{errormsg}\n' --retry 1 --config \
<(docker exec -i postgres \
  bash -c "PGPASSWORD=\\$POSTGRES_PASSWORD psql -U \\$POSTGRES_USER -d \\$POSTGRES_DB -qtAXc \
  \\"SELECT DISTINCT 'url=\\"$PIPEDAPI\\"/channel/' || channel FROM users_subscribed;\\"") \
>/dev/null`}
  />
  <p>if you did not change the values of the docker config, the basic values for the posgres database are:</p>
  <Code
    language="shellscript"
    icon="bash"
    title="refresh_subs.sh"
    code={`POSTGRES_PASSWORD=changeme
POSTGRES_USER=piped
POSTGRES_DB=piped`}
  />
  <p>lastly, we add this script to a cronjob to auto-update our feed every X amount of time. I set it to 3 hours:</p>
  <Code
    language="shellscript"
    title="console"
    icon="console"
    code="crontab -e"
  />
  <p>edit the open file adding this line at the end, <span>remember</span> to change your_user to the user that set up piped:</p>
  <Code
    language="shellscript"
    icon="bash"
    title="crontab.sh"
    code="0 */3 * * * /home/your_user/Piped-Docker/refresh_subs.sh >/dev/null 2>&1"
  />
  <p>you can test that your script is working by running it manually and see if the feed updates.</p>
  <h3>HOW TO UPDATE PIPED</h3>
  <p>from the <a href="https://docs.piped.video/docs/self-hosting/" target="_blank" draggable="false">Piped Docs</a>, you can update Piped by running:</p>
  <Code
    language="shellscript"
    title="console"
    icon="console"
    code="docker run --rm -v /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower --run-once piped-frontend piped-backend piped-proxy varnish nginx caddy postgres watchtower"
  />
  <h3>A SUPER POWERFUL EXTENSION</h3>
  <p>
    I recommend to redirect all the traffic to youtube to your selfhosted Piped instead.
    <br/>
    you can do so with <a href="https://github.com/libredirect/browser_extension" target="_blank" draggable="false">Libredirect</a> a fenomenal extension to redirect traffic from data farm websites to safe versions, such as google maps to <a href="http://openstreetmap.org/" target="_blank" draggable="false">openstreetmap</a> and reddit to <a href="https://eddrit.com/" target="_blank" draggable="false">eddrit</a>.
  </p>
  <h3>WHAT ABOUT MY PHONE?</h3>
  <p>
    if you want to watch youtube on your phone or tablet there are different ways you can approach it.
    <br/>
    you can simply navigate to your selfhosted Piped instance with any browser and watch there, ad free and tracking free.
  </p>
  <p>if you're on android you can use <a href="https://libretube.dev/" target="_blank" draggable="false">LibreTube</a>, it connects to your own Piped and can sync your subscriptions on all your devices.</p>
</Article>

<!-- styles -->
<style>
  /* containers */
  .date {
    font-size: 17px;
    text-transform: uppercase;
    font-weight: 400;
    text-align: left;
    color: var(--primary-color);
  }
</style>