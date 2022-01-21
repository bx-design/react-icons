import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxMap = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
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
        d='M21.768 4.437a.635.635 0 0 0-.53-.134l-5.79 1.235-6.194-2.496h-.008c-.058-.017-.116-.034-.174-.034C9.056 3 9.047 3 9.04 3h-.016a.527.527 0 0 0-.166.025H8.84l-6.385 1.95A.647.647 0 0 0 2 5.597v15.075c0 .202.1.395.257.521.165.118.372.16.563.101l6.17-1.924 6.136 2.58c.075.033.157.05.24.05h.017a.696.696 0 0 0 .19-.034l5.938-1.453a.647.647 0 0 0 .489-.63V4.932a.616.616 0 0 0-.232-.496Zm-12.108.16 5.093 2.05v13.74L9.66 18.244V4.597ZM3.267 6.076l5.118-1.563v13.689l-5.118 1.596V6.076ZM20.732 19.36l-4.712 1.152V6.73l4.712-1v13.63Z'
      />
    </svg>
  )
})

if (__DEV__) {
  BxMap.displayName = 'BxMap'
}
