import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxPackageSend = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M3.41 13.91h5.46l-.792.817a.62.62 0 0 0 .017.885c.122.12.279.172.435.172.166 0 .331-.069.462-.19l1.863-1.916a.625.625 0 0 0-.009-.876l-1.863-1.84a.647.647 0 0 0-.897 0 .627.627 0 0 0 0 .886l.819.808H3.41a.635.635 0 0 0-.636.627.64.64 0 0 0 .636.627Z'
        />
        <path
          fill='currentColor'
          d='M5.814 11.762a.635.635 0 0 0 .635-.627.635.635 0 0 0-.635-.627h-1.21a.635.635 0 0 0-.636.627c0 .344.287.627.635.627h1.21ZM5.657 15.431a.635.635 0 0 0-.636-.627H2.636a.635.635 0 0 0-.636.627c0 .344.287.628.636.628H5.02a.63.63 0 0 0 .636-.628Z'
        />
        <path
          fill='currentColor'
          d='M21.887 6.056c-.009-.017-.018-.026-.026-.043l-.035-.06c-.009-.009-.009-.017-.018-.017l-2.96-3.695A.606.606 0 0 0 18.352 2H6.397a.628.628 0 0 0-.522.275L3.367 5.927a.567.567 0 0 0-.078.163.892.892 0 0 0-.096.404v2.398a.635.635 0 0 0 1.271 0V6.829H9.75l-.008 2.682h5.337V6.82h5.65v12.924H4.465v-1.787a.635.635 0 0 0-1.271 0v2.123c0 .506.418.919.932.919h16.943a.927.927 0 0 0 .932-.92V6.495a.911.911 0 0 0-.113-.438Zm-1.985-.481h-4.929l-.452-2.32h3.526l1.855 2.32Zm-6.209 0H11.1l.34-2.32h1.793l.462 2.32Zm-6.956-2.32h3.421l-.34 2.32H5.144l1.594-2.32Zm7.07 5.01h-2.795V6.82h2.795v1.444Z'
        />
        <path
          fill='currentColor'
          d='M19.275 17.563h-3.213v1.254h3.213v-1.254Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxPackageSend.displayName = 'BxPackageSend'
}
