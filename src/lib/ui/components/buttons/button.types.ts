/* imports  */
import type { Snippet } from 'svelte'

/**
 * props for basic button component
 */
export type ButtonProps = {
  width: number,
  height: number,
  loading?: boolean,
  type?: 'button' | 'reset' | 'submit',
  onClick?: () => void,
  children?: Snippet,
}