import { SVGAttributes } from 'react'

export interface IconBaseProps extends SVGAttributes<SVGSVGElement> {
  color?: string
  size?: string | number
  title?: string
}
