import { writable, type Writable } from 'svelte/store'
import { createHighlighter, type BundledLanguage, type BundledTheme, type HighlighterGeneric } from 'shiki'
import type { Article } from '$lib/data/articles/articles.types'
import Piped from '$lib/content/articles/piped.content.svelte'
import PipedImage from '$lib/images/articles/piped.webp?enhanced'

/**
 * store to handle sintax highliting with shiki
 */
export const highlighter: Writable<HighlighterGeneric<BundledLanguage, BundledTheme> | null> = writable(null)
/**
 * generate first highligter to be reused by shiki
 */
export async function generateHighlighter() {
  highlighter.set(await createHighlighter({
    themes: ['synthwave-84'],
    langs: ['typescript', 'javascript', 'shellscript', 'apache'],
  }))
}
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
type id = 'piped' | 'obsidian-sync'
/**
 * list of all articles data
 */
export const ARTICLE_DETAILS: Record<id, Article> = {
  'piped': {
    text: 'piped.txt',
    title: 'setting up your own <span>youtube proxy</span> with selfhosted <span>piped</span>',
    excerpt: 'i\'v been spending the past months degoogling and generally removing big american tech companies from my life. the hardest of this companies was google, and youtube was the worst app to deal with. let me explain to you how you can keep watching youtube anonymously using Piped as a proxy.',
    path: '/articles/selfhosted-piped',
    category: ['selfhost'],
    image: PipedImage,
    date: 'SEP 10, 2025',
    // @ts-expect-error svelte cannot figure out that the two types are the same 
    element: Piped,
  },
  'obsidian-sync': {
    text: 'obsidian-sync.txt',
    title: 'sync your <span>obsidian notes</span> without a central server <span>with syncthing</span>',
    excerpt: '',
    path: '/articles/obsidian-sync-with-syncthing',
    category: ['selfhost', 'utils']
  }
}
/**
 * list of all articles
 */
export const ARTICLES: Article[] = [
  ARTICLE_DETAILS['piped'],
]