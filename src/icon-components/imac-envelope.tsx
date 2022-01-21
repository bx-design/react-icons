import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxImacEnvelope = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M19.852 2H4.148C2.967 2 2 2.984 2 4.187v11.169c0 1.202.967 2.187 2.148 2.187H8.88v3.128H6.692V22h10.616v-1.329h-1.95v-3.128h4.494c1.181 0 2.148-.985 2.148-2.187V4.186C22 2.985 21.034 2 19.852 2ZM4.148 3.329h15.704c.463 0 .843.387.843.858v9.461H3.305V4.187c0-.471.38-.858.843-.858Zm9.905 17.342h-3.866v-3.128h3.866v3.128Zm5.8-4.457H4.147a.854.854 0 0 1-.843-.858v-.379h17.39v.379c0 .47-.38.858-.843.858Z'
        />
        <path
          fill='currentColor'
          d='M7.568 12.664h8.864c.57 0 1.041-.47 1.041-1.06V5.39c0-.58-.463-1.06-1.04-1.06H7.567c-.57 0-1.04.472-1.04 1.06v6.216c0 .58.462 1.06 1.04 1.06Zm.264-1.328V6.592l4.164 2.691 4.164-2.69v4.734H7.832v.009Zm.983-5.677h6.361l-3.18 2.052-3.18-2.052Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxImacEnvelope.displayName = 'BxImacEnvelope'
}
