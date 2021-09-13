import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxKnobs = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M7.503 13.922V3.82c0-1-.867-1.819-1.925-1.819-1.059 0-1.925.819-1.925 1.819v10.103a2.468 2.468 0 0 0-.744 1.753c0 .678.289 1.298.753 1.753v2.753c0 1 .866 1.819 1.924 1.819 1.06 0 1.925-.819 1.925-1.819v-2.753a2.455 2.455 0 0 0 .753-1.753 2.448 2.448 0 0 0-.761-1.753Zm-1.917 3.01c-.734 0-1.338-.562-1.338-1.265 0-.695.595-1.265 1.338-1.265.735 0 1.34.562 1.34 1.265-.01.703-.605 1.265-1.34 1.265Zm0-13.667c.324 0 .587.248.587.554v9.392a2.705 2.705 0 0 0-.587-.066c-.2 0-.393.025-.586.066V3.82c0-.306.263-.554.586-.554Zm0 17.462c-.323 0-.586-.248-.586-.554V18.13c.184.041.385.066.586.066.202 0 .394-.025.587-.066v2.042a.57.57 0 0 1-.587.554ZM13.934 6.572V3.82c0-1-.867-1.819-1.925-1.819-1.059 0-1.925.819-1.925 1.819v2.753a2.455 2.455 0 0 0-.753 1.753c0 .678.289 1.298.753 1.753V20.18c0 1 .866 1.819 1.925 1.819 1.058 0 1.925-.819 1.925-1.819V10.078a2.455 2.455 0 0 0 .752-1.753c0-.678-.289-1.298-.752-1.753ZM12.009 9.59c-.735 0-1.339-.562-1.339-1.265 0-.695.595-1.265 1.339-1.265.743 0 1.338.562 1.338 1.265 0 .694-.603 1.265-1.338 1.265Zm0-6.325c.323 0 .586.248.586.554V5.86a2.622 2.622 0 0 0-1.164 0V3.82c0-.306.263-.554.578-.554Zm0 17.462c-.324 0-.587-.248-.587-.554v-9.384c.184.041.385.066.587.066.2 0 .393-.025.586-.066v9.392c0 .306-.263.546-.586.546ZM21.09 12.633c0-.678-.288-1.299-.752-1.753V3.819c0-1-.866-1.819-1.925-1.819-1.058 0-1.924.819-1.924 1.819v7.06a2.455 2.455 0 0 0-.753 1.754c0 .678.289 1.298.753 1.752v5.796c0 1 .866 1.819 1.924 1.819 1.06 0 1.925-.819 1.925-1.819v-5.796a2.455 2.455 0 0 0 .753-1.752Zm-4.006 0c0-.695.595-1.265 1.338-1.265.735 0 1.339.562 1.339 1.264 0 .695-.595 1.266-1.339 1.266-.743-.009-1.338-.571-1.338-1.265Zm1.33-9.368c.323 0 .586.248.586.554v6.35a2.7 2.7 0 0 0-.587-.067c-.2 0-.393.025-.586.067v-6.35a.582.582 0 0 1 .586-.554Zm0 17.462c-.324 0-.587-.248-.587-.554v-5.085c.184.041.385.066.586.066.202 0 .394-.025.587-.066v5.085c0 .314-.263.554-.587.554Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxKnobs.displayName = 'BxKnobs'
}
