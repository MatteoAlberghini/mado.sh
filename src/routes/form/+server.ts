/* imports */
import { transporter } from '$lib/managers/mailer.manager.js'
import { SMTP_USERNAME } from '$env/static/private'

/**
 * support function to escape html from user submitted strings
 * @param str string to escape
 * @returns escapted string
 */
function escape(str: string): string {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

/**
 * post submission to send email via smtp
 * @param param0 full post request
 * @param param0.request request value
 * @returns response from the server
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

    await transporter.sendMail({
      from: SMTP_USERNAME,
      to: SMTP_USERNAME,
      subject: `mado.sh form submission from ${escape(username)}`,
      html: `${escape(message)}`,
    })
    return new Response(JSON.stringify({ success: true, message: 'form submitted' }), { status: 200 })
  } catch(e) {
    const message = e instanceof Error ? e.message : 'unknown error'
    return new Response(JSON.stringify({ success: false, message: `internal server error: ${message}` }), { status: 500 })
  }
}