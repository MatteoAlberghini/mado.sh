/* imports  */
import Contact from '$lib/data/contact/contact.content.svelte'
import Projects from '$lib/data/projects/projects.content.svelte'
import Settings from '$lib/data/settings/settings.content.svelte'
import type { DesktopButtonProps } from '$lib/ui/components/buttons/desktop/desktop.button.types'
import { BASE_PROJECTS, PROJECTS } from '$lib/data/projects/projects.data'

/**
 * connects each type of 'desktop application' to a unique id
 */
export enum DesktopUniqueID {
  projects = 0,
  contact = 1,
  settings = 2,
  linkedin = 100,
  github = 99,
}
/**
 * array used to render all icons on the desktop, connects to content folder
 */
export const DESKTOP_ICONS: DesktopButtonProps[] = [
  {
    id: DesktopUniqueID.projects,
    type: 'folder',
    text: BASE_PROJECTS.text,
    url: 'todo change',
    modal: { left: '1216px', top: '946px', width: '1000px', height: '730px', color: '#0F2F5F' },
    position: { row: '1', column: '1' },
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
    url: 'todo change',
    modal: { left: '966px', top: '786px', width: '750px', height: '570px', color: '#2B4162' },
    position: { row: '2', column: '1' },
    pathname: [{ text: 'contact.sh', path: '/contact' }],
    // @ts-expect-error svelte cannot figure out that the two types are the same 
    children: Contact,
  },
  {
    id: DesktopUniqueID.settings,
    type: 'pc',
    text: 'settings.sh',
    url: 'todo change',
    modal: { left: '745px', top: '816px', width: '900px', height: '600px', color: '#312454' },
    position: { row: '3', column: '1' },
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