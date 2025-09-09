/* imports  */
import type { Snippet } from 'svelte'
import type { DesktopUniqueID } from '$lib/data/desktop/desktop.data'

/**
 * all possible icons used 
 */
type Icon = 'text' | 'pc' | 'folder' | 'mail' | 'music' | 'external'
/**
 * drag types
 */
export type Drag = 'top' | 'bottom' | 'left' | 'right' | 'bottom-left' | 'bottom-right' | 'container'
/**
 * props for desktop button component
 */
export type DesktopButtonProps = {
  id: DesktopUniqueID,
  type: Icon,
  text: string,
  url: string,
  modal: { width?: `${number}px`, height?: `${number}px`, top?: `${number}px`, left?: `${number}px`, color?: `oklch${string}` },
  position: { row: `${number}`, column: `${number}`},
  pathname: [{ text: string, path: string }, ...{ text: string, path: string }[]],
  children?: Snippet,
}
/**
 * props for modal component
 */
export type ModalProps = {
  id: DesktopUniqueID,
  path: [{ text: string, path: string }, ...{ text: string, path: string }[]],
  width?: `${number}px`,
  height?: `${number}px`,
  top?: `${number}px`,
  left?: `${number}px`,
  children?: Snippet,
  color?: `#${string}`,
  close: () => void,
}