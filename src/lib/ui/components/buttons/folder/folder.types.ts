/**
 * props for folder button, can be used for any folder usage
 */
export type FolderButtonProps = {
  text: string,
  path: string,
  external: boolean,
  icon: 'globe' | 'text' | 'paint' | 'script',
}