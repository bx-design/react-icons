import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxInfo = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
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
        d='M12 3.395a8.605 8.605 0 1 0 0 17.21 8.605 8.605 0 0 0 0-17.21ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z'
        clipRule='evenodd'
      />
      <path
        fill='currentColor'
        d='M13.496 9.188h-2.398l-1.203 5.48s-.57 2.44 1.203 2.777c2.06.396 2.398-1.747 2.398-1.747s-1.327.445-1.22-.783c.107-1.227 1.22-5.727 1.22-5.727ZM12.68 5.636c-.725 0-1.31.585-1.31 1.31 0 .726.585 1.31 1.31 1.31.725 0 1.31-.584 1.31-1.31 0-.725-.593-1.31-1.31-1.31Z'
      />
    </svg>
  )
})

if (__DEV__) {
  BxInfo.displayName = 'BxInfo'
}
