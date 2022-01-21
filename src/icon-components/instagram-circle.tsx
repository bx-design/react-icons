import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxInstagramCircle = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M12 3.395a8.605 8.605 0 1 0 0 17.21 8.605 8.605 0 0 0 0-17.21ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z'
          clipRule='evenodd'
        />
        <path
          fill='currentColor'
          d='M17.055 7.982a2.159 2.159 0 0 0-.51-.782 2.158 2.158 0 0 0-.781-.51c-.237-.09-.6-.2-1.264-.235-.718-.037-.927-.037-2.745-.037-1.819 0-2.028.01-2.746.046-.664.027-1.018.136-1.264.227a2.158 2.158 0 0 0-.781.509 2.025 2.025 0 0 0-.5.782c-.1.245-.21.6-.237 1.263-.036.719-.045.937-.045 2.746 0 1.818.009 2.027.036 2.745.027.664.146 1.018.237 1.264.127.318.272.546.509.782.236.236.463.382.781.509.237.09.6.2 1.264.236.718.037.927.037 2.746.037 1.818 0 2.027-.01 2.745-.037.664-.027 1.027-.145 1.264-.236.318-.127.545-.273.782-.51.236-.235.381-.463.509-.781.09-.236.2-.6.236-1.264.036-.718.036-.927.036-2.745s-.009-2.027-.036-2.746c-.027-.663-.137-1.018-.236-1.263Zm-5.3 7.5a3.492 3.492 0 0 1 0-6.982 3.492 3.492 0 0 1 0 6.982Zm3.636-6.3a.815.815 0 0 1-.818-.818c0-.455.363-.819.818-.819.454 0 .818.364.818.819a.82.82 0 0 1-.818.818Z'
        />
        <path
          fill='currentColor'
          d='M11.755 14.255a2.264 2.264 0 1 0 0-4.528 2.264 2.264 0 0 0 0 4.527Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxInstagramCircle.displayName = 'BxInstagramCircle'
}
