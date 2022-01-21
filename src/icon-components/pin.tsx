import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxPin = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
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
        d='M11.636 21.999c-.484 0-.926-.19-1.26-.53l-4.94-5.07c-1.468-1.509-2.328-3.414-2.428-5.378C3 10.872 3 10.723 3 10.574c0-2.361.993-4.64 2.72-6.247 1.752-1.64 4.055-2.452 6.467-2.311 4.322.265 7.785 3.703 8.069 7.995a8.501 8.501 0 0 1-.568 3.678c-.375.961-.984 1.873-1.802 2.71l-4.99 5.078a1.788 1.788 0 0 1-1.26.522Zm-.008-18.716a7.309 7.309 0 0 0-5.023 1.98 7.202 7.202 0 0 0-2.32 5.32c0 .132 0 .256.008.38.084 1.657.818 3.273 2.07 4.549l4.94 5.07c.083.091.2.14.325.14s.242-.049.325-.14l4.99-5.079c.701-.712 1.21-1.474 1.527-2.278.392-.994.55-2.046.484-3.132-.233-3.645-3.187-6.57-6.859-6.793-.15-.017-.309-.017-.467-.017Z'
      />
      <path
        fill='currentColor'
        d='M11.636 14.227c-2.027 0-3.68-1.64-3.68-3.653S9.61 6.92 11.636 6.92c2.028 0 3.68 1.64 3.68 3.654 0 2.013-1.652 3.653-3.68 3.653Zm0-6.023a2.377 2.377 0 0 0-2.386 2.37 2.377 2.377 0 0 0 2.386 2.37 2.377 2.377 0 0 0 2.387-2.37c0-1.31-1.068-2.37-2.387-2.37Z'
      />
    </svg>
  )
})

if (__DEV__) {
  BxPin.displayName = 'BxPin'
}
