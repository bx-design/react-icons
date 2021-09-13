import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxImac = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
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
        d='M19.856 3H4.144C2.96 3 2 3.947 2 5.117v9.433c0 1.17.96 2.117 2.144 2.117h4.74v3.04H6.689V21h10.622v-1.293h-1.953v-3.032h4.498c1.184 0 2.144-.947 2.144-2.117v-9.44C22.008 3.947 21.04 3 19.856 3ZM4.144 4.293h15.712c.467 0 .842.371.842.832v6.73H3.31V5.118c0-.453.375-.824.834-.824Zm9.913 15.414h-3.872v-3.032h3.872v3.032Zm5.799-4.325H4.144a.835.835 0 0 1-.842-.832V13.14h17.396v1.409a.835.835 0 0 1-.842.832Z'
      />
    </svg>
  )
})

if (__DEV__) {
  BxImac.displayName = 'BxImac'
}
