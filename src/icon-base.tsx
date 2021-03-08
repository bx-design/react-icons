import { FC } from 'react'
import type { IconBaseProps } from './types'

const IconBase: FC<IconBaseProps> = ({ size, color, children }) => (
  <svg
    width={size || 24}
    height={size || 24}
    color={color}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    data-testid='iconBase'
  >
    {children}
  </svg>
)

export default IconBase
