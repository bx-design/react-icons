import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxLogOut = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M21.37 12.51a.9.9 0 0 0 .25-.63c0-.23-.09-.47-.27-.64L16.6 6.49a.924.924 0 0 0-1.29 0c-.35.35-.35.93 0 1.29l3.3 3.3H6.46c-.5 0-.91.41-.91.91s.41.91.91.91h12.02l-3.18 3.31c-.35.36-.34.94.03 1.28.36.35.94.34 1.28-.03l4.76-4.95Z'
        />
        <path
          fill='currentColor'
          d='M9.13 21.06c0-.5-.41-.91-.91-.91h-4.4V3.82h4.14c.5 0 .91-.41.91-.91S8.46 2 7.96 2H2.91c-.5 0-.91.41-.91.91v18.15c0 .5.41.91.91.91h5.31c.5 0 .91-.41.91-.91Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxLogOut.displayName = 'BxLogOut'
}
