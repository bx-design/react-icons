import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxFilePdf = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M20.507 10.944h-.33V8.091a.63.63 0 0 0-.194-.457l-4.705-4.46a.665.665 0 0 0-.44-.174H5.352c-.761 0-1.379.607-1.379 1.356v6.588h-.33a.637.637 0 0 0-.643.633v6.655c0 .349.288.632.643.632h.33v1.78c0 .749.618 1.356 1.38 1.356h13.445c.762 0 1.38-.607 1.38-1.356v-1.78h.33a.637.637 0 0 0 .642-.632v-6.655a.637.637 0 0 0-.643-.633ZM4.287 17.6v-5.39h15.577v5.39H4.286ZM15.294 4.947l3.054 2.895h-3.054V4.947ZM5.259 4.356c0-.05.043-.092.093-.092h8.657v4.21c0 .35.287.632.643.632H18.9v1.838H5.26V4.356Zm13.632 16.288c0 .05-.042.092-.093.092H5.352a.093.093 0 0 1-.093-.092v-1.78h13.632v1.78Z'
        />
        <path
          fill='currentColor'
          d='M8.957 13.049H7.603v3.452h.762V15.42h.592c.702 0 1.235-.508 1.235-1.19.009-.674-.524-1.181-1.235-1.181Zm-.034 1.689h-.55v-.99h.55c.305 0 .5.208.5.499 0 .291-.195.49-.5.49ZM12.054 13.049h-1.329v3.452h1.329c1.032 0 1.777-.732 1.777-1.73.008-.998-.736-1.722-1.777-1.722Zm-.017 2.762h-.55v-2.063h.55c.6 0 1.024.424 1.024 1.031 0 .6-.423 1.032-1.024 1.032ZM14.449 16.501h.753V15.18h1.21v-.674h-1.21v-.757h1.345v-.699H14.45v3.452Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxFilePdf.displayName = 'BxFilePdf'
}
