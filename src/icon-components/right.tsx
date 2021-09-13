import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxRight = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M2.97 12.94h15.693l-2.449 2.474a.92.92 0 0 0 .025 1.325.997.997 0 0 0 1.37-.024l4.12-4.146a.917.917 0 0 0-.016-1.318L17.6 7.275A.971.971 0 0 0 16.916 7a.971.971 0 0 0-.685.275.92.92 0 0 0 0 1.325l2.532 2.457H2.969c-.534 0-.969.42-.969.938 0 .517.435.946.97.946Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxRight.displayName = 'BxRight'
}
