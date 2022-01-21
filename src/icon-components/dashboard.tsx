import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxDashboard = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M19.92 1.991H4.07c-1.147 0-2.08.994-2.08 2.216v15.576c0 1.223.933 2.216 2.08 2.216H19.92c1.147 0 2.08-.993 2.08-2.216V4.207c.008-1.222-.925-2.216-2.08-2.216ZM4.07 3.345H19.92c.454 0 .817.387.817.871V6.16H3.262V4.207c0-.475.363-.862.81-.862ZM19.92 20.663H4.07c-.454 0-.817-.387-.817-.871V7.505h17.483v12.278c0 .484-.363.88-.817.88Z'
        />
        <path
          fill='currentColor'
          d='M5.095 5.676c.445 0 .809-.387.809-.862s-.364-.862-.81-.862c-.445 0-.8.387-.8.862s.355.862.8.862ZM7.423 5.676c.445 0 .808-.387.808-.862s-.363-.862-.808-.862c-.446 0-.81.387-.81.862s.364.862.81.862ZM9.742 5.676c.446 0 .809-.387.809-.862s-.363-.862-.809-.862c-.446 0-.809.387-.809.862s.363.862.809.862ZM4.665 13.565h4.268c.347 0 .636-.299.636-.677V9.124c0-.37-.281-.678-.636-.678H4.665c-.346 0-.635.3-.635.678v3.764c0 .37.289.677.635.677Zm.636-3.773h3.005v2.419H5.3V9.792ZM10.65 13.565h2.716c.346 0 .635-.299.635-.677V9.124c0-.37-.28-.678-.635-.678H10.65c-.347 0-.636.3-.636.678v3.764c.009.37.29.677.636.677Zm.636-3.773h1.444v2.419h-1.444V9.792ZM18.962 14.497H4.665c-.346 0-.635.3-.635.678v4.063c0 .37.28.677.635.677h14.297c.347 0 .636-.299.636-.677v-4.063c0-.37-.289-.678-.636-.678Zm-.635 4.072H5.3v-2.717h13.026v2.717ZM17.105 8.253c-1.37 0-2.493 1.187-2.493 2.656 0 1.46 1.114 2.656 2.493 2.656 1.378 0 2.493-1.187 2.493-2.656 0-1.46-1.114-2.656-2.493-2.656Zm0 3.958c-.677 0-1.222-.58-1.222-1.302 0-.721.545-1.302 1.222-1.302.677 0 1.222.58 1.222 1.302 0 .721-.545 1.302-1.222 1.302Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxDashboard.displayName = 'BxDashboard'
}
