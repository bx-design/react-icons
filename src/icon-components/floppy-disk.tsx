import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxFloppyDisk = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='m20.854 6.457-3.029-3.2A4.017 4.017 0 0 0 14.922 2H4.524C3.136 2 2 3.343 2 4.99v14.02C2 20.656 3.136 22 4.524 22h14.952C20.874 22 22 20.657 22 19.01V9.38a4.223 4.223 0 0 0-1.146-2.923Zm-5.359-2.886v6.867H7.272V3.505h7.65c.194 0 .389.028.573.066Zm4.98 15.438c0 .791-.465 1.486-1 1.486H4.526c-.535 0-1-.695-1-1.486V4.99c0-.79.465-1.485 1-1.485h1.213v7.047c0 .772.621 1.4 1.388 1.4h8.524c.767 0 1.389-.628 1.389-1.4V4.63l2.699 2.847c.475.505.747 1.2.747 1.905v9.628h-.01Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxFloppyDisk.displayName = 'BxFloppyDisk'
}
