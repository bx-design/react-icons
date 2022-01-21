import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxPhone = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M16.613 22a8.986 8.986 0 0 1-3.375-.682C6.406 18.53 3.58 13.13 2.674 10.94a8.7 8.7 0 0 1-.632-2.455c-.315-3.195 1.206-5.192 2.145-6.099a1.384 1.384 0 0 1 1.945.025l4.222 4.327c.133.133.2.325.183.516-.1 1.198-.997 1.872-1.654 2.213 1.455 3.004 4.256 4.868 5.444 5.559.881-1.373 2.278-1.664 2.344-1.681a.667.667 0 0 1 .599.183l4.322 4.294c.457.457.54 1.173.2 1.706-.849 1.331-2.287 2.155-4.148 2.404-.341.042-.69.067-1.031.067ZM5.15 3.327a.063.063 0 0 0-.042.017c-.764.74-2.011 2.38-1.753 5.018.066.665.249 1.364.54 2.08.84 2.039 3.466 7.056 9.841 9.652 1.239.508 2.527.691 3.732.525 1.48-.192 2.56-.808 3.2-1.806.008-.008 0-.033-.017-.058l-4.03-4.011a2.667 2.667 0 0 0-1.414 1.431.674.674 0 0 1-.374.366.673.673 0 0 1-.523-.016c-.208-.1-5.029-2.438-6.932-7.157a.718.718 0 0 1 .033-.54.657.657 0 0 1 .415-.342c.009 0 1.073-.307 1.339-1.065L5.184 3.344c-.008-.017-.025-.017-.033-.017Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxPhone.displayName = 'BxPhone'
}
