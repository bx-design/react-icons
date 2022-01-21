import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxWarehouse = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M11.967 2 2 7.7V22h20V7.642L11.967 2Zm-4.13 15.029h3.622v3.62H7.837v-3.62Zm8.618 3.62h-3.622v-3.678h3.622v3.678Zm-4.93-4.97H7.837v-3.621h3.697v3.62h-.009Zm9.168 5.028h-2.94v-5.029h-4.929v-4.92H6.53v9.949H3.299V8.454l8.676-4.963 8.718 4.905v12.311Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxWarehouse.displayName = 'BxWarehouse'
}
