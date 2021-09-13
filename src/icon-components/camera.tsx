import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxCamera = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M21.016 5.994h-3.972l-.547-1.66a.663.663 0 0 0-.634-.463H8.246a.656.656 0 0 0-.625.437l-.616 1.686H3.05c-.547 0-.984.42-.984.933v12.299c0 .514.437.933.984.933h17.966c.539 0 .984-.42.984-.933v-12.3c0-.513-.445-.932-.984-.932Zm-.343 12.83H3.393V7.32h4.074c.282 0 .53-.17.625-.436l.616-1.686h6.676l.548 1.669a.655.655 0 0 0 .633.453h4.108v11.504Z'
        />
        <path
          fill='currentColor'
          d='M11.969 8.793a4.182 4.182 0 0 0-4.177 4.176 4.182 4.182 0 0 0 4.177 4.177 4.182 4.182 0 0 0 4.177-4.177 4.182 4.182 0 0 0-4.177-4.176Zm0 7.018a2.855 2.855 0 0 1-2.85-2.85 2.847 2.847 0 0 1 2.85-2.842 2.855 2.855 0 0 1 2.85 2.85 2.842 2.842 0 0 1-2.85 2.842ZM5.875 8.202a.994.994 0 1 0 .001 1.987.994.994 0 0 0-.001-1.987Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxCamera.displayName = 'BxCamera'
}
