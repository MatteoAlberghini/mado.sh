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
  date: `${Month} ${number}, ${number}`,
  element?: Snippet,
  category: Category[],
}