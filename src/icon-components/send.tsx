import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxSend = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
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
        d='M21.792 2.17a.656.656 0 0 0-.677-.125l-18.7 7.182A.651.651 0 0 0 2 9.815a.643.643 0 0 0 .39.596l8.232 3.504 4.104 7.745c.11.216.339.34.576.34h.059a.666.666 0 0 0 .567-.439l6.041-18.737a.618.618 0 0 0-.177-.655Zm-6.634 17.535-3.275-6.179 5.492-5.774a.62.62 0 0 0-.034-.894.654.654 0 0 0-.914.033l-5.491 5.774-6.592-2.817L20.32 3.702l-5.161 16.004Z'
      />
    </svg>
  )
})

if (__DEV__) {
  BxSend.displayName = 'BxSend'
}
