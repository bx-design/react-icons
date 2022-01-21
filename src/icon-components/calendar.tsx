import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxCalendar = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M8.53 11.757H6.054v2.325h2.474v-2.325ZM8.53 15.426H6.054v2.325h2.474v-2.325ZM13.237 11.757h-2.474v2.325h2.474v-2.325ZM13.237 15.426h-2.474v2.325h2.474v-2.325ZM17.98 11.757h-2.475v2.325h2.474v-2.325ZM17.98 15.426h-2.475v2.325h2.474v-2.325Z'
        />
        <path
          fill='currentColor'
          d='M19.921 4.332h-1.486V2.909h-1.263v1.423h-9.51V2.909H6.39v1.423H4.079C2.936 4.332 2 5.277 2 6.44v12.552c0 1.162.936 2.099 2.079 2.099h15.842A2.09 2.09 0 0 0 22 18.99V6.44c0-1.163-.928-2.108-2.079-2.108ZM4.079 5.616H6.39V7.35h1.263V5.616h9.51V7.35h1.263V5.616h1.486c.447 0 .817.373.817.824v2.22H3.262V6.44c0-.46.37-.824.816-.824Zm15.842 14.2H4.079a.825.825 0 0 1-.816-.824V9.935h17.474v9.048c0 .46-.37.833-.816.833Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxCalendar.displayName = 'BxCalendar'
}
