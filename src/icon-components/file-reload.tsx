import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxFileReload = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M5.88 6.769h8.916a.627.627 0 0 0 0-1.257H5.881a.615.615 0 0 0-.627.62c0 .347.28.637.627.637ZM14.796 17.281H5.881a.627.627 0 0 0 0 1.256h8.915a.627.627 0 0 0 0-1.256Z'
        />
        <path
          fill='currentColor'
          d='M21.996 12c0-2.198-1.36-4.09-3.274-4.868V3.546c0-.852-.693-1.546-1.542-1.546H3.538c-.85 0-1.542.694-1.542 1.545v16.91c0 .85.693 1.545 1.542 1.545H17.18c.85 0 1.542-.694 1.542-1.546v-3.586A5.272 5.272 0 0 0 21.996 12Zm-4.536 8.454a.278.278 0 0 1-.28.281H3.538a.278.278 0 0 1-.28-.28V3.544c0-.157.124-.28.28-.28H17.18c.156 0 .28.123.28.28v3.248a5.044 5.044 0 0 0-.718-.057 5.253 5.253 0 0 0-4.577 2.694H5.881a.627.627 0 0 0 0 1.256h5.781a5.248 5.248 0 0 0-.173 1.306c0 .47.066.925.181 1.363H5.88a.627.627 0 0 0 0 1.257h6.244c.025 0 .05-.009.074-.009a5.246 5.246 0 0 0 4.544 2.645c.248 0 .479-.025.718-.058v3.264Zm-.718-4.462a4 4 0 0 1-3.991-4 4 4 0 0 1 3.992-4 4 4 0 0 1 3.991 4 4 4 0 0 1-3.992 4Z'
        />
        <path
          fill='currentColor'
          d='M18.03 9.025a.428.428 0 0 0-.603 0 .43.43 0 0 0 0 .603l.429.43h-3.258c-.23 0-.429.19-.429.43 0 .231.19.43.43.43h3.24l-.42.437a.43.43 0 0 0 .008.604.41.41 0 0 0 .297.115.4.4 0 0 0 .305-.132l1.13-1.182a.427.427 0 0 0-.008-.595l-1.122-1.14ZM18.862 13.107h-3.241l.42-.438a.422.422 0 0 0-.016-.603.42.42 0 0 0-.602.017l-1.13 1.181a.427.427 0 0 0 .008.596l1.13 1.132a.418.418 0 0 0 .594 0 .43.43 0 0 0 0-.604l-.429-.43h3.258c.23 0 .429-.19.429-.43a.428.428 0 0 0-.42-.42Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxFileReload.displayName = 'BxFileReload'
}
