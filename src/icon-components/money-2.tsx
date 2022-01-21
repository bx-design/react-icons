import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxMoney2 = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M21.122 5.645H2.878A.884.884 0 0 0 2 6.523V17.66c0 .489.398.878.878.878h18.244a.878.878 0 0 0 .878-.878V6.523a.873.873 0 0 0-.878-.878Zm-4.1 11.627H6.937a3.847 3.847 0 0 0-3.66-3.627v-2.882a3.843 3.843 0 0 0 3.668-3.835V6.92h10.07v.008a3.84 3.84 0 0 0 3.719 3.835v2.873a3.856 3.856 0 0 0-3.71 3.636Zm3.71-7.785a2.572 2.572 0 0 1-2.442-2.559V6.92h2.443v2.567ZM5.67 6.92s0 .008 0 0a2.572 2.572 0 0 1-2.394 2.567V6.92H5.67Zm-2.394 8a2.574 2.574 0 0 1 2.385 2.352H3.275V14.92Zm15.023 2.352a2.573 2.573 0 0 1 2.427-2.352v2.352h-2.427Z'
        />
        <path
          fill='currentColor'
          d='M12.004 8.957a3.142 3.142 0 0 0-3.139 3.139 3.142 3.142 0 0 0 3.14 3.139 3.142 3.142 0 0 0 3.138-3.139 3.142 3.142 0 0 0-3.139-3.139Zm0 5.002a1.866 1.866 0 0 1-1.863-1.863c0-1.027.836-1.863 1.863-1.863 1.027 0 1.863.836 1.863 1.863a1.866 1.866 0 0 1-1.863 1.863Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxMoney2.displayName = 'BxMoney2'
}
