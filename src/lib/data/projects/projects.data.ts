/* imports */
import Genuino from '$lib/content/projects/genuino.content.svelte'
import LinkdingToBookmarks from '$lib/content/projects/linkding_to_bookmarks.svelte'
import O9solutions from '$lib/content/projects/o9solutions.content.svelte'
import Waterkaarten from '$lib/content/projects/waterkaarten.content.svelte'
import type { Project } from './projects.types'

/**
 * base text/url of projects page
 */
export const BASE_PROJECTS: { text: string, path: string } = {
  text: 'projects.dir',
  path: '/projects',
}
/**
 * list of all projects
 */
export const PROJECTS: Project[] = [
  {
    text: 'genuino.txt',
    path: '/projects/genuino',
    // @ts-expect-error svelte cannot figure out that the two types are the same 
    element: Genuino,
  },
  {
    text: 'waterkaarten.txt',
    path: '/projects/waterkaarten',
    // @ts-expect-error svelte cannot figure out that the two types are the same 
    element: Waterkaarten,
  },
  {
    text: 'o9solutions.txt',
    path: '/projects/o9solutions',
    // @ts-expect-error svelte cannot figure out that the two types are the same 
    element: O9solutions,
  },
]
/**
 * list of all scripts
 */
export const SCRIPTS: Project[] = [
  {
    text: 'linkding_to_bookmarks.py',
    path: '/projects/linkding-to-bookmarks',
    // @ts-expect-error svelte cannot figure out that the two types are the same 
    element: LinkdingToBookmarks,
  },
]
/**
 * list of all themes 
 */
export const THEMES: Project[] = [
  {
    text: 'vscodium_vaporwave.theme',
    path: 'https://codeberg.org/0x6d61646f/vaporwave.vscodium',
  },
]