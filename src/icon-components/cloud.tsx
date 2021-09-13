import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxCloud = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M19.417 9.367c-.428-2.157-2.452-3.745-4.838-3.745-.847 0-1.67.2-2.41.59A5.124 5.124 0 0 0 8.837 5c-2.715 0-4.92 2.057-4.92 4.59 0 .06 0 .122.008.183C2.708 10.64 2 11.976 2 13.411 2 15.943 4.205 18 6.92 18h10.16c2.715 0 4.92-2.057 4.92-4.59.008-1.695-1.004-3.245-2.583-4.043ZM17.08 16.84H6.92c-2.024 0-3.678-1.535-3.678-3.43 0-1.159.626-2.233 1.662-2.87l.321-.2-.033-.353c-.016-.146-.033-.276-.033-.399 0-1.888 1.646-3.43 3.678-3.43 1.061 0 2.065.43 2.764 1.174l.37.399.46-.307a3.807 3.807 0 0 1 2.14-.645c1.868 0 3.439 1.305 3.653 3.032l.04.33.322.138c1.316.552 2.172 1.78 2.172 3.123 0 1.896-1.646 3.438-3.678 3.438Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxCloud.displayName = 'BxCloud'
}
