import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxDashboard2 = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M9.497 2H4.108c-1.156 0-2.095.94-2.095 2.096v7.46c0 1.147.94 2.087 2.095 2.087h5.39c1.155 0 2.095-.94 2.095-2.096V4.096A2.108 2.108 0 0 0 9.497 2Zm.816 9.556a.825.825 0 0 1-.824.823H4.11a.825.825 0 0 1-.824-.823v-7.46c0-.45.366-.824.823-.824h5.39c.449 0 .823.366.823.824v7.46h-.008ZM9.497 14.475H4.108c-1.156 0-2.095.94-2.095 2.087v3.094c0 1.156.94 2.096 2.095 2.096h5.39c1.155 0 2.095-.94 2.095-2.096v-3.094a2.107 2.107 0 0 0-2.096-2.087Zm.816 5.19c0 .448-.366.823-.824.823H4.11a.825.825 0 0 1-.824-.824V16.57c0-.449.366-.823.823-.823h5.39c.449 0 .823.366.823.823v3.094h-.008ZM19.926 2h-5.389c-1.156 0-2.096.94-2.096 2.096v2.827c0 1.156.94 2.096 2.096 2.096h5.39c1.155 0 2.095-.94 2.095-2.096V4.096c0-1.156-.94-2.096-2.096-2.096Zm.824 4.923c0 .45-.366.824-.824.824h-5.389a.825.825 0 0 1-.823-.824V4.096c0-.45.366-.824.823-.824h5.39c.448 0 .823.366.823.824v2.827ZM19.926 9.842h-5.389c-1.156 0-2.096.94-2.096 2.096v7.726c0 1.156.94 2.096 2.096 2.096h5.39c1.155 0 2.095-.94 2.095-2.096v-7.726c0-1.156-.94-2.096-2.096-2.096Zm.824 9.822a.825.825 0 0 1-.824.824h-5.389a.825.825 0 0 1-.823-.824v-7.726c0-.449.366-.823.823-.823h5.39c.448 0 .823.366.823.823v7.726Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxDashboard2.displayName = 'BxDashboard2'
}
