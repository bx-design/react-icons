import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxBell = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
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
        d='m22 18.272-2.464-4.165v-4.23C19.536 5.53 16.008 2 11.667 2 7.327 2 3.8 5.53 3.8 9.877v4.633L2 18.272h5.776C7.914 20.354 9.73 22 11.944 22c2.213 0 4.03-1.654 4.167-3.728H22Zm-16.861-3.49V9.877c0-3.638 2.931-6.593 6.528-6.593 3.597 0 6.528 2.963 6.528 6.593v4.567l1.505 2.552H4.084l1.055-2.214Zm6.805 5.942c-1.479 0-2.69-1.078-2.828-2.452h5.655c-.13 1.374-1.349 2.452-2.827 2.452Z'
      />
    </svg>
  )
})

if (__DEV__) {
  BxBell.displayName = 'BxBell'
}
