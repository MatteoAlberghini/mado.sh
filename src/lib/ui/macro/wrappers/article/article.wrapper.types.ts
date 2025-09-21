/* imports  */
import type { Date } from '$lib/data/articles/articles.types'
import type { Snippet } from 'svelte'

/**
 * article wrapper type
 */
export type ArticleWrapper = {
  children?: Snippet,
  date?: Date,
}