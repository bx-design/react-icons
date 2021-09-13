import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxCopyright = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M12 2C6.487 2 2 6.487 2 12s4.487 10 10 10 10-4.487 10-10S17.513 2 12 2Zm0 18.564c-4.726 0-8.573-3.846-8.573-8.572 0-4.727 3.847-8.573 8.573-8.573 4.727 0 8.573 3.846 8.573 8.572-.009 4.727-3.846 8.573-8.573 8.573Z'
        />
        <path
          fill='currentColor'
          d='M12.256 15.265c-1.829 0-2.393-1.684-2.393-3.29 0-1.727.65-3.24 2.342-3.24 1.29 0 1.795.727 1.992 1.462h2.05c-.238-1.59-1.46-3.069-3.982-3.069-3.06 0-4.521 2.325-4.521 4.923 0 2.693 1.418 4.82 4.427 4.82 2.376 0 3.7-1.29 4.085-3.05h-2.06c-.188.546-.606 1.444-1.94 1.444Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxCopyright.displayName = 'BxCopyright'
}
