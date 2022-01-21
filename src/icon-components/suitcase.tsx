import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxSuitcase = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M19.569 6.415h-3.23v-.892c0-.836-.7-1.523-1.558-1.523h-5.72c-.858 0-1.557.687-1.557 1.523v.892H4.43c-1.34 0-2.431.94-2.431 2.1v9.377C2 19.052 3.09 20 4.431 20H19.57c1.34 0 2.431-.947 2.431-2.108V8.515c0-1.16-1.09-2.1-2.431-2.1ZM8.786 5.523c0-.165.125-.3.266-.3h5.729c.15 0 .266.135.266.3v.892H8.787v-.892ZM4.431 7.631H19.57c.633 0 1.14.395 1.14.884v.916l-6.985 2.557a1.076 1.076 0 0 0-.941-.544h-1.566c-.374 0-.7.181-.89.457L3.29 9.471v-.956c0-.481.508-.884 1.14-.884Zm8.135 5.044v1.066h-1.124v-1.066h1.124Zm7.003 6.101H4.43c-.632 0-1.14-.394-1.14-.884v-7.12l6.86 2.377v.797c0 .56.483 1.01 1.066 1.01h1.566c.59 0 1.066-.458 1.066-1.01v-.695l6.86-2.51v7.144c0 .497-.508.891-1.14.891Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxSuitcase.displayName = 'BxSuitcase'
}
