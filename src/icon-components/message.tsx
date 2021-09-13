import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxMessage = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M20.19 2.925H3.82a1.81 1.81 0 0 0-1.802 1.811v11.28c0 .998.81 1.812 1.802 1.812h5.008l2.702 3.04c.116.133.289.216.47.216h.01a.636.636 0 0 0 .47-.208l2.785-3.04h4.933A1.81 1.81 0 0 0 22 16.025V4.736c-.017-.997-.818-1.81-1.81-1.81Zm.52 13.092c0 .29-.239.531-.528.531H14.951c-.017 0-.041 0-.058.009-.025 0-.041.008-.066.008a.117.117 0 0 0-.05.017c-.024.008-.05.016-.066.024a.18.18 0 0 0-.041.025c-.025.009-.041.025-.058.034-.016.008-.025.025-.041.033l-.05.05-.008.008-2.496 2.733-2.42-2.725a.629.629 0 0 0-.546-.207c-.017 0-.033-.009-.05-.009H3.82a.534.534 0 0 1-.53-.531V4.737c0-.292.24-.532.53-.532h16.37c.29 0 .53.24.53.531v11.28h-.01Z'
        />
        <path
          fill='currentColor'
          d='M18.281 7.237H5.721a.633.633 0 0 0-.637.64c0 .356.281.639.636.639h12.561a.633.633 0 0 0 .637-.64c0-.357-.281-.64-.637-.64ZM18.281 9.737H5.721a.633.633 0 0 0-.637.64c0 .357.281.64.636.64h12.561a.633.633 0 0 0 .637-.64c0-.358-.281-.64-.637-.64ZM12.084 12.254H5.72a.633.633 0 0 0-.636.64c0 .357.281.639.636.639h6.364a.633.633 0 0 0 .636-.64.633.633 0 0 0-.636-.64Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxMessage.displayName = 'BxMessage'
}
