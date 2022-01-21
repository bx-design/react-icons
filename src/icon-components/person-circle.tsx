import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxPersonCircle = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M12 13.122A4.229 4.229 0 0 0 16.223 8.9 4.229 4.229 0 0 0 12 4.677a4.229 4.229 0 0 0-4.223 4.222A4.229 4.229 0 0 0 12 13.122Zm0-7.149A2.93 2.93 0 0 1 14.926 8.9 2.93 2.93 0 0 1 12 11.825 2.93 2.93 0 0 1 9.074 8.9 2.93 2.93 0 0 1 12 5.973Z'
        />
        <path
          fill='currentColor'
          d='M12 2C6.489 2 2 6.489 2 12s4.489 10 10 10 10-4.489 10-10S17.511 2 12 2Zm0 1.297c4.805 0 8.703 3.907 8.703 8.703a8.693 8.693 0 0 1-1.48 4.855c-1.737-1.954-4.463-3.15-7.223-3.15-2.835 0-5.495 1.18-7.207 3.175A8.618 8.618 0 0 1 3.297 12 8.706 8.706 0 0 1 12 3.297Zm0 17.406a8.696 8.696 0 0 1-6.384-2.793c1.463-1.829 3.832-2.918 6.384-2.918 2.477 0 4.921 1.106 6.409 2.893A8.698 8.698 0 0 1 12 20.703Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxPersonCircle.displayName = 'BxPersonCircle'
}
