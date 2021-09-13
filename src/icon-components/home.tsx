import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxHome = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
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
        d='M22 22h-7.753l-.009-5.791H9.83L9.82 22H2V10.712L11.966 2 22 10.645V22Zm-6.451-1.288h5.149v-9.478l-8.723-7.517-8.673 7.576v9.428H8.52l.009-5.792h7.012l.009 5.783Z'
      />
    </svg>
  )
})

if (__DEV__) {
  BxHome.displayName = 'BxHome'
}
