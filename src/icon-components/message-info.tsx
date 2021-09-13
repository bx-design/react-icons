import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxMessageInfo = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M20.933 6H8.503c-.627 0-1.145.533-1.145 1.186v7.627c0 .652.518 1.186 1.145 1.186h1.614v2.396c0 .215.125.422.326.525.1.048.2.08.309.08a.695.695 0 0 0 .334-.088l4.949-2.905h4.907c.635 0 1.145-.534 1.145-1.186V7.186c0-.653-.518-1.186-1.154-1.186Zm-.125 8.789h-4.957c-.017 0-.025 0-.042.008-.025 0-.05 0-.067.008a.125.125 0 0 0-.058.016c-.017.008-.042.008-.059.015a.258.258 0 0 0-.066.032c-.009.008-.026.008-.034.016l-4.13 2.428v-1.918c0-.335-.284-.605-.635-.605H8.63l.008-7.579h12.188l-.017 7.579ZM6.012 7.17H2.635c-.35 0-.635.27-.635.605 0 .335.284.605.635.605h3.377c.351 0 .636-.27.636-.605 0-.334-.285-.605-.636-.605ZM6.012 10.243H3.781c-.352 0-.636.27-.636.605 0 .334.284.605.635.605h2.232c.351 0 .636-.27.636-.605 0-.334-.285-.605-.636-.605ZM6.012 13.308H4.901c-.351 0-.636.27-.636.605 0 .334.285.605.636.605h1.111c.351 0 .636-.27.636-.605 0-.334-.285-.605-.636-.605Z'
        />
        <path
          fill='currentColor'
          d='M14.73 11.883c.436-.008.787-.342.787-.764l-.034-2.412a.748.748 0 0 0-.752-.717c-.418-.008-.77.319-.77.717l-.024 2.412v.016c0 .422.36.756.794.748ZM14.723 13.985c.526 0 .952-.407.952-.908 0-.501-.426-.907-.952-.907-.527 0-.953.406-.953.907s.426.908.953.908Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxMessageInfo.displayName = 'BxMessageInfo'
}
