import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxBack = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
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
        d='M13.386 5.59H5l2.2-2.186a.807.807 0 0 0-.027-1.177.907.907 0 0 0-1.228.025L2.244 5.918a.801.801 0 0 0 .009 1.16l3.693 3.514a.908.908 0 0 0 1.237 0 .8.8 0 0 0 0-1.177l-2.27-2.16h8.481c3.79 0 6.874 2.933 6.874 6.54 0 3.606-3.083 6.54-6.874 6.54h-3.092c-.486 0-.875.37-.875.833 0 .462.389.832.875.832h3.084C18.139 22 22 18.318 22 13.803c.009-4.53-3.861-8.213-8.614-8.213Z'
      />
    </svg>
  )
})

if (__DEV__) {
  BxBack.displayName = 'BxBack'
}
