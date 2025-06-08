/* eslint-disable no-console */

/**
 * organized function to report a error message
 * @param value string value to report the error message
 */
export async function reportError(value: string) {
  console.error('\x1b[31m%s\x1b[0m', `${value}`)
}