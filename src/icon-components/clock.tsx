import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxClock = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M12 3.395a8.605 8.605 0 1 0 0 17.21 8.605 8.605 0 0 0 0-17.21ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z'
          clipRule='evenodd'
        />
        <path
          fill='currentColor'
          d='m16.126 7.636-4.246 4.247-3.222-2.28a.625.625 0 0 0-.875.148.643.643 0 0 0 .148.884l3.66 2.586c.107.074.24.115.364.115a.653.653 0 0 0 .446-.181l4.618-4.618a.628.628 0 0 0 0-.892.628.628 0 0 0-.893-.009Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxClock.displayName = 'BxClock'
}
