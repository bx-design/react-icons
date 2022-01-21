import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxPackage = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='m21.841 7.209.009-.008-3.402-4.238H5.051L2.185 7.176h.008a.865.865 0 0 0-.184.54V21.13c0 .5.41.907.911.907h18.17c.5 0 .91-.408.91-.907V7.717a.96.96 0 0 0-.159-.508Zm-1.922-.4h-5.407L14.01 4.22h3.836l2.073 2.59Zm-9.653 1.266h3.076v3.98h-3.076v-3.98Zm.084-1.266.376-2.589h1.989l.51 2.59H10.35ZM5.728 4.22h3.72L9.07 6.81H3.965l1.763-2.59ZM20.73 20.78H3.27V8.075h5.733l-.008 5.237h5.608V8.075h6.117V20.78h.009Z'
        />
        <path
          fill='currentColor'
          d='M9.974 15.518H5.277v1.257h4.697v-1.257ZM9.974 17.766H5.277v1.257h4.697v-1.257Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxPackage.displayName = 'BxPackage'
}
