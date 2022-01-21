import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxPerson = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M12.004 11.975c2.848 0 5.167-2.239 5.167-4.987 0-2.749-2.32-4.988-5.167-4.988S6.837 4.239 6.837 6.988c0 2.748 2.311 4.987 5.167 4.987Zm0-8.688c2.112 0 3.834 1.662 3.834 3.7 0 2.04-1.722 3.702-3.834 3.702-2.111 0-3.842-1.663-3.842-3.701 0-2.039 1.722-3.701 3.842-3.701ZM12.004 12.744C6.483 12.744 2 16.612 2 21.366v.643h20v-.643c0-4.754-4.483-8.622-9.996-8.622Zm-8.646 7.979c.39-3.743 4.111-6.692 8.638-6.692 4.526 0 8.248 2.949 8.637 6.692H3.358Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxPerson.displayName = 'BxPerson'
}
