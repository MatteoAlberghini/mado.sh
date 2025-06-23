/* imports */
import Genuino from '$lib/data/projects/genuino.content.svelte'
import O9solutions from '$lib/data/projects/o9solutions.content.svelte'
import Waterkaarten from '$lib/data/projects/waterkaarten.content.svelte'
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
 * List of all external repositories
 */
export const REPOSITORIES: Project[] = [
  {
    text: 'website_frontend.link',
    path: 'https://github.com/MatteoAlberghini/0x6d61646f.website',
  },
  {
    text: 'geonames_scripts.link',
    path: 'https://github.com/MatteoAlberghini/geonames.scripts',
  }
]