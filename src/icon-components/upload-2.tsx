import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxUpload2 = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M14.662 14.787a.612.612 0 0 0 .454-.192.639.639 0 0 0-.018-.902l-2.797-2.695a.637.637 0 0 0-.89.009l-2.683 2.695a.646.646 0 0 0 0 .901.64.64 0 0 0 .897 0l1.656-1.662v7.42c0 .35.288.639.636.639a.641.641 0 0 0 .636-.639v-7.36l1.665 1.602c.13.123.287.184.444.184Z'
        />
        <path
          fill='currentColor'
          d='M19.917 3H4.083C2.933 3 2 3.936 2 5.091v12.487c0 1.156.932 2.092 2.083 2.092h4.775a.641.641 0 0 0 .637-.639.641.641 0 0 0-.637-.639H4.083a.82.82 0 0 1-.82-.822V8.75h17.473v8.82a.82.82 0 0 1-.819.822h-4.932a.641.641 0 0 0-.636.64c0 .35.287.638.636.638h4.932c1.15 0 2.083-.936 2.083-2.092V5.091A2.087 2.087 0 0 0 19.917 3ZM3.264 7.48V5.091a.82.82 0 0 1 .819-.822h15.834a.82.82 0 0 1 .82.822v2.39H3.263Z'
        />
        <path
          fill='currentColor'
          d='M5.102 5.231a.801.801 0 0 0-.801.805.801.801 0 1 0 1.603 0 .796.796 0 0 0-.802-.805ZM7.43 5.231a.801.801 0 0 0-.803.805.801.801 0 1 0 1.604 0 .801.801 0 0 0-.802-.805ZM9.747 5.231a.801.801 0 0 0-.801.805.801.801 0 1 0 1.603 0 .801.801 0 0 0-.802-.805Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxUpload2.displayName = 'BxUpload2'
}
