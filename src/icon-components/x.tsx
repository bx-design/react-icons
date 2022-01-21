import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxX = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
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
        d='m14.187 12.003 7.343-7.345a1.55 1.55 0 0 0 0-2.2 1.548 1.548 0 0 0-2.2 0l-7.342 7.345-7.33-7.345a1.548 1.548 0 0 0-2.2 0 1.55 1.55 0 0 0 0 2.2l7.343 7.345-7.343 7.345a1.55 1.55 0 0 0 0 2.2c.306.305.697.452 1.1.452.403 0 .794-.147 1.1-.452L12 14.203l7.343 7.345c.305.305.696.452 1.1.452.402 0 .793-.147 1.099-.452a1.55 1.55 0 0 0 0-2.2l-7.355-7.345Z'
      />
    </svg>
  )
})

if (__DEV__) {
  BxX.displayName = 'BxX'
}
