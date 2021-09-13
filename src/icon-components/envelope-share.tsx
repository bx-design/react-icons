import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxEnvelopeShare = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='m11.183 11.125 7.702-2.969v.87a.635.635 0 1 0 1.271 0V6.2A2.215 2.215 0 0 0 17.95 4H4.198C2.988 4 2 4.987 2 6.2v10.177c0 1.213.987 2.2 2.2 2.2h6.247a.635.635 0 1 0 0-1.271H4.2a.935.935 0 0 1-.937-.937V8.232l7.92 2.893ZM4.199 5.263H17.94c.519 0 .937.418.937.936v.603L11.166 9.77 3.263 6.885V6.2c0-.51.426-.936.936-.936ZM21.996 13.45v-.1c0-.017-.008-.034-.016-.059 0-.008-.009-.025-.009-.033l-.025-.05c-.008-.008-.008-.017-.017-.034-.016-.025-.033-.05-.058-.075l-1.598-1.647a.475.475 0 0 0-.669-.009.475.475 0 0 0-.008.67l.694.71c-1.764-.017-4.081.56-5.034 2.844-.1.242.016.518.25.618a.478.478 0 0 0 .184.034.47.47 0 0 0 .435-.293c.51-1.22 1.54-1.948 3.053-2.183a6.928 6.928 0 0 1 1.213-.066l-.937.81a.476.476 0 0 0 .31.837.493.493 0 0 0 .309-.117l1.764-1.53c.009 0 .009-.009.009-.009l.025-.025c.008-.017.025-.025.033-.042.009-.008.017-.025.025-.033.009-.017.017-.025.026-.042.008-.017.008-.025.016-.042.009-.017.009-.033.017-.05v-.05c0-.009.008-.025.008-.034 0 .009.009.009 0 0Z'
        />
        <path
          fill='currentColor'
          d='M19.395 16.478a.635.635 0 0 0-.635.635v.753H14.05v-4.708h1.698a.635.635 0 1 0 0-1.272h-2.325a.635.635 0 0 0-.635.636v5.971c0 .352.284.636.635.636h5.971a.635.635 0 0 0 .636-.636v-1.38a.64.64 0 0 0-.636-.635Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxEnvelopeShare.displayName = 'BxEnvelopeShare'
}
