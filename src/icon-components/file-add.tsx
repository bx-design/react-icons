import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxFileAdd = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M5.89 6.763h8.916a.626.626 0 0 0 0-1.255H5.89a.627.627 0 0 0-.627.627.616.616 0 0 0 .627.628ZM14.806 17.279H5.89a.626.626 0 0 0 0 1.254h8.916a.627.627 0 0 0 0-1.254Z'
        />
        <path
          fill='currentColor'
          d='M22 11.996a5.263 5.263 0 0 0-3.28-4.87V3.544A1.533 1.533 0 0 0 17.188 2H3.54C2.692 2 2 2.693 2 3.544v16.912C2 21.306 2.692 22 3.541 22h13.646c.85 0 1.541-.693 1.541-1.544v-3.582A5.276 5.276 0 0 0 22 11.996Zm-4.532 8.452c0 .157-.124.28-.28.28H3.54a.278.278 0 0 1-.28-.28V3.544c0-.157.123-.281.28-.281h13.646c.157 0 .28.124.28.28v3.253a5.044 5.044 0 0 0-.716-.058c-1.962 0-3.676 1.09-4.582 2.69h-6.28a.63.63 0 0 0-.634.636c0 .347.28.628.626.628h5.785c-.107.42-.173.85-.173 1.304 0 .47.066.924.181 1.362H5.89a.627.627 0 0 0 0 1.255h6.246c.025 0 .05-.009.074-.009a5.246 5.246 0 0 0 4.549 2.642c.247 0 .478-.025.717-.058v3.26h-.008Zm-.717-4.457a3.995 3.995 0 0 1 0-7.99 3.995 3.995 0 0 1 0 7.99Z'
        />
        <path
          fill='currentColor'
          d='M19.14 11.369h-1.763V9.602a.627.627 0 1 0-1.253 0v1.767h-1.763a.627.627 0 0 0 0 1.254h1.763v1.767a.627.627 0 1 0 1.253 0v-1.767h1.764a.627.627 0 0 0 0-1.254Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxFileAdd.displayName = 'BxFileAdd'
}
