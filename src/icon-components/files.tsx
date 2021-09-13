import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxFiles = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M19.658 5.209H17.96v-1.85c0-.754-.655-1.359-1.45-1.359H4.36c-.796 0-1.45.614-1.45 1.36v14.062c0 .755.654 1.36 1.45 1.36h1.697v1.85c0 .754.655 1.359 1.45 1.359H19.64c.805 0 1.45-.614 1.45-1.36V6.57c.018-.747-.637-1.36-1.432-1.36ZM4.36 17.514c-.053 0-.098-.042-.098-.092V3.36c0-.05.045-.091.098-.091h12.132c.053 0 .097.041.097.09v1.85H7.517c-.805 0-1.45.613-1.45 1.36v10.945H4.36Zm15.395 3.117c0 .05-.044.091-.097.091H7.517c-.054 0-.098-.041-.098-.09V6.568c0-.05.044-.092.098-.092h12.132c.053 0 .097.042.097.092V20.63h.009Z'
        />
        <path
          fill='currentColor'
          d='M17.518 8.11H9.62c-.371 0-.68.283-.68.64 0 .356.309.63.68.63h7.888c.371 0 .68-.282.68-.639 0-.357-.3-.63-.671-.63ZM17.518 11.361H9.62c-.371 0-.68.282-.68.639 0 .356.3.638.68.638h7.888c.371 0 .68-.282.68-.638 0-.357-.3-.639-.671-.639ZM17.518 14.611H9.62c-.371 0-.68.282-.68.639 0 .348.3.638.68.638h7.888c.371 0 .68-.282.68-.638 0-.348-.3-.639-.671-.639ZM17.518 17.87H9.62c-.371 0-.68.282-.68.638 0 .357.3.639.68.639h7.888c.371 0 .68-.282.68-.639 0-.356-.3-.638-.671-.638Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxFiles.displayName = 'BxFiles'
}
