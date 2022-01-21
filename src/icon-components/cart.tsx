import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxCart = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
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
        d='M21.868 5.608a.676.676 0 0 0-.51-.23H7.548L7.225 3.42c-.051-.301-.323-.515-.646-.515H2.65c-.366 0-.655.27-.655.61 0 .341.29.61.655.61h3.376L7.965 15.73c.204 1.181 1.292 2.045 2.576 2.045h8.444c.358 0 .655-.27.655-.61 0-.333-.289-.61-.655-.61h-8.444c-.646 0-1.19-.429-1.292-1.023l-.196-1.181h9.44c.799 0 1.487-.507 1.675-1.229l1.81-6.99a.583.583 0 0 0-.11-.523Zm-2.959 7.228a.414.414 0 0 1-.408.301H8.84L7.752 6.591h12.773l-1.616 6.245ZM10.1 21.095c.765 0 1.385-.578 1.385-1.292 0-.713-.62-1.292-1.386-1.292-.765 0-1.386.579-1.386 1.292 0 .713.62 1.292 1.386 1.292ZM17.574 21.095c.765 0 1.386-.578 1.386-1.292 0-.713-.62-1.292-1.386-1.292-.766 0-1.386.579-1.386 1.292 0 .713.62 1.292 1.386 1.292Z'
      />
    </svg>
  )
})

if (__DEV__) {
  BxCart.displayName = 'BxCart'
}
