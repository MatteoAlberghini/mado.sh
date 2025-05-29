/**
 * all URLs used in the website
 */
export enum URLs {
  form = '/form',
}

/**
 * default headers set on any rest call
 * @returns default headers for a rest call
 */
export function getDefaultHeaders(): Headers {
  const requestHeaders = new Headers()
  requestHeaders.set('Content-Type', 'application/json')
  requestHeaders.set('Accept', 'application/json')
  return requestHeaders
}

/**
 * request url utility, you can pass the type that extends object in <> to get back that type
 * @param url url to user for the request, you can use URLs record to get the standard ones
 * @param type any request type (GET, POST, etc)
 * @param headers custom headers, if not set it uses the default ones
 * @param body object used for body in POST request 
 * @returns custom object type set as T in extension
 */
export async function request<T extends object>(
  url: URLs,
  type: 'GET' | 'POST',
  body?: FormData,
  headers: Headers = getDefaultHeaders(),
): Promise<T> {
  const rq: RequestInit = { method: type, headers }
  if (body) { rq.body = JSON.stringify(Object.fromEntries(body)) }
  try {
    const response = await fetch(url, rq)
    const json = await response.json().catch((e: unknown) => {
      reportError(e instanceof Error ? e.message : 'unknown error')
    })
    return json
  } catch(e) {
    reportError(e instanceof Error ? e.message : 'unknown error')
    throw(e)
  }
}