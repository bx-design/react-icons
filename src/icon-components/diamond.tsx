import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxDiamond = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M21.974 7.944A.622.622 0 0 0 22 7.762v-.009a.565.565 0 0 0-.026-.173c0-.009-.008-.026-.008-.035a.456.456 0 0 0-.086-.155s0-.009-.008-.009l-3.12-4.121a.637.637 0 0 0-.504-.26H5.64a.629.629 0 0 0-.513.26L2.12 7.38s0 .009-.009.009c-.026.052-.051.104-.077.164 0 .009-.008.026-.008.035A.565.565 0 0 0 2 7.762c0 .06.009.121.026.173 0 .009.008.026.008.035a.456.456 0 0 0 .094.164l9.368 12.615a.43.43 0 0 0 .128.121c.017.009.026.017.043.026.034.026.077.043.12.06.016.01.033.01.05.018a.545.545 0 0 0 .171.026c.06 0 .12-.009.18-.026h.017l.051-.026.052-.026.077-.052c.008-.009.017-.017.034-.026a.368.368 0 0 0 .094-.104l9.359-12.588s0-.01.008-.01a.988.988 0 0 0 .086-.164c0-.017 0-.026.008-.034Zm-14.59.459 2.787 8.441-6.274-8.441h3.488Zm6.129-4.122.957 2.84H8.846l1.342-2.84h3.325Zm1.026 4.122-2.53 9.965-3.291-9.965h5.82Zm1.307 0h4.257l-6.47 8.71 2.213-8.71Zm4.24-1.282h-4.283l-.957-2.84h3.086l2.154 2.84ZM5.957 4.281h2.82l-1.333 2.84H3.89l2.068-2.84Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxDiamond.displayName = 'BxDiamond'
}
