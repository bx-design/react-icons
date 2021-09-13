import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxSmartphone = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M16.176 2H7.824c-1.204 0-2.188.997-2.188 2.217v15.566c0 1.22.984 2.217 2.188 2.217h8.352c1.204 0 2.188-.997 2.188-2.217V4.217c0-1.22-.976-2.217-2.188-2.217ZM7.824 3.277h8.352c.512 0 .927.42.927.94v.972H6.897v-.972c0-.52.415-.94.927-.94Zm9.287 3.19v10.366H6.897V6.466H17.11Zm-.935 14.256H7.824a.933.933 0 0 1-.927-.94V18.11H17.11v1.673a.94.94 0 0 1-.935.94Z'
        />
        <path
          fill='currentColor'
          d='M12.468 18.794h-.928a.63.63 0 0 0-.626.635.63.63 0 0 0 .627.635h.927a.63.63 0 0 0 .626-.635.636.636 0 0 0-.626-.635Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxSmartphone.displayName = 'BxSmartphone'
}
