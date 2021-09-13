import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxMessageSeen = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M20.862 5H8.482c-.635 0-1.146.553-1.146 1.237v7.975c0 .685.511 1.237 1.146 1.237h1.609v2.508a.638.638 0 0 0 .627.635c.115 0 .23-.033.33-.091l4.923-3.043h4.883c.626 0 1.146-.553 1.146-1.237V6.237C22.008 5.553 21.497 5 20.862 5Zm-.124 9.196H15.757c-.025 0-.05 0-.075.008a.152.152 0 0 0-.057.017c-.025.008-.042.008-.058.016a.133.133 0 0 0-.058.033c-.016.008-.024.008-.041.017l-4.116 2.54v-2.004a.635.635 0 0 0-.635-.635h-2.12l.01-7.934h12.14l-.009 7.942ZM6 6.229H2.635A.628.628 0 0 0 2 6.856c0 .346.28.635.635.635H6c.346 0 .635-.28.635-.635A.628.628 0 0 0 6 6.229ZM6 9.445H3.773a.635.635 0 0 0 0 1.27h2.219c.346 0 .635-.28.635-.635A.628.628 0 0 0 6 9.445ZM6 12.645H4.887a.635.635 0 0 0 0 1.27H6c.346 0 .635-.28.635-.635A.64.64 0 0 0 6 12.645Z'
        />
        <path
          fill='currentColor'
          d='M14.676 13.635c3.596 0 5.097-3.076 5.163-3.208l.116-.248-.124-.239c-.066-.124-1.633-3.126-5.08-3.126-3.431 0-5.147 2.978-5.221 3.101l-.14.248.123.255c.058.14 1.56 3.217 5.163 3.217Zm.074-5.715c2.268 0 3.539 1.64 3.95 2.276-.395.643-1.657 2.334-4.024 2.334s-3.62-1.666-4.016-2.318c.445-.643 1.814-2.292 4.09-2.292Z'
        />
        <path
          fill='currentColor'
          d='M14.676 11.911c.949 0 1.724-.775 1.724-1.723 0-.949-.775-1.724-1.724-1.724a1.723 1.723 0 1 0 0 3.447Zm0-2.334c.338 0 .619.28.619.619 0 .338-.28.618-.619.618a.623.623 0 0 1-.618-.618c0-.347.272-.619.618-.619Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxMessageSeen.displayName = 'BxMessageSeen'
}
