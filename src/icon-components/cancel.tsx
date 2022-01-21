import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxCancel = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='m21.818 7.674-5.097-5.456A.667.667 0 0 0 16.224 2H8.355a.675.675 0 0 0-.463.184L2.207 7.64A.701.701 0 0 0 2 8.134v7.573c0 .176.066.343.19.469l5.321 5.615c.124.134.306.209.488.209h8.383c.19 0 .372-.084.504-.226l4.957-5.615a.698.698 0 0 0 .174-.452V8.134a.798.798 0 0 0-.199-.46Zm-1.167 7.774-4.584 5.196H8.281L3.349 15.44V8.427l5.279-5.071h7.307l4.716 5.046v7.046Z'
        />
        <path
          fill='currentColor'
          d='m15.439 7.824-3.178 3.214-3.169-3.214a.664.664 0 0 0-.951 0 .682.682 0 0 0 0 .963L11.318 12l-3.177 3.213a.682.682 0 0 0 .48 1.164.673.673 0 0 0 .48-.201l3.177-3.214 3.178 3.214a.673.673 0 0 0 .96 0 .682.682 0 0 0 0-.963L13.237 12l3.177-3.213a.682.682 0 0 0 0-.963.71.71 0 0 0-.976 0Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxCancel.displayName = 'BxCancel'
}
