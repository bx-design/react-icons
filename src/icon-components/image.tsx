import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxImage = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M19.917 3.826H4.092c-1.145 0-2.083.916-2.083 2.054v12.25c0 1.129.938 2.053 2.083 2.053h15.825c1.145 0 2.083-.916 2.083-2.054V5.88a2.075 2.075 0 0 0-2.083-2.053ZM4.092 5.07h15.825c.448 0 .813.36.813.801v8.78l-.979-1.251a2.313 2.313 0 0 0-1.66-.884 2.32 2.32 0 0 0-1.775.622l-1.892 1.76a1.078 1.078 0 0 1-1.494-.034l-2.954-3.01a2.36 2.36 0 0 0-3.287-.066L3.27 15.02V5.88c0-.442.374-.81.822-.81ZM19.917 18.93H4.092a.809.809 0 0 1-.813-.802v-1.374l4.29-4.067a1.08 1.08 0 0 1 1.502.024l2.954 3.02c.88.9 2.349.933 3.27.073l1.892-1.759c.224-.204.506-.303.813-.278.299.024.573.164.755.4l1.984 2.53v1.423a.823.823 0 0 1-.822.81Z'
        />
        <path
          fill='currentColor'
          d='M17.212 10.307a1.73 1.73 0 0 0 1.742-1.719c0-.95-.78-1.718-1.742-1.718a1.73 1.73 0 0 0-1.743 1.718c0 .95.78 1.719 1.743 1.719Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxImage.displayName = 'BxImage'
}
