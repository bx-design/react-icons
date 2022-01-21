import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxPackageSchedule = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M4.804 16.707a.718.718 0 0 0-.723.71c0 .39.324.709.723.709h2.33a.718.718 0 0 0 .723-.71.718.718 0 0 0-.724-.709H4.804ZM14.556 13.305h-1.494v1.356h1.494v-1.356ZM14.556 15.443h-1.494v1.355h1.494v-1.355ZM17.386 13.305h-1.494v1.356h1.494v-1.356ZM17.386 15.443h-1.494v1.355h1.494v-1.355ZM20.235 13.305H18.74v1.356h1.494v-1.356ZM20.235 15.443H18.74v1.355h1.494v-1.355Z'
        />
        <path
          fill='currentColor'
          d='M21.163 8.376h-.854V7.348h-1.447v1.028h-4.445V7.348H12.97v1.028h-.854c-1.011 0-1.837.81-1.837 1.8v7.122c0 .992.826 1.801 1.837 1.801h7.117v.5H2.447V3.42h5.03v2.774h6.717V3.419h5.03v1.946c0 .391.324.71.723.71a.718.718 0 0 0 .724-.71V3.073c0-.59-.464-1.073-1.04-1.073H2.04C1.464 2 1 2.482 1 3.073v16.854C1 20.518 1.464 21 2.04 21h17.61c.566 0 1.04-.482 1.04-1.073v-.846h.473c1.011 0 1.837-.81 1.837-1.801v-7.113c0-.99-.826-1.791-1.837-1.791Zm-8.407-3.602H8.933V3.419h3.823v1.355Zm-.64 5.02h.854v.564h1.447v-.563h4.445v.563h1.447v-.563h.854c.213 0 .39.172.39.382v.991h-9.817v-1c0-.21.167-.373.38-.373Zm9.047 7.877h-9.038a.388.388 0 0 1-.39-.382v-4.711h9.817v4.711c0 .21-.176.382-.39.382Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxPackageSchedule.displayName = 'BxPackageSchedule'
}
