import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxOrdenSend = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M21.447 11.808c-.074-.008-.85-.09-1.964-.05V3.62c0-.343-.281-.62-.628-.62H6.251a.623.623 0 0 0-.627.62v1.492h1.254V4.24h2.864v1.77c0 .342.281.62.628.62h4.366a.623.623 0 0 0 .628-.62V4.24h2.864v7.608c-1.535.163-3.36.588-4.895 1.574H9.231c-.8 0-1.494.473-1.816 1.142a11.918 11.918 0 0 0-.537-.22V11.18H5.624v2.715a16.285 16.285 0 0 0-.512-.138c-1.123-.27-2.287.065-2.774.799-.354.538-.297 1.182.157 1.77 1.082 1.402 5.588 3.107 7.602 3.596.95.228 2.279.35 3.632.35 1.907 0 3.863-.236 4.895-.75 1.577-.774 3.03-1.565 3.046-1.573a.627.627 0 0 0 .33-.547V12.42a.62.62 0 0 0-.553-.611Zm-7.338-6.419h-3.112V4.24h3.112v1.15Zm6.636 11.646c-.511.27-1.568.824-2.682 1.378-1.37.677-5.448.84-7.668.302-2.353-.57-6.2-2.226-6.901-3.14-.116-.155-.149-.269-.099-.342.107-.163.487-.326.95-.326.148 0 .313.016.478.057.867.212 1.907.652 2.468.897a2.003 2.003 0 0 0 1.948 1.517h7.05v-1.24H9.23a.75.75 0 0 1-.751-.742.75.75 0 0 1 .75-.742h4.293c.124 0 .248-.041.355-.106 2.294-1.558 5.572-1.599 6.867-1.55v4.037Z'
        />
        <path
          fill='currentColor'
          d='M2.627 8.709h5.167l-.726.742a.615.615 0 0 0 .025.88.61.61 0 0 0 .43.172c.164 0 .33-.066.453-.188l1.775-1.827a.61.61 0 0 0-.009-.864L7.968 5.862a.623.623 0 0 0-.883 0 .605.605 0 0 0 0 .873l.742.734h-5.2A.623.623 0 0 0 2 8.09c0 .342.28.62.627.62ZM2.627 6.654h1.585a.623.623 0 0 0 .627-.62c0-.343-.28-.62-.627-.62H2.627a.623.623 0 0 0-.627.62c0 .342.28.62.627.62Z'
        />
        <path
          fill='currentColor'
          d='M2.627 10.764h2.278a.623.623 0 0 0 .628-.62c0-.343-.28-.62-.628-.62H2.627a.623.623 0 0 0-.627.62c0 .342.28.62.627.62Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxOrdenSend.displayName = 'BxOrdenSend'
}
