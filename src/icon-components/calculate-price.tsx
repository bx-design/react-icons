import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxCalculatePrice = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M21.748 18.738a2.785 2.785 0 0 1-.47-1.542V12.41a3.91 3.91 0 0 0-3.3-3.865c.378-.771.51-1.41.559-1.858a1.404 1.404 0 0 0-.354-1.061 1.38 1.38 0 0 0-1.02-.456h-3.418c-.354 0-.691.157-.914.431-.23.265-.329.622-.263.97.115.672.354 1.394.568 1.941a3.717 3.717 0 0 0-1.004.249V4.407c0-.83-.667-1.501-1.49-1.501H3.486c-.824 0-1.49.671-1.49 1.5v10.948c0 .83.666 1.502 1.49 1.502h6.15v.555c0 .431-.107.871-.297 1.253l-.115.223a1.52 1.52 0 0 0 .058 1.477c.272.456.757.721 1.284.721h9.93c.56 0 1.062-.307 1.325-.804a1.505 1.505 0 0 0-.074-1.543ZM17.154 6.447c.041 0 .074.017.09.041.025.025.033.05.025.083-.041.423-.206 1.095-.716 1.933h-2.067c-.197-.465-.51-1.302-.658-2.049h3.326v-.008Zm-13.667 9.14c-.124 0-.23-.1-.23-.233V4.407c0-.125.098-.232.23-.232h7.138c.123 0 .23.099.23.232v5.15a3.785 3.785 0 0 0-.691.88V8.57h-6.06v6.295h5.533v.722h-6.15Zm5.73-5.292H8.46v-.771h.757v.771Zm-1.704 0h-.766v-.771h.766v.771Zm0 .954v.87h-.766v-.87h.766ZM5.8 10.295h-.74v-.771h.74v.771Zm-.74.954h.74v.87h-.74v-.87Zm0 1.825h.74v.829h-.74v-.83Zm1.687 0h.766v.829h-.766v-.83Zm1.713 0h.757v.829H8.46v-.83Zm.757-.954H8.46v-.871h.757v.87Zm11.494 7.572c-.025.05-.083.124-.214.124h-9.93a.24.24 0 0 1-.206-.116.223.223 0 0 1-.008-.232l.115-.224a4.031 4.031 0 0 0 .437-1.833v-5.01c0-1.45 1.169-2.637 2.618-2.637h3.878a2.63 2.63 0 0 1 2.618 2.638v4.785c0 .042 0 .083.008.116h-1.984v1.278h2.223c.107.298.255.588.436.862a.263.263 0 0 1 .009.249Z'
        />
        <path
          fill='currentColor'
          d='M10.213 4.97h-6.15v2.78h6.142V4.97h.008Zm-.955 1.834h-4.24v-.871h4.248v.87h-.008ZM15.754 14.226c-.346-.09-.625-.157-.625-.373 0-.157.172-.232.354-.232.214 0 .378.108.378.323h1.021c0-.613-.354-1.028-.971-1.152v-.365h-.816v.365c-.625.116-.996.497-.996 1.103 0 .837.675 1.003 1.21 1.144.346.083.635.158.635.382 0 .19-.206.298-.412.298-.23 0-.428-.124-.428-.373h-1.046c0 .672.412 1.111 1.079 1.236v.381h.815v-.39c.634-.116 1.054-.514 1.054-1.177 0-.854-.708-1.029-1.252-1.17Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxCalculatePrice.displayName = 'BxCalculatePrice'
}
