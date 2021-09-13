import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxFilter = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M18.338 3H5.662C4.748 3 4 3.734 4 4.64v1.266c0 .219.048.43.135.625 0 .008.016.032.024.047.056.117.12.234.207.344l4.254 5.25c.167.21.263.476.263.742v5.734a2.32 2.32 0 0 0 1.169 2.016 2.44 2.44 0 0 0 1.216.336c.39 0 .78-.094 1.146-.29l1.693-.905a2.343 2.343 0 0 0 1.249-2.063V12.82c0-.258.087-.515.254-.726l4.048-5.188c.223-.281.342-.64.342-1V4.641C20 3.734 19.253 3 18.338 3ZM5.662 4.156H18.33c.27 0 .485.219.485.477v1.101H5.177V4.641a.49.49 0 0 1 .485-.485Zm9.01 7.227a2.33 2.33 0 0 0-.493 1.43v4.921c0 .438-.239.836-.628 1.047l-1.694.907a1.203 1.203 0 0 1-1.193-.024 1.172 1.172 0 0 1-.588-1.023v-5.735c0-.531-.183-1.047-.517-1.46L5.853 6.897h12.326l-3.507 4.485Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxFilter.displayName = 'BxFilter'
}
