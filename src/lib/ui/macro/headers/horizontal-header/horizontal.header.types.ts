/* imports */
/**
 * props for header block used by every project post
 */
export type HeaderProps = {
  title: string,
  external?: { text: string, url: string },
  tags: { type: 'mobile' | 'website' | 'iot' | 'blockchain' | 'data' | 'backend', text: string }[],
}