import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxMaximize2 = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M21.985 12.095c0-.702-.57-1.273-1.271-1.273-.702 0-1.272.57-1.272 1.273v5.574L6.327 4.531h5.658c.702 0 1.272-.57 1.272-1.273C13.257 2.556 12.687 2 12 2H3.272c-.088 0-.176.015-.249.03-.043 0-.073.014-.117.029-.043.014-.087.014-.117.043-.043.015-.087.044-.131.059a.306.306 0 0 0-.088.058c-.146.088-.263.22-.35.352a.306.306 0 0 0-.06.087c-.028.044-.043.088-.058.132-.029.03-.029.073-.044.117-.014.044-.029.073-.029.117A1.29 1.29 0 0 0 2 3.273v8.734a1.273 1.273 0 0 0 2.544-.015V6.332l13.114 13.123H12A1.273 1.273 0 0 0 12 22h8.728c.088 0 .16-.015.249-.03.043-.014.073-.014.117-.028l.131-.044c.044-.015.088-.044.117-.059l.088-.044c.146-.088.263-.22.35-.351.015-.03.03-.058.06-.102a.442.442 0 0 0 .058-.117l.044-.132a.272.272 0 0 0 .029-.102c.014-.088.029-.161.029-.25v-8.646h-.015Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxMaximize2.displayName = 'BxMaximize2'
}
