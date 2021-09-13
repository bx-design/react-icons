import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxChronometer = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M14.549 4.67V3.266h.504A.634.634 0 1 0 15.062 2H8.947a.634.634 0 0 0-.64.628c0 .348.286.629.64.629h.597v1.389C5.776 5.696 3 9.11 3 13.153 3 18.031 7.037 22 12 22s9-3.969 9-8.847c.008-4.01-2.725-7.4-6.451-8.482ZM10.83 3.266h2.43v1.133a9.06 9.06 0 0 0-2.43-.017V3.265ZM12 20.743c-4.256 0-7.721-3.406-7.721-7.59 0-4.183 3.465-7.59 7.721-7.59s7.721 3.407 7.721 7.59c0 4.184-3.465 7.59-7.721 7.59Z'
        />
        <path
          fill='currentColor'
          d='M12.648 12.914V9.557a.634.634 0 0 0-.64-.629.634.634 0 0 0-.639.629v3.596a.61.61 0 0 0 .168.422l3.012 3.274a.648.648 0 0 0 .908.041.622.622 0 0 0 .042-.893l-2.851-3.083Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxChronometer.displayName = 'BxChronometer'
}
