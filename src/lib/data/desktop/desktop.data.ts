/* imports  */
import Contact from '$lib/content/contact/contact.content.svelte'
import Projects from '$lib/content/projects/projects.content.svelte'
import Settings from '$lib/content/settings/settings.content.svelte'
import Articles from '$lib/content/articles/articles.content.svelte'
import Rss from '$lib/content/rss/rss.content.svelte'
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
  rss = 4,
  codeberg = 99,
  linkedin = 100,
  image = 999,
}
// more colors to test: oklch(0.30 0.075 178) oklch(0.32 0.065 145) oklch(0.31 0.072 340)
/**
 * array used to render all icons on the desktop, connects to content folder
 */
export const DESKTOP_ICONS: DesktopButtonProps[] = [
  {
    id: DesktopUniqueID.articles,
    type: 'folder',
    text: BASE_ARTICLES.text,
    url: BASE_ARTICLES.path,
    modal: { left: '300px', top: '150px', width: '1270px', height: '890px', color: 'oklch(0.3118 0.0934 258.7)' },
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
    modal: { left: '500px', top: '200px', width: '1000px', height: '730px', color: 'oklch(0.3118 0.0934 258.7)' },
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
    modal: { home: false, left: '400px', top: '350px', width: '847px', height: '635px', color: 'oklch(0.3732 0.0635 258.28)' },
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
    modal: { home: false, left: '300px', top: '400px', width: '874px', height: '644px', color: 'oklch(0.3024 0.0839 293.21)' },
    position: { row: '4', column: '1' },
    pathname: [{ text: 'settings.sh', path: '/settings' }],
    // @ts-expect-error svelte cannot figure out that the two types are the same 
    children: Settings,
  },
  {
    id: DesktopUniqueID.rss,
    type: 'news',
    text: 'rss.sh',
    url: '/rss',
    modal: { home: false, fullscreen: false, right: '0px', bottom: '32px', width: '550px', height: '644px', color: 'oklch(0.26 0.075 272)' },
    position: { row: '5', column: '1' },
    pathname: [{ text: 'rss.sh', path: '/rss' }],
    // @ts-expect-error svelte cannot figure out that the two types are the same 
    children: Rss,
  },
  {
    id: DesktopUniqueID.codeberg,
    type: 'external',
    text: 'codeberg.link',
    url: 'https://codeberg.org/0x6d61646f',
    modal: {},
    position: { row: '1', column: '-2' },
    pathname: [{ text: 'codeberg.link', path: '/external-codeberg' }],
  },
  {
    id: DesktopUniqueID.linkedin,
    type: 'external',
    text: 'linkedin.link',
    url: 'https://www.linkedin.com/in/0x6d61646f/',
    modal: {},
    position: { row: '2', column: '-2' },
    pathname: [{ text: 'linkedin.me', path: '/external-linkedin' }],
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
/**
 * array used for storing today's messages
 */
export const MESSAGES_OF_THE_DAY: string[] = [
  'happy to see you here :)',
  'check out my <a href="/projects" draggable="false">projects :D</a>',
  'you can <a href="/settings" draggable="false">customize</a> your experience!',
]