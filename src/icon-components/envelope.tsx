import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxEnvelope = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M19.917 4H4.083C2.937 4 2 4.876 2 5.947v11.106C2 18.124 2.937 19 4.083 19h15.834C21.063 19 22 18.124 22 17.053V5.947C22 4.876 21.063 4 19.917 4ZM4.083 5.18h15.834c.452 0 .82.345.82.767v.939l-8.632 3.112-8.842-3.026V5.947c0-.422.368-.766.82-.766Zm15.834 12.631H4.083c-.452 0-.82-.344-.82-.766V8.239l8.85 3.026 8.616-3.104v8.892c.008.414-.36.758-.812.758Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxEnvelope.displayName = 'BxEnvelope'
}
