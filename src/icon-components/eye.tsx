import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxEye = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
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
        d='M21.867 11.638c-.124-.242-3.129-6.007-9.71-6.007-6.565 0-9.868 5.74-10.009 5.982l-.157.292.14.3c.117.25 2.99 6.173 9.869 6.173s9.752-5.924 9.867-6.174l.133-.283-.133-.283ZM12 17.103c-5.307 0-7.931-3.999-8.577-5.148.737-1.108 3.7-5.057 8.734-5.057 5.091 0 7.782 3.932 8.427 5.04-.629 1.125-3.245 5.165-8.584 5.165Z'
      />
      <path
        fill='currentColor'
        d='M12 7.972c-2.17 0-3.924 1.775-3.924 3.95 0 2.174 1.763 3.948 3.924 3.948 2.16 0 3.924-1.774 3.924-3.949 0-2.174-1.755-3.949-3.924-3.949Zm0 6.64c-1.474 0-2.666-1.208-2.666-2.682 0-1.483 1.2-2.683 2.666-2.683 1.465 0 2.665 1.208 2.665 2.683A2.667 2.667 0 0 1 12 14.612Z'
      />
    </svg>
  )
})

if (__DEV__) {
  BxEye.displayName = 'BxEye'
}
