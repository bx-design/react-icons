import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxBuilding = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M18.047 2H5.953c-.671 0-1.226.527-1.226 1.164v17.671c0 .646.555 1.165 1.226 1.165H18.047c.68 0 1.226-.527 1.226-1.165V3.165c0-.638-.546-1.165-1.226-1.165ZM9.764 20.759v-3.4h1.52v3.4h-1.52Zm2.818 0v-3.4h1.592v3.4h-1.592Zm5.394 0H15.48v-3.672c0-.535-.456-.969-1.02-.969H9.477c-.563 0-1.02.434-1.02.97v3.671H6.025V3.232h11.943V20.76h.009Z'
        />
        <path
          fill='currentColor'
          d='M9.361 5.323H7.384v1.692h1.977V5.323ZM12.957 5.323H10.98v1.692h1.977V5.323ZM16.553 5.323h-1.977v1.692h1.977V5.323ZM9.361 8.621H7.384v1.692h1.977V8.62ZM12.957 8.621H10.98v1.692h1.977V8.62ZM16.553 8.621h-1.977v1.692h1.977V8.62ZM9.361 12.08H7.384v1.692h1.977v-1.691ZM12.957 12.08H10.98v1.692h1.977v-1.691ZM16.553 12.08h-1.977v1.692h1.977v-1.691Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxBuilding.displayName = 'BxBuilding'
}
