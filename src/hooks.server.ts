/**
 * middleware function to run on the server before the page is served
 * https://svelte.dev/docs/kit/hooks
 */
/* imports */
import type { Handle } from '@sveltejs/kit'

/**
 * handles requests and modifies them based on user cookies before sending html back
 * @param param0.event
 * @param param0.resolve
 */
export const handle: Handle = async({ event, resolve }) => {
  return resolve(event, {
    transformPageChunk: ({ html }) => {
      let theme = event.cookies.get('theme')
      let screen = event.cookies.get('screen')
      let sound = event.cookies.get('sound')
      let volume = event.cookies.get('volume')
      let iconSize = event.cookies.get('icon-size')
      if (!theme) theme = 'jordy-blue'
      if (!screen) screen = 'roaming-fishes'
      if (!sound) sound = 'true'
      if (!volume) volume = '0.05'
      if (!iconSize) iconSize = '1'
      return html
        .replace('data-theme="jordy-blue"', `data-theme="${theme}"`)
        .replace('data-screen="roaming-fishes"', `data-screen="${screen}"`)
        .replace('data-sound="true"', `data-sound="${sound}"`)
        .replace('data-volume="0.05"', `data-volume="${volume}"`)
        .replace('data-icon-size="1"', `data-icon-size="${iconSize}"`)
    }
  })
}