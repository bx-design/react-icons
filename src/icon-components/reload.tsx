import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxReload = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M13.395 3C8.767 3 4.98 6.62 4.78 11.135L3.083 9.534a.642.642 0 0 0-.907.016.636.636 0 0 0 .017.895l2.83 2.676a.635.635 0 0 0 .89-.016l2.713-2.676a.628.628 0 0 0 0-.895.65.65 0 0 0-.907 0l-1.665 1.642c.175-3.842 3.396-6.92 7.332-6.92 4.045 0 7.34 3.25 7.34 7.24s-3.295 7.24-7.34 7.24a7.431 7.431 0 0 1-4.128-1.248.647.647 0 0 0-.89.164.627.627 0 0 0 .166.879A8.658 8.658 0 0 0 13.378 20C18.13 20 22 16.183 22 11.496 22 6.809 18.147 3 13.395 3Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxReload.displayName = 'BxReload'
}
