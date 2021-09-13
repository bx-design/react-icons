import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxPackagesTransport = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M19.426 12.319h-.074v-4.98a.793.793 0 0 0-.8-.794H13.08c-.446 0-.8.36-.8.794v4.98h-.545v-4.98a.805.805 0 0 0-.809-.794h-5.47c-.437 0-.8.36-.8.794v4.98h-.083A2.572 2.572 0 0 0 2 14.891c0 1.408 1.155 2.555 2.574 2.555h14.852A2.572 2.572 0 0 0 22 14.874a2.568 2.568 0 0 0-2.574-2.555Zm-4.117-4.53h1.023v1.36h-1.023V7.79Zm-1.774 0h.825v2.302h2.912V7.79h.825v4.529h-4.562v-4.53Zm-5.85 0h1.023v1.36H7.685V7.79Zm-1.774 0h.825v2.302h2.913V7.79h.825v4.529H5.91v-4.53Zm13.515 8.412H4.574a1.32 1.32 0 1 1 0-2.637h14.852a1.32 1.32 0 1 1 0 2.637Z'
        />
        <path
          fill='currentColor'
          d='M6.884 13.965a.902.902 0 1 0 0 1.802.902.902 0 1 0 0-1.802ZM10.457 13.965a.902.902 0 1 0 0 1.802.902.902 0 0 0 .908-.9.912.912 0 0 0-.908-.902ZM14.021 13.965a.902.902 0 1 0 0 1.802.902.902 0 1 0 0-1.802ZM17.594 13.965a.902.902 0 1 0 0 1.802.902.902 0 0 0 .908-.9.912.912 0 0 0-.908-.902Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxPackagesTransport.displayName = 'BxPackagesTransport'
}
