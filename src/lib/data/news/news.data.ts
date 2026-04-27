import type { News, NewsInfo } from '$lib/data/news/news.types'

/**
 * list of all articles to show
 */
export const NEWS: News[] = [
  {
    title: 'Sam Altman’s <span>Dirty DRAM</span> Deal',
    href: 'https://www.mooreslawisdead.com/post/sam-altman-s-dirty-dram-deal',
    path: 'mooreslawisdead.com',
    image: 'https://static.wixstatic.com/media/cd85b6_f91e58b7b125467bb253041e09ed5d20~mv2.png/v1/fill/w_740,h_417,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cd85b6_f91e58b7b125467bb253041e09ed5d20~mv2.png',
    category: ['programming'],
  },
  {
    title: 'Ah, Peptides. <span>Where to Begin?</span>',
    href: 'https://www.science.org/content/blog-post/ah-peptides-where-begin',
    path: 'science.org',
    image: 'https://www.rapidnovor.com/wp-content/uploads/2021/09/Amino-acid-1200x759.png',
    category: ['science'],
  },
  {
    title: 'Cavendish Blueprints',
    href: 'https://cavendishlabs.org/blog/',
    path: 'cavendishlabs.org',
    image: 'https://cavendishlabs.org/blog/assets/feature12.jpg',
    category: ['science'],
  },
  {
    title: 'read <span>something</span> wonderful',
    href: 'https://readsomethingwonderful.com',
    path: 'readsomethingwonderful.com',
    image: 'https://media.getmatter.app/media/read_something_wonderful_screenshot/2023/06/06/SHMWOnJQZv4',
    category: ['reading', 'philosphy'],
  },
  {
    title: 'how to make <span>programming terrible</span> for everyone',
    href: 'https://jneen.ca/posts/2026-03-27-how-to-make-programming-terrible-for-everyone/',
    path: 'jneen.ca',
    image: 'https://jneen.ca/images/last-one-small.png',
    category: ['programming'],
  },
  {
    title: 'How We Broke <span>Top AI Agent Benchmarks</span>: And What Comes Next',
    href: 'https://rdi.berkeley.edu/blog/trustworthy-benchmarks-cont/',
    path: 'rdi.berkeley.edu',
    image: 'https://rdi.berkeley.edu/blog/trustworthy-benchmarks-cont/figures/benchmark-scorecard.svg',
    category: ['programming'],
  }
]

/**
 * info used when rendering rss feed
 */
export const NEWS_INFO: NewsInfo = {
  date: 'APR 22, 2026',
}