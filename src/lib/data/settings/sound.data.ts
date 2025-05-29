/* imports  */
import { setCookie } from '$lib/utils/cookies'
import { writable, type Writable } from 'svelte/store'

/**
 * store the audio ref
 */
export const clickSoundElement: Writable<HTMLAudioElement> = writable()
/**
 * store to handle sound active/inactive
 */
export const soundActive: Writable<boolean> = writable(true)
/**
 * store to handle level of volume of sound
 */
export const soundVolume: Writable<number> = writable(0.05)
/**
 * list of all volume with id step and value
 */
export const VOLUMES: { id: string, step: number, value: number }[] = [
  {
    id: 'low',
    step: 0,
    value: 0.05,
  },
  {
    id: 'normal',
    step: 50,
    value: 0.1,
  },
  {
    id: 'loud',
    step: 100,
    value: 0.3,
  }
]

/**
 * set parameter for active sound or not
 * @param active boolean
 */
export function setSoundActive(active: boolean) {
  setCookie('sound', active.toString())
  document.documentElement.setAttribute('data-sound', active.toString())
  soundActive.set(active)
}
/**
 * get active sound from data attribute
 * @returns active or not
 */
export function getSoundActive(): boolean {
  return (document.documentElement.getAttribute('data-sound') || 'false') === 'true'
}
/**
 * set current volume
 * @param vol value of volume to set
 */
export function setSoundVolume(vol: number) {
  setCookie('volume', vol.toString())
  document.documentElement.setAttribute('data-volume', vol.toString())
  soundVolume.set(vol)
}
/**
 * get active sound from data attribute
 * @returns value of volume
 */
export function getSoundVolume(): number {
  const value = parseFloat(document.documentElement.getAttribute('data-volume') || '0.05')
  if (value && !isNaN(value)) { return value }
  return 0.05
}
/**
 * get current volume value from the data object 
 * @returns object of id, step, value
 */
export function getSliderSoundVolume(): { id: string, step: number, value: number } {
  return VOLUMES.find((v) => v.value === getSoundVolume()) || { id: 'low', step: 0, value: 0.05 }
}