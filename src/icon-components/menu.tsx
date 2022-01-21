import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxMenu = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
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
        d='M20.86 8H3.15C2.513 8 2 8.51 2 9.13c0 .62.513 1.12 1.15 1.12h17.7c.636 0 1.15-.5 1.15-1.12C22 8.51 21.497 8 20.86 8ZM20.86 13.81H3.15c-.637 0-1.15.51-1.15 1.13 0 .62.513 1.12 1.15 1.12h17.7c.636 0 1.15-.5 1.15-1.12.01-.62-.503-1.13-1.14-1.13Z'
      />
    </svg>
  )
})

if (__DEV__) {
  BxMenu.displayName = 'BxMenu'
}
