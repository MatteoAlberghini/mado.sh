/* imports */
import { setCookie } from '$lib/utils/cookies'

/**
 * all possible themes
 */
export const THEMES = new Map<string, string>([
  ['lavender', 'lavender'],
  ['jordy-blue', 'jordy blue'],
  ['pistachio', 'pistachio'],
])

/**
 * get the theme value from the map, if exists, or return default theme
 * @returns value of the map
 */
export function getThemeValue(): string {
  return THEMES.get(document.documentElement.getAttribute('data-theme') || 'lavender') || 'lavender'
}
/**
 * set a string as theme
 * @param theme string
 * @returns new value set, or the default theme
 */
export function setTheme(theme: string): string {
  setCookie('theme', theme)
  document.documentElement.setAttribute('data-theme', theme)
  return THEMES.get(document.documentElement.getAttribute('data-theme') || 'lavender') || 'lavender'
}