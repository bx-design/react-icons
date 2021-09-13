import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxCalculator = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M7.645 19.29h8.935v-9.167H7.645v9.167Zm1.292-2.644h1.233v1.35H8.937v-1.35Zm3.8-2.694v1.409h-1.266v-1.41h1.267Zm-1.266-1.285v-1.26h1.267v1.26H11.47Zm2.559 1.285h1.267v1.409H14.03v-1.41Zm-1.292 2.694v1.35H11.47v-1.35h1.267Zm-2.56-1.285H8.938v-1.41h1.233v1.41h.009Zm3.852 2.636v-1.351h1.267v1.35H14.03Zm1.258-5.33h-1.267v-1.26h1.267v1.26Zm-5.11-1.26v1.26H8.938v-1.26h1.242Z'
        />
        <path
          fill='currentColor'
          d='M17.339 2H6.66a1.93 1.93 0 0 0-1.934 1.923v16.154A1.93 1.93 0 0 0 6.661 22h10.57a2.04 2.04 0 0 0 2.042-2.03V3.922A1.93 1.93 0 0 0 17.339 2Zm.642 17.97a.75.75 0 0 1-.75.745H6.66a.646.646 0 0 1-.642-.638V3.923c0-.348.292-.638.642-.638H17.34c.35 0 .642.29.642.638v16.046Z'
        />
        <path
          fill='currentColor'
          d='M7.586 8.797h9.061V4.818h-9.06v3.979Zm1.292-2.694h6.477v1.409H8.878v-1.41Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxCalculator.displayName = 'BxCalculator'
}
