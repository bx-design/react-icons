import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxSad = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
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
        d='M12 3.395a8.605 8.605 0 1 0 0 17.21 8.605 8.605 0 0 0 0-17.21ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z'
        clipRule='evenodd'
      />
      <path
        fill='currentColor'
        d='M12.059 12.82c-1.675 0-3.21.75-4.093 2.02a.648.648 0 0 0 .157.9.65.65 0 0 0 .9-.157c.635-.908 1.798-1.469 3.036-1.469 1.212 0 2.326.52 2.978 1.395a.654.654 0 0 0 .908.132.647.647 0 0 0 .132-.908c-.908-1.196-2.401-1.914-4.019-1.914ZM9.889 9.585c0-.677-.545-1.221-1.222-1.221-.676 0-1.212.544-1.212 1.22a1.217 1.217 0 1 0 2.434 0ZM15.318 8.364c-.677 0-1.221.544-1.221 1.22 0 .677.544 1.222 1.22 1.222.677 0 1.222-.545 1.222-1.221a1.229 1.229 0 0 0-1.221-1.221Z'
      />
    </svg>
  )
})

if (__DEV__) {
  BxSad.displayName = 'BxSad'
}
