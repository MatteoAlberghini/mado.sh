import { SITEMAP } from '$lib/data/pages.data.js'

/**
 * get request to generate xml based on origin
 * @param param0 request
 * @param param0.url url of the request
 * @param param0.setHeaders function to set headers
 * @returns sitemap xml
 */
export async function GET({ url, setHeaders }) {
  setHeaders({
    'Content-Type': 'application/xml'
  })
  const base = `${url.origin}/`
  const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${SITEMAP.map((s) => (`
      <url>
        <loc>${base}${s.url}</loc>
        <lastmod>${s.date}</lastmod>
        <changefreq>${s.change}</changefreq>
        <priority>${s.priority}</priority>
      </url>
    `)).join('')}
  </urlset>`
  return new Response(sitemap)
}