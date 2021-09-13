import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxReloadTime = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M13.387 2.85c-4.631 0-8.42 3.681-8.62 8.274l-1.7-1.628a.635.635 0 0 0-.908.016.654.654 0 0 0 .017.91l2.832 2.723a.63.63 0 0 0 .891-.017l2.715-2.722a.642.642 0 1 0-.908-.91l-1.665 1.67c.175-3.908 3.398-7.04 7.338-7.04 4.048 0 7.347 3.307 7.347 7.365s-3.299 7.365-7.347 7.365a7.352 7.352 0 0 1-4.132-1.27.641.641 0 1 0-.724 1.061 8.566 8.566 0 0 0 4.848 1.495c4.756 0 8.629-3.883 8.629-8.65 0-4.769-3.857-8.643-8.613-8.643Z'
        />
        <path
          fill='currentColor'
          d='M13.545 7.402a.628.628 0 0 0-.635.63v4.151c0 .254.148.475.38.582l3.257 1.4c.082.032.165.049.255.049a.626.626 0 0 0 .256-1.204l-2.878-1.236V8.032c0-.343-.28-.63-.635-.63Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxReloadTime.displayName = 'BxReloadTime'
}
