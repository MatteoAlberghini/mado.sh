/* imports */
import { neon } from '@neondatabase/serverless'
import { DATABASE_URL } from '$env/static/private'

/* constants */
export const sql = neon(DATABASE_URL)