/**
 * sitemap page type
 */
type SitemapPage = {
  url: string,
  date: `${number}-${number}-${number}`,
  change: 'weekly' | 'monthly',
  priority: number,
}
/**
 * sitemap to iterate trough to auto generate
 */
export const SITEMAP: SitemapPage[] = [
  {
    url: '',
    date: '2025-10-20',
    change: 'monthly',
    priority: 1,
  },
  {
    url: 'articles',
    date: '2025-10-20',
    change: 'weekly',
    priority: 0.9,
  },
  {
    url: 'articles/selfhosted-piped',
    date: '2025-10-20',
    change: 'monthly',
    priority: 0.8,
  },
  {
    url: 'contact',
    date: '2025-10-20',
    change: 'monthly',
    priority: 0.7,
  },
  {
    url: 'articles/projects',
    date: '2025-10-20',
    change: 'monthly',
    priority: 0.7,
  },
  {
    url: 'projects/genuino',
    date: '2025-10-20',
    change: 'monthly',
    priority: 0.7,
  },
  {
    url: 'projects/o9solutions',
    date: '2025-10-20',
    change: 'monthly',
    priority: 0.7,
  },
  {
    url: 'settings',
    date: '2025-10-20',
    change: 'monthly',
    priority: 0.6,
  }
]