/* imports  */
import Contact from '$lib/data/contact/contact.content.svelte'
import Projects from '$lib/data/projects/projects.content.svelte'
import Settings from '$lib/data/settings/settings.content.svelte'
import Articles from '$lib/data/articles/articles.content.svelte'
import type { DesktopButtonProps } from '$lib/ui/components/buttons/desktop/desktop.button.types'
import { BASE_PROJECTS, PROJECTS } from '$lib/data/projects/projects.data'
import type { MultilevelSelectorItem } from '$lib/ui/components/selectors/selector.types'
import { ARTICLES, BASE_ARTICLES } from '$lib/data/articles/articles.data'

/**
 * connects each type of 'desktop application' to a unique id
 */
export enum DesktopUniqueID {
  projects = 0,
  contact = 1,
  settings = 2,
  articles = 3,
  linkedin = 100,
  github = 99,
}
/**
 * array used to render all icons on the desktop, connects to content folder
 */
export const DESKTOP_ICONS: DesktopButtonProps[] = [
  {
    id: DesktopUniqueID.articles,
    type: 'folder',
    text: BASE_ARTICLES.text,
    url: BASE_ARTICLES.path,
    modal: { left: '1216px', top: '846px', width: '1224px', height: '790px', color: 'oklch(0.3118 0.0934 258.7)' },
    position: { row: '1', column: '1' },
    pathname: [
      BASE_ARTICLES,
      ...ARTICLES,
    ],
    // @ts-expect-error svelte cannot figure out that the two types are the same 
    children: Articles,
  },
  {
    id: DesktopUniqueID.projects,
    type: 'folder',
    text: BASE_PROJECTS.text,
    url: BASE_PROJECTS.path,
    modal: { left: '1216px', top: '946px', width: '1000px', height: '730px', color: 'oklch(0.3118 0.0934 258.7)' },
    position: { row: '2', column: '1' },
    pathname: [
      BASE_PROJECTS,
      ...PROJECTS,
    ],
    // @ts-expect-error svelte cannot figure out that the two types are the same 
    children: Projects,
  },
  {
    id: DesktopUniqueID.contact,
    type: 'mail',
    text: 'contact.sh',
    url: '/contact',
    modal: { left: '966px', top: '786px', width: '750px', height: '570px', color: 'oklch(0.3732 0.0635 258.28)' },
    position: { row: '3', column: '1' },
    pathname: [{ text: 'contact.sh', path: '/contact' }],
    // @ts-expect-error svelte cannot figure out that the two types are the same 
    children: Contact,
  },
  {
    id: DesktopUniqueID.settings,
    type: 'pc',
    text: 'settings.sh',
    url: '/settings',
    modal: { left: '745px', top: '816px', width: '900px', height: '600px', color: 'oklch(0.3024 0.0839 293.21)' },
    position: { row: '4', column: '1' },
    pathname: [{ text: 'settings.sh', path: '/settings' }],
    // @ts-expect-error svelte cannot figure out that the two types are the same 
    children: Settings,
  },
  {
    id: DesktopUniqueID.github,
    type: 'external',
    text: 'github.link',
    url: 'https://github.com/MatteoAlberghini',
    modal: {},
    position: { row: '1', column: '-2' },
    pathname: [{ text: 'github.link', path: '/external-github' }],
  },
  {
    id: DesktopUniqueID.linkedin,
    type: 'external',
    text: 'linkedin.link',
    url: 'https://www.linkedin.com/in/0x6d61646f/',
    modal: {},
    position: { row: '2', column: '-2' },
    pathname: [{ text: 'linkedin.link', path: '/external-linkedin' }],
  },
]
/**
 * array used for navigation in the topbar of desktop
 */
export const DESKTOP_NAVIGATION: MultilevelSelectorItem[] = [
  {
    label: 'contact.sh',
    value: '/contact',
  },
  {
    label: 'settings.sh',
    value: '/settings',
  },
  {
    label: 'projects.dir',
    value: '/projects',
    items: PROJECTS.map((p) => ({ label: p.text, value: p.path }))
  }
]

export const MESSAGES_OF_THE_DAY: string[] = [
  'happy to see you here :)',
  'check out my <a href="/projects" draggable="false">projects :D</a>',
  'you can <a href="/settings" draggable="false">customize</a> your experience!',
]