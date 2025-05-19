/* imports  */
import type { Snippet } from 'svelte'

/**
 * props for basic button component
 */
export type ButtonProps = {
  width: number,
  height: number,
  onClick: () => void,
  children?: Snippet,
}