import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxChevronUp = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M2.3 17.66c.41.453 1.058.453 1.468 0l8.065-8.915 8.422 8.927a.951.951 0 0 0 1.457-.036c.39-.465.39-1.181-.032-1.611l-9.145-9.703A.998.998 0 0 0 11.812 6c-.27 0-.53.107-.734.334L2.3 16.037c-.4.453-.4 1.17 0 1.623Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxChevronUp.displayName = 'BxChevronUp'
}
