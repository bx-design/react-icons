import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxMaximize1 = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='m17.864 14.342-4.604 3.966V5.698l4.604 3.966c.246.213.565.312.883.312.32 0 .638-.1.884-.312.492-.424.492-1.11 0-1.534l-6.733-5.812c-.493-.424-1.289-.424-1.781 0L4.369 8.13c-.492.424-.492 1.11 0 1.534.493.425 1.289.425 1.781 0l4.605-3.966v12.598L6.15 14.342c-.492-.424-1.288-.424-1.78 0-.493.424-.493 1.11 0 1.534l6.747 5.812c.246.212.564.312.883.312.319 0 .637-.1.883-.312l6.748-5.812c.492-.424.492-1.11 0-1.534-.478-.424-1.274-.424-1.767 0Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxMaximize1.displayName = 'BxMaximize1'
}
