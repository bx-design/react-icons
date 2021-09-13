import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxPencil2 = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M19.091 4.437 15.554 2.33a.937.937 0 0 0-1.277.33L6.919 15.01a5.055 5.055 0 0 0-.688 2.15l-.268 3.256c-.038.457.186.886.577 1.119l.008.004c.391.233.88.218 1.263-.032l2.71-1.812a5.062 5.062 0 0 0 1.52-1.593l7.376-12.38a.938.938 0 0 0-.326-1.285Zm-1.044.948-1.215 2.04-2.822-1.681 1.215-2.04 2.822 1.681ZM9.781 18.56l-2.434 1.62.239-2.917a3.642 3.642 0 0 1 .504-1.565l5.237-8.79 2.815 1.676-5.25 8.813A3.606 3.606 0 0 1 9.78 18.56Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxPencil2.displayName = 'BxPencil2'
}
