import type { Date } from '$lib/data/articles/articles.types'

/**
 * potential categories for rss articles
 */
export type Category = 'programming' | 'reading' | 'philosphy' | 'science'

/**
 * all potential categories
 */
export const Categories = new Map<string, string>([
  ['everything', 'everything'],
  ['programming', 'programming'],
  ['reading', 'reading'],
  ['philosphy', 'philosphy'],
  ['science', 'science']
])

/**
 * single rss article
 */
export type RSSArticle = {
  title: string,
  href: string,
  path: string,
  image: string,
  category: Category[],
}

/**
 * rss infos
 */
export type RSSInfo = {
  date: Date,
}