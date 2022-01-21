import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxDown = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
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
        d='M11.06 2.97v15.693l-2.474-2.449a.92.92 0 0 0-1.325.025.997.997 0 0 0 .024 1.37l4.146 4.12a.917.917 0 0 0 1.318-.016l3.976-4.112a.971.971 0 0 0 .275-.685.971.971 0 0 0-.275-.685.92.92 0 0 0-1.325 0l-2.457 2.532V2.969c0-.534-.42-.969-.938-.969a.961.961 0 0 0-.946.97Z'
      />
    </svg>
  )
})

if (__DEV__) {
  BxDown.displayName = 'BxDown'
}
