/* imports  */
import type { Snippet } from 'svelte'

/**
 * single project type
 */
export type Project = {
  text: string,
  path: string,
  element: Snippet,
}