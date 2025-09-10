import { writable, type Writable } from 'svelte/store'
import type { BundledLanguage, BundledTheme, HighlighterGeneric } from 'shiki'
import type { Article } from '$lib/data/articles/articles.types'
import Piped from '$lib/data/articles/piped.content.svelte'
import PipedImage from '$lib/images/articles/piped.webp?enhanced'

/**
 * store to handle sintax highliting with shiki
 */
export const highlighter: Writable<HighlighterGeneric<BundledLanguage, BundledTheme> | null> = writable(null)
/**
 * base text/url of articles page
 */
export const BASE_ARTICLES: { text: string, path: string } = {
 text: 'articles.dir',
 path: '/articles',
}
/**
 * potential ids used for articles
 */
type id = 'piped'
/**
 * list of all articles data
 */
export const ARTICLE_DETAILS: Record<id, Article> = {
  'piped': {
    text: 'piped.txt',
    title: 'setting up your own <span>youtube proxy</span> with selfhosted <span>piped</span>',
    excerpt: 'i\'v been spending the past months degoogling and generally removing big american tech companies from my life. the hardest of this companies was google, and youtube was the worst service to deal with. I will show you how to selfhost your own youtube proxy to keep watching youtube without getting tracked.',
    path: '/articles/selfhosted-piped',
    category: ['selfhost'],
    image: PipedImage,
    date: 'SEP 10, 2025',
    // @ts-expect-error svelte cannot figure out that the two types are the same 
    element: Piped,
  },
}
/**
 * list of all articles
 */
export const ARTICLES: Article[] = [
  ARTICLE_DETAILS['piped'],
]