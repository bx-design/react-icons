import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxBox = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
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
        d='m20.09 8.242 1.748-1.955a.644.644 0 0 0-.28-1.036l-7.171-2.222a.621.621 0 0 0-.651.184l-1.814 2.03L10.15 3.22a.615.615 0 0 0-.659-.184L2.501 5.26a.637.637 0 0 0-.411.435.606.606 0 0 0 .123.584L4.027 8.4l-1.88 2.239a.649.649 0 0 0 .272 1.02l1.756.626V18.5c0 .259.157.493.396.593l7.178 2.865a.54.54 0 0 0 .231.042.697.697 0 0 0 .223-.042l7.12-2.706a.631.631 0 0 0 .405-.593v-6.266l1.821-.61a.66.66 0 0 0 .404-.409.634.634 0 0 0-.082-.568l-1.78-2.564Zm-8.101 1.896L6.433 8.375l4.92-1.42V9.67h1.254V6.955l4.879 1.42-5.498 1.763Zm2.398-5.773 5.843 1.813-1.186 1.328-5.918-1.729 1.26-1.412Zm-4.912.009 1.252 1.437L4.91 7.49 3.788 6.178l5.687-1.804Zm-4.509 4.87 5.984 1.905-1.467 1.662-5.786-2.055 1.27-1.512Zm.47 3.475 4.039 1.429a.646.646 0 0 0 .676-.175l1.211-1.37v7.827l-5.918-2.365V12.72h-.008Zm13.047 5.497-5.868 2.23v-8.01l1.137 1.503a.633.633 0 0 0 .7.217l4.04-1.345v5.405h-.009Zm-4.005-5.413-1.294-1.713 6.008-1.93 1.17 1.671-5.884 1.972Z'
      />
    </svg>
  )
})

if (__DEV__) {
  BxBox.displayName = 'BxBox'
}
