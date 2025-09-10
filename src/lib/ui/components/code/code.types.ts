/**
 * props for code component
 */
export type CodeProps = {
  language: string,
  code: string,
  title: string,
  icon: 'json' | 'bash' | 'console' | 'config',
}