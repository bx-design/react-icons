import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxPlus = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
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
        d='M20.869 10.854h-7.697V3.151c0-.633-.519-1.151-1.162-1.151-.643 0-1.151.518-1.151 1.15v7.694H3.15A1.17 1.17 0 0 0 2 12.005c0 .643.519 1.151 1.151 1.151h7.697v7.693c0 .643.519 1.151 1.152 1.151.633 0 1.151-.518 1.151-1.15v-7.694h7.697c.643 0 1.151-.518 1.151-1.15a1.125 1.125 0 0 0-1.13-1.152Z'
      />
    </svg>
  )
})

if (__DEV__) {
  BxPlus.displayName = 'BxPlus'
}
