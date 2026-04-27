/* imports */
/**
 * props for header block used by every project post
 */
export type HeaderProps = {
  title: string,
  external?: { text: string, url: string },
  image?: boolean,
  tags: { type: 'mobile' | 'website' | 'iot' | 'blockchain' | 'data' | 'backend', text: string }[],
}