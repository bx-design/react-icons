import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxPackageCheck = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M20.949 13.601a.626.626 0 0 0-.712-.52.617.617 0 0 0-.532.697c.024.184.04.376.032.56-.04 1.842-1.588 3.315-3.462 3.315h-.082c-1.907-.04-3.43-1.593-3.389-3.467a3.366 3.366 0 0 1 1.073-2.378 3.462 3.462 0 0 1 2.472-.937 3.41 3.41 0 0 1 1.514.376c.31.16.687.04.843-.264a.604.604 0 0 0-.27-.825 4.698 4.698 0 0 0-2.063-.512h-.106c-1.22 0-2.374.448-3.258 1.281a4.534 4.534 0 0 0-1.457 3.235c-.057 2.546 2.005 4.66 4.608 4.716h.107c.892 0 1.735-.248 2.447-.68v1.577H3.252V7.605h5.001l-.008 2.537h5.132V7.604h5.345v1.41c0 .336.279.616.63.616.344 0 .63-.272.63-.617V7.268a.797.797 0 0 0-.138-.457.246.246 0 0 0-.041-.056c-.008-.008-.008-.016-.017-.024l-2.824-3.499A.61.61 0 0 0 16.48 3H5.078a.63.63 0 0 0-.516.272l-2.39 3.443a.572.572 0 0 0-.074.16.8.8 0 0 0-.098.393V20.11c0 .489.41.889.909.889h16.157c.5 0 .909-.4.909-.889v-3.003c.614-.76.99-1.705 1.015-2.746a4.694 4.694 0 0 0-.041-.76Zm-8.824-4.684H9.498V7.604h2.627v1.313ZM9.588 6.38l.319-2.154h1.678l.434 2.154H9.588Zm8.324 0h-4.633l-.425-2.154h3.323l1.735 2.154ZM5.413 4.225h3.225L8.32 6.38H3.924l1.49-2.154Z'
        />
        <path
          fill='currentColor'
          d='M21.612 9.822a.632.632 0 0 0-.884 0l-4.51 4.412-.999-.937a.64.64 0 0 0-.884.016.607.607 0 0 0 .016.865l1.441 1.353a.642.642 0 0 0 .876-.008l4.944-4.836a.6.6 0 0 0 0-.865ZM7.582 17.133H4.521v1.225h3.061v-1.226Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxPackageCheck.displayName = 'BxPackageCheck'
}
