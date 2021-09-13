import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxPadlock = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M18.14 12.363H8.21V7.148c0-2.128 1.704-3.863 3.793-3.863 2.089 0 3.793 1.735 3.793 3.863v2.578c0 .36.278.643.63.643.353 0 .631-.284.631-.643V7.148C17.058 4.311 14.79 2 12.004 2S6.95 4.311 6.95 7.148v5.215H5.868c-.475 0-.868.4-.868.884v7.869c0 .492.393.884.868.884h12.263c.484 0 .869-.4.869-.884v-7.869a.87.87 0 0 0-.86-.884Zm-.393 8.36H6.262v-7.075h11.485v7.075Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxPadlock.displayName = 'BxPadlock'
}
