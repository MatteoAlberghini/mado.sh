/**
 * get cookie with a certain name
 * @param id cookie name
 * @returns string value of the cookie or null if not found
 */
export function getCookie(id: string): string | null {
  const name = `${id}=`
  const decoded = decodeURIComponent(document.cookie)
  const ca = decoded.split(';')
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == ' ') { c = c.substring(1) }
    if (c.indexOf(name) == 0) { return c.substring(name.length, c.length) }
  }
  return null
}

/**
 * set cookie with a certain name
 * @param id cookie name
 * @param value value to set
 * @param days number of days (defaults to 1 year)
 */
export function setCookie(id: string, value: string, days: number = 365) {
  const d = new Date()
  d.setTime(d.getTime() + (days * 24 * 60 * 1000))
  const expires = `expires=${d.toUTCString()}`
  document.cookie = `${id}=${value};${expires};path=/; secure`
}

/**
 * delete cookie with a certain name
 * @param id cookie name
 */
export function deleteCookie(id: string) {
  document.cookie = `${id}=; Max-Age=-99999999;`
}