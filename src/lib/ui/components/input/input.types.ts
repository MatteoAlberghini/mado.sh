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
  height?: number,
  value?: string,
  interactable?: boolean,
}

/**
 * props for dummy input component
 */
export type DummyInputProps = {
  label: string,
  value: string,
  height?: number,
}