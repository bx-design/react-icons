import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxSelection = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='m18.539 7.235-5.63-4.862c-.572-.505-1.493-.496-2.064.02L5.447 7.253c-.942.849-.275 2.279 1.037 2.279h11.028c1.344 0 1.99-1.459 1.027-2.298ZM5.458 17.217l5.63 4.863a1.597 1.597 0 0 0 2.075-.02l5.397-4.862c.932-.839.276-2.278-1.047-2.278H6.485c-1.334 0-1.99 1.468-1.027 2.297Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxSelection.displayName = 'BxSelection'
}
