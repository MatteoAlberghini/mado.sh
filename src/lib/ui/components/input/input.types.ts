/* imports */
import type { HTMLInputTypeAttribute } from 'svelte/elements'

/**
 * props for basic input component
 */
export type InputProps = {
  id: string,
  label: string,
  required?: boolean,
  type?: HTMLInputTypeAttribute,
  side?: string,
  max?: number,
}