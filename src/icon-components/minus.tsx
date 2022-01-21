import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxMinus = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M20.85 13H3.15C2.512 13 2 12.548 2 11.996c0-.553.512-.996 1.15-.996h17.7c.638 0 1.15.444 1.15.996S21.488 13 20.85 13Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxMinus.displayName = 'BxMinus'
}
