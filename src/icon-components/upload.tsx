import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxUpload = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M12.52 2.225A.82.82 0 0 0 11.95 2a.806.806 0 0 0-.58.243L7.066 6.51a.825.825 0 0 0 0 1.16.842.842 0 0 0 1.169 0l2.99-2.966v10.908c0 .45.372.818.825.818a.816.816 0 0 0 .815-.818v-10.8l3 2.857a.823.823 0 0 0 1.16-.027.798.798 0 0 0-.028-1.15l-4.476-4.267Z'
        />
        <path
          fill='currentColor'
          d='M20.27 15.603a.824.824 0 0 0-.824.818v3.953H4.65v-3.729a.824.824 0 0 0-1.649 0v4.537c0 .45.372.818.825.818H20.27a.824.824 0 0 0 .824-.818v-4.77a.822.822 0 0 0-.824-.81Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxUpload.displayName = 'BxUpload'
}
