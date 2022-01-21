import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxCirclePlus = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M12.06 2.11c-5.487 0-9.95 4.463-9.95 9.95 0 5.485 4.463 9.94 9.95 9.94 5.485 0 9.94-4.463 9.94-9.94 0-5.479-4.463-9.95-9.94-9.95Zm0 18.636c-4.794 0-8.688-3.894-8.688-8.687 0-4.793 3.894-8.687 8.687-8.687 4.793 0 8.687 3.894 8.687 8.687 0 4.785-3.902 8.687-8.687 8.687Z'
        />
        <path
          fill='currentColor'
          d='M16.877 11.424h-4.19v-4.19a.627.627 0 1 0-1.255 0v4.19H7.233a.627.627 0 1 0 0 1.254h4.19v4.19a.627.627 0 1 0 1.255 0v-4.19h4.19c.347 0 .628-.28.628-.627a.615.615 0 0 0-.62-.627Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxCirclePlus.displayName = 'BxCirclePlus'
}
