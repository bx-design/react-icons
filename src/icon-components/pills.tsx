import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxPills = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M15.293 4.95V2H8.698v2.958C7.451 5.38 6.545 6.532 6.545 7.89v11.011c0 1.715 1.435 3.107 3.204 3.107h4.502c1.769 0 3.204-1.392 3.204-3.107V7.891c0-1.367-.906-2.519-2.162-2.941Zm-7.45 13.646v-1.268h8.305v1.268H7.844Zm0-2.527V9.067h8.305v6.993H7.844v.009Zm2.162-12.81h3.981v1.517h-.59V3.699h-.973v1.077h-.769V3.699h-.982v1.077h-.667V3.259ZM9.75 6.043h4.502c1.025 0 1.854.787 1.897 1.765H7.852c.043-.978.88-1.765 1.897-1.765Zm4.502 14.698H9.75a1.916 1.916 0 0 1-1.615-.878h7.74c-.341.522-.94.878-1.623.878Z'
        />
        <path
          fill='currentColor'
          d='M13.593 10.865v-1.35h-3.246v1.35H8.963v3.149h1.392v1.35h3.247v-1.35h1.392v-3.149h-1.4Zm.419 2.204h-1.393v1.35h-1.29v-1.35H9.937v-1.25h1.392v-1.351h1.29v1.35h1.393v1.251Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxPills.displayName = 'BxPills'
}
