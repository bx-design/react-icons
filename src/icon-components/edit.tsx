import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxEdit = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
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
        d='M18.196 19.892c0 .42-.34.765-.756.765H4.085a.763.763 0 0 1-.756-.765V6.374c0-.42.34-.765.756-.765h8.314V4.264H4.085C2.938 4.264 2 5.214 2 6.374v13.518c0 1.16.938 2.11 2.085 2.11H17.44c1.146 0 2.085-.95 2.085-2.11v-7.835h-1.329v7.835Z'
      />
      <path
        fill='currentColor'
        d='M21.203 3.17a3.315 3.315 0 0 0-2.376-1.168 3.356 3.356 0 0 0-2.466.959l-7.733 7.7a1.32 1.32 0 0 0-.374.723l-.59 3.54c-.074.428.075.866.383 1.168a1.29 1.29 0 0 0 1.162.345l3.904-.832c.25-.05.482-.177.656-.362l7.276-7.499c1.213-1.26 1.28-3.262.158-4.573Zm-1.088 3.607-7.268 7.491-3.87.832.573-3.48 7.732-7.693c.374-.378.873-.58 1.396-.58h.083a1.971 1.971 0 0 1 1.428.698c.682.79.64 1.993-.074 2.732Z'
      />
    </svg>
  )
})

if (__DEV__) {
  BxEdit.displayName = 'BxEdit'
}
