/**
 * picture type from enhanced image because i cannot import it from anywhere
 */
export interface Picture {
  sources: Record<string, string>,
  img: {
      src: string;
      w: number;
      h: number;
  },
}
/**
 * props for image component
 */
export type ImageProps = {
  src: Picture,
  alt: string,
  lazy?: boolean,
  position?: `${number}% ${number}%`,
}