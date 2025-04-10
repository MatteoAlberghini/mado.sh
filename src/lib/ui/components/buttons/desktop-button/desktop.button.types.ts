/* imports  */
import type { Snippet } from 'svelte'
import type { UniqueID } from '$lib/ui/components/buttons/desktop-button/desktop.button.data'

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
/**
 * Props for modal component
 */
export type ModalProps = {
  id: UniqueID,
  width?: `${number}px`,
  height?: `${number}px`,
  top?: `${number}px`,
  left?: `${number}px`,
  children?: Snippet,
  color?: `#${string}`,
}