import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxFolder = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M21.26 6.564a2.096 2.096 0 0 0-1.31-.45h-7.504l-.721-1.74A2.214 2.214 0 0 0 9.662 3H4.228C3.002 3 2 3.99 2 5.199V18.94C2 20.076 2.936 21 4.087 21h13.27c.862 0 1.608-.572 1.815-1.398L21.93 8.665c.208-.785-.058-1.619-.67-2.101ZM4.227 4.251h5.434c.39 0 .746.229.895.588l.522 1.267H4.087c-.29 0-.563.057-.82.164V5.199c0-.523.431-.948.961-.948Zm16.477 4.12-2.759 10.937a.603.603 0 0 1-.588.45H4.088a.817.817 0 0 1-.82-.81V8.174c0-.441.364-.809.82-.809h15.871c.19 0 .364.057.514.18.215.172.314.507.232.826Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxFolder.displayName = 'BxFolder'
}
