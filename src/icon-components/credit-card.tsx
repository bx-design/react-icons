import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxCreditCard = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M19.505 5H4.495C3.117 5 2 5.977 2 7.182v9.272c0 1.205 1.117 2.182 2.495 2.182h15.01c1.378 0 2.495-.977 2.495-2.181V7.181C22 5.977 20.883 5 19.505 5ZM3.445 9.242h17.11v1.042H3.445V9.242ZM4.495 6.4h15.01c.571 0 1.05.358 1.05.782v.66H3.445v-.66c0-.424.479-.782 1.05-.782Zm15.01 10.836H4.495c-.571 0-1.05-.358-1.05-.782v-4.77h17.11v4.779c0 .415-.479.773-1.05.773Z'
        />
        <path
          fill='currentColor'
          d='M17.28 12.23c-.521 0-1 .17-1.387.463a2.336 2.336 0 0 0-1.386-.464c-1.251 0-2.268.985-2.268 2.198s1.017 2.198 2.268 2.198c.513 0 .992-.162 1.386-.463.387.284.866.463 1.386.463 1.252 0 2.268-.985 2.268-2.198s-1.016-2.198-2.268-2.198Zm-2.773 2.995a.812.812 0 0 1-.823-.798c0-.44.37-.797.823-.797a.84.84 0 0 1 .58.236c-.05.179-.076.366-.076.561 0 .196.026.383.076.562a.825.825 0 0 1-.58.236Zm2.772 0a.812.812 0 0 1-.823-.798c0-.44.37-.797.823-.797.454 0 .823.358.823.797 0 .44-.37.798-.823.798Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxCreditCard.displayName = 'BxCreditCard'
}
