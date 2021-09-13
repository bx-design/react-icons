import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxTip = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
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
        d='M11.996 3C8.137 3 5 6.225 5 10.218c.008 1.545.586 3.098 1.645 4.374.264.325.537.602.802.832.778.673.834 1.885.834 1.885v3.027c0 .92.755 1.664 1.685 1.664h3.956c.93 0 1.684-.745 1.684-1.664V17.46c.016-.697.337-1.363.907-1.87 1.404-1.268 1.917-2.56 1.941-2.607A7.353 7.353 0 0 0 19 10.194C18.992 6.224 15.855 3 11.996 3Zm1.925 17.685H9.966a.354.354 0 0 1-.353-.349v-2.29h4.67v2.29a.366.366 0 0 1-.361.349Zm3.29-8.185c-.008.008-.433 1.07-1.597 2.116a4.026 4.026 0 0 0-1.251 2.115h-1.701v-4.865h1.05a.66.66 0 0 0 .667-.657.66.66 0 0 0-.666-.658h-3.434a.66.66 0 0 0-.666.658.66.66 0 0 0 .666.657h1.051v4.865H9.541c-.112-.61-.417-1.6-1.22-2.298a5.308 5.308 0 0 1-.641-.673c-.859-1.046-1.34-2.306-1.348-3.574 0-3.24 2.543-5.879 5.664-5.879 3.12 0 5.664 2.639 5.664 5.88a5.86 5.86 0 0 1-.45 2.313Z'
      />
    </svg>
  )
})

if (__DEV__) {
  BxTip.displayName = 'BxTip'
}
