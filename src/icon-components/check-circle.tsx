import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxCheckCircle = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M10.235 16.264c-.2 0-.41-.073-.564-.228l-3.227-3.09a.818.818 0 0 1-.018-1.155.818.818 0 0 1 1.154-.027l2.646 2.545 10.49-10.49a.818.818 0 0 1 1.155 1.154L10.817 16.027a.81.81 0 0 1-.582.237Z'
        />
        <path
          fill='currentColor'
          d='M12.014 22h-.228c-5.519-.128-9.897-4.714-9.778-10.222A9.949 9.949 0 0 1 5.1 4.775a9.896 9.896 0 0 1 7.133-2.772c1.943.046 3.813.647 5.418 1.742a.82.82 0 1 1-.93 1.35 8.327 8.327 0 0 0-4.524-1.45A8.294 8.294 0 0 0 6.23 5.96a8.277 8.277 0 0 0-2.582 5.855c-.1 4.604 3.567 8.443 8.174 8.544 4.606.1 8.446-3.566 8.547-8.17a8.508 8.508 0 0 0-.447-2.91.821.821 0 0 1 .502-1.039.819.819 0 0 1 1.04.51 9.962 9.962 0 0 1 .538 3.475C21.884 17.66 17.422 22 12.014 22Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxCheckCircle.displayName = 'BxCheckCircle'
}
