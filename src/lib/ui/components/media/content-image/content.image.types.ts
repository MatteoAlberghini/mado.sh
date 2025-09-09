/* imports */
import type { ImageProps } from '$lib/ui/components/media/image/image.types'

/**
 * props for content image component
 */
export interface ContentImageProps extends ImageProps {
  name: string,
  text: string,
}