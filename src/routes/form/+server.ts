/* imports */
import { sql } from '$lib/managers/database.manager.js'

/**
 * handle form submissions
 * @param param0 request
 */
export async function POST({ request }) {
  try {
    const { username, message } = await request.json()
    if (!username || !message || typeof username !== 'string' || typeof message !== 'string' || username === '' || message === '') {
      return new Response(JSON.stringify({ success: false, message: 'invalid parameters' }))
    }
    if (username.length > 50 || message.length > 500) {
      return new Response(JSON.stringify({ success: false, message: 'too many characters in parameters' }))
    }
    await sql.query('INSERT INTO form_submissions (username, message) VALUES ($1, $2)', [username, message])
    return new Response(JSON.stringify({ success: false, message: 'form submitted' }), { status: 200 })
  } catch(e) {
    const message = e instanceof Error ? e.message : 'unknown error'
    return new Response(JSON.stringify({ success: false, message: `internal server error: ${message}` }), { status: 500 })
  }
}