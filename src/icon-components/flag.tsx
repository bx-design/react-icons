import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxFlag = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
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
        d='M20.67 3.76a.662.662 0 0 0-.667-.008c-3.321 1.893-5.544 1.213-8.721-.791C7.977.87 3.583 2.83 3.397 2.909A.69.69 0 0 0 3 3.537V21.32c0 .379.296.68.668.68a.67.67 0 0 0 .667-.68V14.43c1.065-.387 4.048-1.273 6.237.112 3.456 2.185 6.22 3.02 10.082.826a.683.683 0 0 0 .346-.594V4.346a.682.682 0 0 0-.33-.585ZM19.665 14.37c-3.135 1.652-5.316.955-8.383-.981-1.141-.723-2.409-.964-3.592-.964-1.335 0-2.56.302-3.355.56V4.002c1.065-.388 4.048-1.274 6.237.111 3.152 1.996 5.73 2.865 9.084 1.343v8.913h.009Z'
      />
    </svg>
  )
})

if (__DEV__) {
  BxFlag.displayName = 'BxFlag'
}
