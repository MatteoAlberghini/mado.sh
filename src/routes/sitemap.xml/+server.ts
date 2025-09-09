/**
 * get request to generate xml based on origin
 * @param param0 request
 * @returns sitemap xml
 */
export async function GET({ url, setHeaders }) {
  setHeaders({
    'Content-Type': 'application/xml'
  })
  const base = `${url.origin}/`
  const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${base}</loc>
      <lastmod>2024-07-20</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.9</priority>
    </url>
    <url>
      <loc>${base}articles</loc>
      <lastmod>2025-09-10</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.9</priority>
    </url>
    <url>
      <loc>${base}articles/selfhosted-piped</loc>
      <lastmod>2025-09-10</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>${base}contact</loc>
      <lastmod>2024-07-20</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
    <url>
      <loc>${base}projects</loc>
      <lastmod>2024-07-20</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>${base}projects/genuino</loc>
      <lastmod>2024-07-20</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
    <url>
      <loc>${base}projects/waterkaarten</loc>
      <lastmod>2024-07-20</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
    <url>
      <loc>${base}projects/o9solutions</loc>
      <lastmod>2024-07-20</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
    <url>
      <loc>${base}settings</loc>
      <lastmod>2024-07-20</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.5</priority>
    </url>
  </urlset>`
  return new Response(sitemap)
}