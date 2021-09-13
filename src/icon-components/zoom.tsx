import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxZoom = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
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
        d='m21.813 20.9-5.71-5.742a7.92 7.92 0 0 0 1.923-5.175C18.017 5.583 14.423 2 10.009 2S2 5.583 2 9.983c0 4.4 3.595 7.984 8.009 7.984 1.964 0 3.77-.709 5.166-1.892l5.71 5.733a.654.654 0 0 0 .46.192.654.654 0 0 0 .46-.192c.259-.241.259-.65.008-.908ZM3.304 9.983C3.304 6.3 6.314 3.3 10.01 3.3c3.695 0 6.704 3 6.704 6.683 0 3.684-3.01 6.684-6.704 6.684-3.695 0-6.705-3-6.705-6.684Z'
      />
    </svg>
  )
})

if (__DEV__) {
  BxZoom.displayName = 'BxZoom'
}
