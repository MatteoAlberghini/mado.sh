/**
 * get request to robots txt based on origin
 * @param param0 request
 * @returns robots txt
 */
export async function GET({ url, setHeaders }) {
  setHeaders({
    'Content-Type': 'text/plain'
  })
  const base = `${url.origin}/`
  const robots = `Sitemap: ${base}sitemap.xml`
  return new Response(robots)
};