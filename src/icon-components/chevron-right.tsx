import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxChevronRight = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M6.34 2.3c-.453.41-.453 1.058 0 1.468l8.915 8.065-8.927 8.422a.951.951 0 0 0 .036 1.457c.465.39 1.181.39 1.611-.032l9.703-9.145a.998.998 0 0 0 .322-.723c0-.27-.107-.53-.334-.734L7.963 2.3c-.453-.4-1.17-.4-1.623 0Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxChevronRight.displayName = 'BxChevronRight'
}
