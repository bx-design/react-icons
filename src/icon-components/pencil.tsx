import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxPencil = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M9.94 22h4.129c.51 0 .931-.398.931-.888V7.494c0-.714-.176-1.436-.51-2.083l-1.44-2.78A1.195 1.195 0 0 0 11.978 2h-.009c-.457 0-.87.249-1.071.639L9.492 5.427A4.576 4.576 0 0 0 9 7.461v13.651c0 .49.422.888.94.888Zm.413-1.278v-2.249h3.294v2.249h-3.294Zm.36-14.73 1.265-2.498 1.291 2.49c.246.472.37.995.37 1.518v9.693h-3.286V7.477c0-.514.123-1.02.36-1.485Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxPencil.displayName = 'BxPencil'
}
