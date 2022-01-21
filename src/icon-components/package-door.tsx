import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxPackageDoor = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M21.388 20.783H19.77v-5.175c0-.025-.008-.05-.008-.066a.58.58 0 0 0-.092-.403l-1.6-2.436a.632.632 0 0 0-.477-.28V1.984H4.67v18.8H2.61a.622.622 0 0 0-.629.617c0 .337.285.617.629.617h16.256a.802.802 0 0 0 .251-.041.639.639 0 0 0 .218.04h2.035c.344 0 .628-.279.628-.616.017-.346-.26-.617-.611-.617Zm-4.18-7.133.704 1.07h-6.918l.586-1.07h5.629ZM5.929 3.217h10.426v9.207H11.22a.626.626 0 0 0-.553.32l-1.323 2.411c-.016.025-.025.058-.033.083a.922.922 0 0 0-.084.37v5.175h-3.3V3.217Zm12.595 17.566h-8.048v-4.83h8.048v4.83Z'
        />
        <path
          fill='currentColor'
          d='M7.736 10.243c-.57 0-1.022.453-1.022 1.004 0 .551.461 1.004 1.022 1.004.561 0 1.022-.453 1.022-1.004 0-.551-.452-1.004-1.022-1.004ZM13.055 18.816h-1.918v1.317h1.918v-1.317Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxPackageDoor.displayName = 'BxPackageDoor'
}
