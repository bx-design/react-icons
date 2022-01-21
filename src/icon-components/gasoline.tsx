import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxGasoline = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='m19.96 6.482-2.828-2.434a.72.72 0 0 0-.46-.173h-5.16V2.633c0-.353-.3-.633-.682-.633H5.972c-.372 0-.682.28-.682.633v1.242H4.5c-.38 0-.682.288-.682.633v16.859c0 .345.302.633.683.633h14.998c.373 0 .683-.28.683-.633V6.95c0-.181-.08-.346-.222-.47ZM6.655 3.266h3.492v.609H6.655v-.609Zm12.162 17.468H5.183V5.14H16.406l2.41 2.081v13.512Z'
        />
        <path
          fill='currentColor'
          d='M13.303 5.783a.677.677 0 0 0-.585.395.606.606 0 0 0 .133.666l4.13 4.17a.71.71 0 0 0 .506.205c.071 0 .15-.008.222-.033a.63.63 0 0 0 .452-.551l.23-2.846a.608.608 0 0 0-.204-.501l-1.666-1.489a.696.696 0 0 0-.514-.172l-2.704.156Zm3.705 2.212L16.92 9.09l-2.101-2.122.975-.057 1.214 1.085ZM11.832 6.68H6.274v1.266h5.558V6.679ZM15.555 11.178l-3.28 3.042-3.36-3.05-.948.904 3.35 3.043-3.36 3.116.967.889 3.36-3.125 3.28 2.968.948-.904-3.262-2.96 3.27-3.035-.965-.888Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxGasoline.displayName = 'BxGasoline'
}
