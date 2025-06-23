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
/**
 * type for multilevel selector single item
 */
export type MultilevelSelectorItem = {
  label: string,
  value: string,
  items?: { label: string, value: string }[],
}
/**
 * props for multilevel selector components
 */
export type MultiLevelSelectorProps = {
  label?: string,
  selected: string,
  items: MultilevelSelectorItem[],
  height: number,
  onClick: (_: string) => void,
}