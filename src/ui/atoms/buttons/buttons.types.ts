/* imports  */
import type { Snippet } from 'svelte'

/**
 * Connects each type of 'desktop application' to a unique id
 */
export enum UniqueID {
  changelog = 0,
  projects = 1,
  contact = 2,
  settings = 3,
}

/**
 * All possible icons used 
 */
type Icon = 'text' | 'pc' | 'folder' | 'mail' | 'music' | 'external'

/**
 * Props for desktop button component
 */
export type DesktopButtonProps = {
  id: UniqueID,
  type: Icon,
  text: string,
  url: string,
  modal: { width?: string, height?: string, top?: string, left?: string },
  position: { row: string, column: string},
  children?: Snippet,
}
