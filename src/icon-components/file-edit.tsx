import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxFileEdit = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M21.824 9.339 20.494 8a.583.583 0 0 0-.829-.008l-4.435 4.426c-.25.252-.452.57-.56.92l-.436 1.373a.719.719 0 0 0 .176.72.717.717 0 0 0 .72.176l1.364-.452c.334-.109.644-.301.895-.553l4.444-4.435a.583.583 0 0 0 .167-.41.563.563 0 0 0-.176-.418Zm-5.104 4.594a1.26 1.26 0 0 1-.527.318l-.93.31.302-.93c.067-.2.176-.393.326-.535l2.402-2.401.837.836-2.41 2.402Zm3.08-3.071-.83-.837 1.114-1.104.828.836-1.113 1.105Z'
        />
        <path
          fill='currentColor'
          d='M18.1 15.85a.627.627 0 0 0-.627.627v3.941c0 .151-.126.277-.276.277H3.54a.279.279 0 0 1-.276-.277V3.54c0-.15.125-.276.276-.276h13.648c.15 0 .276.125.276.276v3.054a.627.627 0 1 0 1.256 0V3.54c0-.845-.686-1.54-1.54-1.54H3.54C2.686 2 2 2.686 2 3.54v16.878c0 .846.686 1.54 1.54 1.54h13.648c.846 0 1.54-.686 1.54-1.54v-3.941a.627.627 0 0 0-.628-.628Z'
        />
        <path
          fill='currentColor'
          d='M14.803 5.498h-8.92a.627.627 0 1 0 0 1.255h8.92a.627.627 0 1 0 0-1.255ZM15.431 10.05a.627.627 0 0 0-.628-.627h-8.92a.627.627 0 1 0 0 1.255h8.92a.627.627 0 0 0 .628-.628ZM11.523 13.339h-5.64a.627.627 0 1 0 0 1.255h5.64a.627.627 0 1 0 0-1.255ZM5.255 17.883c0 .351.285.627.628.627h8.92a.627.627 0 1 0 0-1.255h-8.92a.632.632 0 0 0-.628.628Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxFileEdit.displayName = 'BxFileEdit'
}
