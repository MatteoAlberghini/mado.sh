<!-- script -->
<script lang="ts">
  /* imports */
  import Header from '$lib/ui/macro/headers/horizontal-header/horizontal.header.svelte'
	import Article from '$lib/ui/macro/wrappers/article/article.wrapper.svelte'
	import ContentImage from '$lib/ui/components/media/content-image/content.image.svelte'
  import LinkdingDashboard from '$lib/images/projects/linkding_dashboard.webp?enhanced'
  import LinkdingResult from '$lib/images/projects/linkding_result.webp?enhanced'
	import Code from '$lib/ui/components/code/code.svelte'
  import bookmarksScript from '$lib/content/projects/snippets/bookmarks.py?raw'
</script>

<!-- template -->
<Header
  title="LINKDING TO BOOKMARKS"
  external={{ text: 'git repository', url: 'https://codeberg.org/0x6d61646f/linkding.to.bookmarks' }}
  tags={[{ type: 'data', text: 'selfhosted bookmarking tool' }]}
  image={false}
/>

<Article>
  <p>
    The script code can be found <a href="https://codeberg.org/0x6d61646f/linkding.to.bookmarks" target="_blank" draggable="false">on codeberg</a>.
    Feel free to <a draggable="false" href="/contact">contact me</a> if you have script ideas or want to talk :)
  </p>
  <h3>GOAL</h3>
  <p>
    This is a script to collect all <a href="https://github.com/sissbruecker/linkding" target="_blank" draggable="false">linkding</a> selfhosted bookmarks
    and generate a html file that can be imported in your browser,
  </p>
    <div class="media-container">
      <ContentImage
        name="linkding_dashboard.img"
        text="linkding dashboard example"
        src={LinkdingDashboard}
        alt="linkding dashboard example"
        lazy
      />
      <ContentImage
        name="linkding_result.img"
        text="linkding result example"
        src={LinkdingResult}
        alt="linkding result example"
        lazy
      />
    </div>
  <h3>REQUIRMENTS</h3>
  <p>
    The script is written in <span>python</span> and <span>requires python3</span> to run, and
    the package requirements can be found in <span>requirements.txt</span> file.
  </p>
  <Code
    language="shellscript"
    title="requirements.txt"
    icon="config"
    code={`requests
python-dotenv`}
  />
  <p>
    Iterate over the requirments with pip to install them.
  </p>
  <Code 
    language="shellscript"
    title="console"
    icon="console"
    code="pip install -r requirements.txt"
  />
  <p>
    Copy the <span>.env.example</span> file and rename it to <span>.env</span>, change the variables based on your setup.
  </p>
  <Code
    language="shellscript"
    title=".env.example"
    icon="config"
    code={`LINKDING_KEY=your_api_key
LINKDING_URL=your_server_url_/ # remember trailing slash
GENERATION_PATH=where_your_scripts_files_go/ # remember trailing slash`}
  />
  <h3>UTILITY CLASSES</h3>
  <p>
    Two utility classes are used in the script.
  </p>
  <Code
    language="python"
    title="bookmark.py"
    icon="bash"
    code={`class Bookmark:
  def __init__(self, title, description, url):
    self.title = title
    self.description = description
    self.url = url
  
  def to_dictionary(self):
    return {
      'type': 'bookmark',
      'title': self.title,
      'description': self.description,
      'url': self.url,
    }`}
  />
  <Code
    language="python"
    title="folder.py"
    icon="bash"
    code={`class Folder:
  def __init__(self, title, bookmarks_arr):
    self.title = title
    self.items = bookmarks_arr
  
  def to_dictionary(self):
    return {
      'type': 'folder',
      'title': self.title,
      'items': self.items,
    }`}
  />
  <h3>LINKDING API CALL</h3>
  <p>
    The api calls <span>api/bookmarks</span> to collect all bookmarks.
  </p>
  <Code
    language="python"
    title="get_bookmarks.py"
    icon="bash"
    code={`import os,requests
from dotenv import dotenv_values 

# get all bookmarks from linkding server
def get_bookmarks():
  url = os.getenv('LINKDING_URL') + 'api/bookmarks/'
  headers = { 'Authorization': 'Bearer ' + os.getenv('LINKDING_KEY') }

  try:
    response = requests.get(url, headers = headers)
    if response.status_code == 200:
      bookmarks = response.json()
      return bookmarks
    else:
      print('error:', response.status_code)
      return None
  
  except requests.exceptions.RequestException as e:
    print('error:', e)
    return None`}
  />
  <h3>PARSING API RESULTS</h3>
  <p>
    Using the previous API call, generate a html page following the standard <a href="https://pinefore.com/docs/filetypes/netscape-html" target="_blank" draggable="false">Netscape Bookmark File Format</a>.
  </p>
  <Code
    language="python"
    title="bookmarks.py"
    icon="bash"
    code={bookmarksScript}
  />
</Article>