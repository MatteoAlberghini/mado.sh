/* imports */
import { setCookie } from '$lib/utils/cookies'

/**
 * all possible icon sizes
 */
export const ICON_SIZES: { id: string, step: number, value: number }[] = [
  {
    id: 'small',
    step: 0,
    value: 1.0,
  },
  {
    id: 'medium',
    step: 50,
    value: 1.1,
  },
  {
    id: 'large',
    step: 100,
    value: 1.2,
  }
]

/**
 * set an icon size
 * @param size string
 */
export function setIconSize(size: number) {
  setCookie('icon-size', size.toString())
  document.documentElement.setAttribute('data-icon-size', size.toString())
}
/**
 * get current icon size set on data attribute
 * @returns icon size
 */
export function getIconSize(): number {
  const value = parseFloat(document.documentElement.getAttribute('data-icon-size') || '1.1')
  if (value && !isNaN(value)) { return value }
  return 1.1
}
/**
 * get current icon size value from the data object 
 * @returns object of id, step, value
 */
export function getSliderIconSize(): { id: string, step: number, value: number } {
  return ICON_SIZES.find((v) => v.value === getIconSize()) || { id: 'medium', step: 50, value: 1.1 }
}