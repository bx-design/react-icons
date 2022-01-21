import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxClock2 = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M12 2C6.484 2 2 6.484 2 12s4.484 10 10 10 10-4.484 10-10S17.508 2 12 2Zm0 18.735c-4.817 0-8.735-3.918-8.735-8.735 0-4.817 3.918-8.735 8.735-8.735 4.817 0 8.735 3.918 8.735 8.735 0 4.817-3.918 8.735-8.735 8.735Z'
        />
        <path
          fill='currentColor'
          d='M12.632 11.759v-3.86a.632.632 0 1 0-1.264 0V12a.62.62 0 0 0 .166.424l3.378 3.727a.621.621 0 0 0 .89.042.623.623 0 0 0 .042-.89l-3.212-3.544ZM12 4.829a.596.596 0 0 0 .599-.6.596.596 0 0 0-.599-.598.596.596 0 0 0-.599.599c0 .332.266.599.599.599ZM12 19.03a.596.596 0 0 0-.599.599c0 .333.266.599.599.599a.597.597 0 0 0 .599-.599.596.596 0 0 0-.599-.599ZM19.695 11.334a.597.597 0 0 0-.599.6c0 .332.267.598.6.598a.596.596 0 0 0 .598-.599.597.597 0 0 0-.599-.599ZM4.296 11.334a.597.597 0 0 0-.599.6c0 .332.266.598.6.598a.597.597 0 0 0 .598-.599.597.597 0 0 0-.599-.599ZM16.542 17.308a.61.61 0 0 0 .017.848.61.61 0 0 0 .849-.016c.233-.233.216-.616-.017-.849a.595.595 0 0 0-.849.017ZM6.55 7.715a.61.61 0 0 0-.016-.848.603.603 0 0 0-.848.017.595.595 0 0 0 .016.848.595.595 0 0 0 .849-.017ZM16.975 6.251a.603.603 0 0 0-.008.849.603.603 0 0 0 .848.008.603.603 0 0 0 .009-.848.61.61 0 0 0-.849-.009ZM6.185 16.75a.585.585 0 0 0-.009.84.603.603 0 0 0 .849.009.603.603 0 0 0 .008-.849.603.603 0 0 0-.848 0Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxClock2.displayName = 'BxClock2'
}
