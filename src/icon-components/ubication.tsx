import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxUbication = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M11.988 12.78c1.756 0 3.188-1.465 3.188-3.264 0-1.8-1.432-3.265-3.188-3.265-1.757 0-3.189 1.466-3.189 3.265 0 1.799 1.432 3.265 3.189 3.265Zm0-5.197c1.04 0 1.887.867 1.887 1.933s-.846 1.932-1.887 1.932c-1.042 0-1.887-.866-1.887-1.932 0-1.066.845-1.933 1.886-1.933Z'
        />
        <path
          fill='currentColor'
          d='m21.073 20.61-.886-5.556a1.188 1.188 0 0 0-1.163-1.016h-1.229a6.66 6.66 0 0 0 1.033-1.8 7.587 7.587 0 0 0 .48-3.223c-.236-3.756-3.18-6.77-6.856-7.004a7.203 7.203 0 0 0-5.49 2.032 7.61 7.61 0 0 0-2.31 5.472c0 .133 0 .267.007.392.074 1.474.627 2.915 1.57 4.13H5.107c-.57 0-1.058.417-1.155.983l-1.025 5.556c-.065.358.024.716.252.99.228.276.553.434.911.434h15.828c.35 0 .675-.158.895-.425a1.21 1.21 0 0 0 .26-.966ZM5.945 9.514c0-1.724.675-3.323 1.903-4.506a5.896 5.896 0 0 1 4.132-1.674c.13 0 .26.009.39.009 3.018.191 5.442 2.673 5.637 5.763a6.275 6.275 0 0 1-.399 2.657c-.26.675-.683 1.324-1.252 1.932l-4.173 4.381a.267.267 0 0 1-.195.083.256.256 0 0 1-.195-.083L7.66 13.705c-1.025-1.091-1.635-2.457-1.7-3.857-.008-.116-.016-.225-.016-.333ZM4.22 20.675l.976-5.313h2.229l3.432 3.631a1.545 1.545 0 0 0 2.253.009l3.465-3.632h2.343l.846 5.314H4.22v-.008Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxUbication.displayName = 'BxUbication'
}
