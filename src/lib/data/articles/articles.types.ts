/* imports  */
import type { Picture } from '$lib/ui/components/media/image/image.types'
import type { Snippet } from 'svelte'

/**
 * potential categories for articles
 */
export type Category = 'selfhost' | 'mobile' | 'web'

/**
 * all potential months used in articles (for date type)
 */
export type Month = 'JAN' | 'FEB' | 'MAR' | 'APR' | 'MAY' | 'JUN' | 'JUL' | 'AUG' | 'SEP' | 'OCT' | 'NOV' | 'DEC'

/**
 * date type
 */
export type Date = `${Month} ${number}, ${number}`

/**
 * all potential categories
 */
export const Categories = new Map<string, string>([
  ['everything', 'everything'],
  ['selfhost', 'selfhost'],
])

/**
 * single project type
 */
export type Article = {
  text: string,
  title: string,
  excerpt: string,
  path: string,
  image: Picture,
  date: Date,
  element?: Snippet,
  category: Category[],
}