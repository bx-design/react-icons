import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxFileRemove = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M5.899 6.652h8.94a.629.629 0 1 0 0-1.258H5.9a.629.629 0 0 0-.63.63.619.619 0 0 0 .63.628ZM5.9 17.298a.629.629 0 1 0 0 1.258h8.94a.629.629 0 1 0 0-1.258H5.9Z'
        />
        <path
          fill='currentColor'
          d='m21.793 9.649-2.442-2.583a.626.626 0 0 0-.455-.198h-.133V3.54c0-.853-.695-1.54-1.54-1.54H3.54C2.695 2 2 2.695 2 3.54v16.92c0 .853.695 1.54 1.54 1.54h13.675c.853 0 1.54-.695 1.54-1.54V16.96h.199a.64.64 0 0 0 .471-.207l2.376-2.658a.649.649 0 0 0 .158-.422V10.08a.599.599 0 0 0-.166-.43ZM17.497 20.46a.28.28 0 0 1-.282.282H3.54a.28.28 0 0 1-.282-.282V3.54a.28.28 0 0 1 .282-.282h13.675a.28.28 0 0 1 .282.282v3.328H15.12a.594.594 0 0 0-.43.173L12.29 9.326H5.899a.629.629 0 1 0 0 1.258h5.87v2.666h-5.87a.629.629 0 1 0 0 1.258h6.258a.481.481 0 0 0 .158-.025L14.5 16.76c.116.124.281.19.455.19h2.55v3.51h-.008Zm3.203-7.028L18.672 15.7h-3.46l-2.185-2.284v-3.063l2.342-2.227h3.245l2.086 2.202v3.104Z'
        />
        <path
          fill='currentColor'
          d='m16.992 11.023-1.3-1.3a.63.63 0 0 0-.894 0 .63.63 0 0 0 0 .894l1.3 1.3-1.3 1.3a.63.63 0 0 0 .447 1.076.619.619 0 0 0 .447-.182l1.3-1.3 1.3 1.3a.619.619 0 0 0 .446.182.63.63 0 0 0 .447-1.076l-1.3-1.3 1.3-1.3a.63.63 0 0 0 0-.894.63.63 0 0 0-.894 0l-1.3 1.3Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxFileRemove.displayName = 'BxFileRemove'
}
