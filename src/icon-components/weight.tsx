import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxWeight = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M18.212 9.68c-.04-.633-.55-1.134-1.172-1.134h-1.547V6.641h2.918c.264 0 .503-.181.583-.444l1.052-3.376a.679.679 0 0 0-.087-.566.633.633 0 0 0-.495-.255H4.536c-.2 0-.39.107-.503.28a.611.611 0 0 0-.063.582l1.3 3.384a.623.623 0 0 0 .566.403h2.663v1.897H7.207c-.622 0-1.132.501-1.164 1.125L3.834 20.67l-.016.124c0 .665.526 1.207 1.172 1.207h14.02c.645 0 1.172-.542 1.172-1.207v-.058L18.212 9.68ZM6.258 5.384l-.821-2.12h13.182l-.654 2.12H6.259Zm3.47 1.257h4.545v1.897H9.727V6.641ZM5.07 20.735 7.247 9.877l.016-.066 9.721-.008 1.946 10.932H5.07Z'
        />
        <path
          fill='currentColor'
          d='M12 10.296c-2.703 0-4.904 2.267-4.904 5.051 0 2.784 2.2 5.051 4.904 5.051 2.703 0 4.904-2.267 4.904-5.051 0-2.793-2.2-5.051-4.904-5.051Zm0 8.83c-2.026 0-3.676-1.701-3.676-3.787s1.65-3.787 3.676-3.787c2.025 0 3.676 1.7 3.676 3.787 0 2.094-1.65 3.786-3.676 3.786Z'
        />
        <path
          fill='currentColor'
          d='M12.462 14.961v-1.832a.47.47 0 0 0-.462-.476.47.47 0 0 0-.463.476v1.865a.76.76 0 0 0-.247.567c0 .418.327.755.734.755a.743.743 0 0 0 .733-.755.79.79 0 0 0-.295-.6Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxWeight.displayName = 'BxWeight'
}
