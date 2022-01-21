import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxChevronDown = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M21.7 6.34c-.41-.453-1.058-.453-1.468 0l-8.065 8.915-8.422-8.927a.951.951 0 0 0-1.457.036c-.39.465-.39 1.181.032 1.611l9.145 9.703a.998.998 0 0 0 .723.322c.27 0 .53-.107.734-.334L21.7 7.963c.4-.453.4-1.17 0-1.623Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxChevronDown.displayName = 'BxChevronDown'
}
