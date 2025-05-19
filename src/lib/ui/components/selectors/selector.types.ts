/**
 * props for basic selector component
 */
export type SelectorProps = {
  label?: string,
  selected: string,
  items: Map<string, string>,
  height: number,
  onClick: (_: string) => void,
}