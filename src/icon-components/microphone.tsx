import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxMicrophone = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M12.004 14.959c1.905 0 3.454-1.598 3.454-3.562V5.562c0-1.964-1.55-3.562-3.454-3.562C10.1 2 8.55 3.598 8.55 5.562v5.835c0 1.964 1.55 3.562 3.454 3.562ZM9.793 5.562c0-1.257.993-2.28 2.211-2.28 1.219 0 2.211 1.023 2.211 2.28v5.835c0 1.256-.992 2.28-2.21 2.28-1.22 0-2.212-1.024-2.212-2.28V5.562Z'
        />
        <path
          fill='currentColor'
          d='M18 11.322V9.258c0-.35-.274-.641-.621-.641a.632.632 0 0 0-.622.64v2.065c0 2.58-2.114 4.677-4.72 4.677-2.607 0-4.722-2.097-4.722-4.677V9.258c0-.35-.274-.641-.621-.641s-.613.291-.613.64v2.065c0 3.063 2.324 5.593 5.302 5.926v3.471H6.62a.632.632 0 0 0-.621.64c0 .35.274.641.621.641H17.38a.632.632 0 0 0 .621-.64c0-.35-.274-.642-.621-.642h-4.762V17.264c3.018-.3 5.383-2.846 5.383-5.942Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxMicrophone.displayName = 'BxMicrophone'
}
