import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxShield = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='m14.522 9.077-3.705 3.72-.756-.735a.63.63 0 0 0-.887.017.636.636 0 0 0 .016.89l1.208 1.164a.635.635 0 0 0 .88-.009l4.14-4.157a.629.629 0 0 0 0-.89.633.633 0 0 0-.896 0Z'
        />
        <path
          fill='currentColor'
          d='M20.182 10.776V5.497a.634.634 0 0 0-.632-.635c-4.97 0-6.967-2.507-7.049-2.623l-.024-.025-.017-.016-.074-.074s-.008 0-.008-.009a.613.613 0 0 0-.099-.057c-.008 0-.008-.009-.016-.009a.461.461 0 0 0-.099-.032c-.008 0-.008 0-.016-.009-.033 0-.074-.008-.107-.008h-.131c-.033.008-.074.017-.107.033-.008 0-.008.008-.017.008a.4.4 0 0 0-.09.033c-.008.008-.016.017-.033.025-.016.008-.033.016-.04.025-.01.008-.017.016-.025.016-.009.017-.025.025-.033.041-.017.017-.041.033-.05.05-.008.008-.016.008-.016.016-.082.108-2.07 2.623-7.049 2.623a.627.627 0 0 0-.632.627v5.27c0 .198-.041 4.957 2.473 7.564 3.458 3.57 5.487 3.678 5.709 3.678.222 0 2.25-.107 5.71-3.678 2.513-2.615 2.472-7.366 2.472-7.555Zm-3.376 6.664c-3.015 3.117-4.74 3.29-4.798 3.29-.098-.008-1.815-.197-4.806-3.29-2.152-2.227-2.119-6.615-2.119-6.664v-4.66C8.928 5.959 11.096 4.4 12 3.55c.904.85 3.072 2.416 6.917 2.573v4.668c0 .033.033 4.43-2.111 6.648Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxShield.displayName = 'BxShield'
}
