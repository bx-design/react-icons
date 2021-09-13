import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxSound = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M14.713 3.814a1.213 1.213 0 0 0-1.222-.009L8.143 6.8a.87.87 0 0 0-.249-.042h-4.99a.87.87 0 0 0-.88.874v8.057c0 .483.39.882.88.882h4.99a.817.817 0 0 0 .2-.025l5.38 3.16a1.2 1.2 0 0 0 .623.175c.208 0 .416-.059.616-.167.39-.224.615-.623.615-1.064V4.869a1.24 1.24 0 0 0-.615-1.055ZM7.495 15.289h-4.2V8.03h4.2v7.26Zm6.553 3.277-5.273-3.102V7.905l5.273-2.952v13.613ZM16.659 8.396a.646.646 0 0 0-.15.89c.067.1 1.655 2.394-.025 5.205a.636.636 0 0 0 1.09.657c2.128-3.55.058-6.478-.034-6.603a.628.628 0 0 0-.881-.15ZM20.742 5.967a.638.638 0 0 0-.849-.299.638.638 0 0 0-.299.848c.025.05 2.503 5.414.008 10.278a.64.64 0 0 0 .275.857c.091.05.191.066.29.066a.622.622 0 0 0 .566-.349c2.786-5.43.125-11.16.009-11.4Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxSound.displayName = 'BxSound'
}
