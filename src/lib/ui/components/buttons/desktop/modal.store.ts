/* imports */
import { writable, type Writable } from 'svelte/store'

/**
 * store to handle focusing modals based on url / clicks / etc
 */
export const focusedModal: Writable<number> = writable(1)