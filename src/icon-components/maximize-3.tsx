import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxMaximize3 = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M9.658 17.864 5.692 13.26h12.61l-3.966 4.604a1.347 1.347 0 0 0-.312.883c0 .32.1.638.312.884.424.492 1.11.492 1.534 0l5.812-6.733c.424-.493.424-1.289 0-1.781L15.87 4.369c-.424-.492-1.11-.492-1.534 0-.425.493-.425 1.289 0 1.781l3.966 4.605H5.704L9.658 6.15c.424-.492.424-1.288 0-1.78-.424-.493-1.11-.493-1.534 0l-5.812 6.747A1.347 1.347 0 0 0 2 12c0 .319.1.637.312.883l5.812 6.748c.424.492 1.11.492 1.534 0 .424-.478.424-1.274 0-1.767Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxMaximize3.displayName = 'BxMaximize3'
}
