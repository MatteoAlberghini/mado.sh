/* imports */
import type { Snippet } from 'svelte'
import { setCookie } from '$lib/utils/cookies'
import { writable, type Writable } from 'svelte/store'
import FishScreen from '$lib/ui/macro/screen-savers/fish.screen.svelte'
import RainScreen from '$lib/ui/macro/screen-savers/rain.screen.svelte'
import PlanetScreen from '$lib/ui/macro/screen-savers/planet.screen.svelte'

/**
 * all possible screen savers
 */
export const SCREEN_SAVERS = new Map<string, string>([
  ['roaming-fishes', 'roaming fishes'],
  ['heavy-rain', 'heavy rain'],
  ['bouncing-planet', 'bouncing planet'],
])
/**
 * all screens with links to the element ot render
 */
export const SCREENS: { id: string, element: Snippet }[] = [
  {
    id: 'roaming-fishes',
    // @ts-expect-error svelte cannot figure out that the two types are the same 
    element: FishScreen,
  },
  {
    id: 'heavy-rain',
    // @ts-expect-error svelte cannot figure out that the two types are the same 
    element: RainScreen,
  },
  {
    id: 'bouncing-planet',
    // @ts-expect-error svelte cannot figure out that the two types are the same 
    element: PlanetScreen,
  },
]

/**
 * store to handle playing / stopping of screen savers
 */
export const screenPlaying: Writable<boolean> = writable(false)
/**
 * store the current selected screen saver
 */
export const currentScreen: Writable<string> = writable('roaming-fishes')

/**
 * get the screen save value from the map, or return the default screen
 * @returns screen save value
 */
export function getScreenSaverValue(): string {
  return SCREEN_SAVERS.get(document.documentElement.getAttribute('data-screen') || 'roaming-fishes') || 'roaming fishes'
}
/**
 * get the screen save ID from the map, or return the default screen
 * @returns screen save ID
 */
export function getScreenSaverID(): string {
  return document.documentElement.getAttribute('data-screen') || 'roaming-fishes'
}
/**
 * set a string as the current screen saver
 * @param screen screen saver
 */
export function setScreenSaver(screen: string) {
  setCookie('screen', screen)
  document.documentElement.setAttribute('data-screen', screen)
  currentScreen.set(screen)
}