import type { Article } from '$lib/data/articles/articles.types'
import Test1 from '$lib/data/articles/test1.content.svelte'
import T1 from '$lib/images/articles/t1.jpg?enhanced'

/**
 * base text/url of articles page
 */
export const BASE_ARTICLES: { text: string, path: string } = {
 text: 'articles.dir',
 path: '/articles',
}
/**
 * list of all articles
 */
export const ARTICLES: Article[] = [
  {
    text: 'degoogle.txt',
    title: 'how to <span>degoogle</span> your life and removing other <span>data leaches</span> while you are at it',
    excerpt: 'it\'s time  to remove big tech from your life: the data leachers are becoing more and more greedy and there is no end in sight.\n in this article I will talk about how i managed to totally remove google and google services from my life, and some alternatives for other popular services.',
    path: '/articles/test-1',
    category: ['selfhost'],
    image: T1,
    date: 'august 18, 2025',
    // @ts-expect-error svelte cannot figure out that the two types are the same 
    element: Test1,
  },
  {
    text: 'homeservers.txt',
    title: '<span>homeservers</span> are the most fun I had tinkering',
    path: '/articles/test-3',
    category: ['selfhost'],
    image: T1,
    date: 'august 18, 2025',    
    // @ts-expect-error svelte cannot figure out that the two types are the same 
    element: Test1,
  },
  {
    text: 'piper.txt',
    title: 'setting up selfhosted <span>piper</span> and your own <span>youtube proxy</span>',
    path: '/articles/test-4',
    category: ['selfhost'],
    image: T1,
    date: 'august 18, 2025',
    // @ts-expect-error svelte cannot figure out that the two types are the same 
    element: Test1,
  },
]