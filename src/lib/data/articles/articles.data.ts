import type { Article } from '$lib/data/articles/articles.types'
import Piped from '$lib/data/articles/piped.content.svelte'
import PipedImage from '$lib/images/articles/piped.png?enhanced'

/**
 * base text/url of articles page
 */
export const BASE_ARTICLES: { text: string, path: string } = {
 text: 'articles.dir',
 path: '/articles',
}
/**
 * list of all articles
 */
export const ARTICLES: Article[] = [
  {
    text: 'piped.txt',
    title: 'setting up your own <span>youtube proxy</span> with selfhosted <span>piped</span>',
    excerpt: 'i\'v been spending the past months degoogling and generally removing big american tech companies from my life. the hardest of this companies was google, and youtube was the worst service to deal with. let me explain to you how you can keep watching youtube and not getting tracked while doing so.',
    path: '/articles/piped-on-proxmox',
    category: ['selfhost'],
    image: PipedImage,
    date: 'AUG 18, 2025',
    // @ts-expect-error svelte cannot figure out that the two types are the same 
    element: Piped,
  },
]