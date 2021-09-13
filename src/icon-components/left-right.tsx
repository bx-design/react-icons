import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxLeftRight = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M5.33 11.913a.763.763 0 0 0 .517.205c.192 0 .375-.071.517-.205a.674.674 0 0 0 0-.982L4.447 9.114h16.806c.409 0 .734-.306.734-.692 0-.385-.325-.691-.733-.691H4.53l1.85-1.824a.662.662 0 0 0-.026-.983.758.758 0 0 0-1.033.023L2.214 8.006a.663.663 0 0 0 .009.967l3.108 2.94ZM18.67 12.095a.777.777 0 0 0-1.041 0 .674.674 0 0 0 0 .982l1.916 1.817H2.74c-.408 0-.733.306-.733.692 0 .385.325.691.733.691H19.47l-1.85 1.825a.662.662 0 0 0 .025.982.773.773 0 0 0 .509.197c.191 0 .383-.07.533-.212l3.108-3.059a.663.663 0 0 0-.009-.967l-3.116-2.948Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxLeftRight.displayName = 'BxLeftRight'
}
