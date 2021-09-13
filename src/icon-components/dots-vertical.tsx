import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxDotsVertical = forwardRef<SVGSVGElement, IconBaseProps>(
  (props, ref) => {
    const { size, title, ...svgProps } = props
    const computedSize = size || '1em'
    return (
      <svg
        ref={ref}
        stroke='currentColor'
        fill='currentColor'
        strokeWidth='0'
        {...svgProps}
        className={props.className}
        style={props.style}
        height={computedSize}
        width={computedSize}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
      >
        {title && <title>{title}</title>}
        <path
          fill='currentColor'
          d='M10 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM14 12c0-1.107-.893-2-2-2s-2 .893-2 2 .893 2 2 2 2-.91 2-2ZM10 20a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxDotsVertical.displayName = 'BxDotsVertical'
}
