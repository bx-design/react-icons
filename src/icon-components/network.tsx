import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxNetwork = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M19.159 16.522c-.248 0-.497.033-.728.09l-2.9-2.874c.41-.626.65-1.367.65-2.158 0-.717-.197-1.4-.54-1.985l2.37-2.356c.352.148.737.23 1.148.23C20.725 7.47 22 6.243 22 4.736 22 3.227 20.733 2 19.159 2c-1.566 0-2.841 1.227-2.841 2.735 0 .576.188 1.112.504 1.548L14.65 8.442a4.311 4.311 0 0 0-2.696-.94c-.924 0-1.78.289-2.482.783L7.297 6.127c.249-.404.394-.882.394-1.384C7.691 3.227 6.416 2 4.841 2 3.267 2 2 3.227 2 4.735 2 6.242 3.275 7.47 4.841 7.47c.48 0 .933-.116 1.335-.322L8.41 9.364a3.964 3.964 0 0 0-.685 2.216c0 .89.3 1.705.805 2.38L5.79 16.68a2.924 2.924 0 0 0-.941-.157C3.275 16.522 2 17.75 2 19.257s1.275 2.735 2.841 2.735c1.566 0 2.841-1.228 2.841-2.735 0-.643-.23-1.236-.624-1.705l2.584-2.562c.668.42 1.455.667 2.31.667.95 0 1.824-.304 2.534-.815l2.585 2.57a2.649 2.649 0 0 0-.754 1.853c0 1.508 1.276 2.735 2.842 2.735S22 20.773 22 19.265c.009-1.515-1.267-2.743-2.841-2.743Zm0-13.031c.71 0 1.292.56 1.292 1.244 0 .683-.582 1.244-1.292 1.244-.71 0-1.293-.56-1.293-1.244 0-.684.582-1.244 1.293-1.244ZM3.549 4.735c0-.684.582-1.244 1.292-1.244.71 0 1.292.56 1.292 1.244 0 .683-.581 1.244-1.292 1.244-.71.008-1.292-.552-1.292-1.244Zm1.292 15.774c-.71 0-1.292-.56-1.292-1.244 0-.684.582-1.244 1.292-1.244.71 0 1.292.56 1.292 1.244 0 .684-.573 1.244-1.292 1.244Zm7.112-6.343c-1.48 0-2.679-1.161-2.679-2.578 0-1.417 1.198-2.586 2.679-2.586 1.48 0 2.679 1.161 2.679 2.578 0 1.417-1.199 2.586-2.68 2.586Zm7.206 6.343c-.71 0-1.293-.56-1.293-1.244 0-.684.582-1.244 1.293-1.244.71 0 1.292.56 1.292 1.244 0 .684-.573 1.244-1.292 1.244Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxNetwork.displayName = 'BxNetwork'
}
