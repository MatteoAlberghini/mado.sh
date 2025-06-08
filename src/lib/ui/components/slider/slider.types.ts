/**
 * props for basic slider component
 */
export type SliderProps = {
  label: string,
  ranges: string[],
  min: number,
  max: number,
  step: number,
  value: number,
  onInput: (value: string) => void,
}