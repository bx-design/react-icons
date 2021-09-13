import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxEyeOff = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M21.86 11.661c-.083-.148-1.365-2.474-4.045-4.095l2.696-2.544a.573.573 0 0 0 0-.846.654.654 0 0 0-.893 0l-2.953 2.788c-1.257-.572-2.754-.956-4.508-.956-6.559 0-9.86 5.395-9.992 5.622L2 11.912l.14.282c.083.156 1.407 2.724 4.351 4.384l-2.547 2.404a.573.573 0 0 0 0 .846.637.637 0 0 0 .446.172.651.651 0 0 0 .447-.172l2.829-2.67c1.224.509 2.663.838 4.342.838 6.874 0 9.744-5.567 9.86-5.802l.132-.266-.14-.267Zm-18.43.298c.737-1.034 3.698-4.753 8.727-4.753a9.64 9.64 0 0 1 3.549.666l-1.241 1.174A4.032 4.032 0 0 0 12 8.216c-2.167 0-3.92 1.668-3.92 3.712 0 .877.322 1.683.868 2.325l-1.53 1.448A10.259 10.259 0 0 1 3.43 11.96Zm11.242-.024c0 1.394-1.2 2.522-2.664 2.522-.43 0-.835-.102-1.2-.275L14.39 10.8c.174.345.282.728.282 1.135Zm-5.335 0c0-1.393 1.199-2.52 2.663-2.52.587 0 1.125.18 1.563.485l-3.722 3.507a2.434 2.434 0 0 1-.504-1.472ZM12 16.798c-1.274 0-2.399-.22-3.375-.564l1.25-1.182a4.04 4.04 0 0 0 2.117.595c2.167 0 3.92-1.668 3.92-3.712 0-.736-.231-1.417-.62-1.996l1.588-1.503c2.076 1.174 3.276 2.857 3.69 3.507-.621 1.042-3.285 4.855-8.57 4.855Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxEyeOff.displayName = 'BxEyeOff'
}
