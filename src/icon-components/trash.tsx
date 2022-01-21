import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxTrash = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M21.319 5.028h-5.444V2.644c0-.355-.306-.644-.681-.644H8.797a.656.656 0 0 0-.673.644v2.384H2.682c-.376 0-.682.28-.682.635s.306.644.682.644h1.45V18.69C4.132 20.515 5.705 22 7.636 22h8.728c1.931 0 3.504-1.485 3.504-3.309V6.307h1.45c.376 0 .682-.289.682-.644 0-.354-.306-.635-.681-.635Zm-11.84-1.75h5.05v1.75H9.48v-1.75Zm9.035 15.413c0 1.123-.97 2.03-2.15 2.03H7.636c-1.189 0-2.15-.916-2.15-2.03V6.307H18.514V18.69Z'
        />
        <path
          fill='currentColor'
          d='M8.798 7.38c-.376 0-.682.288-.682.643V18.84c0 .355.306.643.682.643.375 0 .681-.288.681-.643V8.015c0-.355-.306-.635-.681-.635ZM14.52 8.015v10.817c0 .354.307.643.682.643.376 0 .682-.289.682-.643V8.015c0-.355-.306-.644-.682-.644-.375.009-.681.29-.681.644ZM11.996 7.38c-.376 0-.682.288-.682.643V18.84c0 .355.306.643.682.643.375 0 .681-.288.681-.643V8.015c0-.355-.306-.635-.681-.635Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxTrash.displayName = 'BxTrash'
}
