import mailer from 'nodemailer'
import { SMTP_TOKEN, SMTP_USERNAME } from '$env/static/private'

/**
 * mail transporter for protonmail
 */
export const transporter = mailer.createTransport({
  host: 'smtp.protonmail.ch',
  port: 587,
  secure: false,
  auth: {
    user: SMTP_USERNAME,
    pass: SMTP_TOKEN,
  }
})
