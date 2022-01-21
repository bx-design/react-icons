import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxLeft = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
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
        d='M21.03 11.06H5.338l2.449-2.474a.92.92 0 0 0-.025-1.325.997.997 0 0 0-1.37.024l-4.12 4.146a.917.917 0 0 0 .016 1.318L6.4 16.725a.971.971 0 0 0 .685.275c.25 0 .493-.089.685-.275a.92.92 0 0 0 0-1.325l-2.532-2.457h15.794c.535 0 .969-.42.969-.938a.961.961 0 0 0-.97-.946Z'
      />
    </svg>
  )
})

if (__DEV__) {
  BxLeft.displayName = 'BxLeft'
}
