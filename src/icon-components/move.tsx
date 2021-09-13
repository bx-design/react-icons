import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxMove = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
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
        d='M21.805 11.477 19 8.669a.659.659 0 1 0-.933.933l1.732 1.733h-7.137V4.269l1.74 1.675a.642.642 0 0 0 .458.183c.175 0 .35-.066.475-.2a.667.667 0 0 0-.017-.933l-2.923-2.808a.656.656 0 0 0-.924.009l-2.799 2.8a.659.659 0 1 0 .933.933l1.732-1.734v7.141H4.274l1.674-1.741a.66.66 0 0 0-.025-.934.651.651 0 0 0-.933.017l-2.807 2.925a.664.664 0 0 0 .009.925l2.806 2.807c.134.134.3.192.467.192a.659.659 0 0 0 .466-1.125L4.2 12.66h7.137V19.725l-1.74-1.674a.674.674 0 0 0-.933.025.667.667 0 0 0 .017.933l2.923 2.808a.641.641 0 0 0 .458.183.67.67 0 0 0 .466-.192L15.334 19a.659.659 0 1 0-.933-.933L12.67 19.8v-7.14h7.063L18.058 14.4a.667.667 0 0 0 .016.933.642.642 0 0 0 .458.184c.175 0 .35-.067.475-.2l2.807-2.925a.646.646 0 0 0-.009-.916Z'
      />
    </svg>
  )
})

if (__DEV__) {
  BxMove.displayName = 'BxMove'
}
