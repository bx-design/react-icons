import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxCheck = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M10.022 18c-.258 0-.508-.084-.708-.261l-6.997-6.185a.895.895 0 0 1-.034-1.336 1.088 1.088 0 0 1 1.45-.031l6.264 5.547L20.25 6.277c.4-.37 1.05-.37 1.45 0 .399.368.399.968 0 1.336l-10.955 10.11c-.2.185-.466.277-.724.277Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxCheck.displayName = 'BxCheck'
}
