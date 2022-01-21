import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxTag = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
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
        d='M18.162 7.549 12.46 2.177a.67.67 0 0 0-.912 0l-5.71 5.372a.634.634 0 0 0-.203.461v13.347c0 .355.296.643.659.643h11.412a.652.652 0 0 0 .659-.643V8.01a.604.604 0 0 0-.203-.461Zm-1.115 13.166H6.953V8.282l5.051-4.754 5.052 4.754v12.433h-.009Z'
      />
      <path
        fill='currentColor'
        d='M12.004 9.641c.938 0 1.698-.741 1.698-1.656 0-.914-.76-1.656-1.698-1.656s-1.698.742-1.698 1.656c0 .915.76 1.656 1.698 1.656Z'
      />
    </svg>
  )
})

if (__DEV__) {
  BxTag.displayName = 'BxTag'
}
