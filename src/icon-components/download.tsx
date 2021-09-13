import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxDownload = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M11.518 16.205c.162.153.36.225.568.225a.8.8 0 0 0 .576-.243l4.282-4.268a.828.828 0 0 0 0-1.159.834.834 0 0 0-1.163 0l-2.974 2.965V2.818c0-.45-.37-.818-.82-.818a.814.814 0 0 0-.812.818v10.8L8.192 10.76a.815.815 0 0 0-1.154.027.801.801 0 0 0 .027 1.15l4.453 4.268Z'
        />
        <path
          fill='currentColor'
          d='M20.18 15.603c-.45 0-.82.368-.82.818v3.953H4.64v-3.729c0-.45-.37-.817-.82-.817-.45 0-.82.368-.82.817v4.537c0 .45.37.818.82.818h16.36c.45 0 .82-.368.82-.818v-4.77a.82.82 0 0 0-.82-.81Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxDownload.displayName = 'BxDownload'
}
