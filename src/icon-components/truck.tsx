import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxTruck = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M20.702 10.878H20.5l-1.726-2.959c-.276-.478-.812-.769-1.39-.769h-2.53v-.934c0-.675-.585-1.216-1.297-1.216H3.298C2.578 5 2 5.541 2 6.216v9.967c0 .667.578 1.216 1.298 1.216h1.156C4.647 18.31 5.509 19 6.539 19s1.893-.69 2.086-1.6h6.8c.193.91 1.056 1.6 2.086 1.6 1.03 0 1.893-.69 2.085-1.6h1.131c.703 0 1.273-.534 1.273-1.194v-4.104c0-.675-.586-1.224-1.298-1.224Zm-7.144 5.305H8.466c-.335-.69-1.072-1.17-1.935-1.17s-1.6.48-1.935 1.17H3.29V6.216h10.26v9.967h.008Zm3.819-7.824a.3.3 0 0 1 .26.141l1.39 2.378h-4.171v-2.52h2.52Zm3.325 7.824h-1.256c-.335-.69-1.073-1.17-1.935-1.17-.863 0-1.6.48-1.935 1.17h-.687v-4.089l5.813.008v4.08Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxTruck.displayName = 'BxTruck'
}
