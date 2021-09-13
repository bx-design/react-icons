import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxChronometer2 = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M14.541 4.665V3.262h.507a.636.636 0 0 0 .642-.631.636.636 0 0 0-.642-.631H8.944a.636.636 0 0 0-.642.631c0 .349.287.63.642.63h.6v1.38C5.768 5.693 3 9.114 3 13.15 3 18.032 7.036 22 12 22s9-3.968 9-8.85c-.008-4.002-2.735-7.397-6.459-8.485Zm-3.715-1.403h2.432V4.39a9.066 9.066 0 0 0-2.431-.017V3.262ZM12 20.738c-4.255 0-7.717-3.404-7.717-7.588S7.745 5.562 12 5.562c4.255 0 7.717 3.404 7.717 7.588-.009 4.184-3.462 7.588-7.717 7.588Z'
        />
        <path
          fill='currentColor'
          d='M18.416 12.627c-.65-4.749-4.44-5.853-5.867-6.102A.465.465 0 0 0 12 6.98v5.72a.46.46 0 0 0 .464.457h5.488a.468.468 0 0 0 .464-.531ZM12 17.932a.636.636 0 0 0-.642.63v.582c0 .349.287.631.642.631a.636.636 0 0 0 .642-.631v-.581a.636.636 0 0 0-.642-.631ZM6.546 11.938h-.591a.636.636 0 0 0-.642.63c0 .35.287.64.642.64h.591a.636.636 0 0 0 .642-.631.643.643 0 0 0-.642-.64Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxChronometer2.displayName = 'BxChronometer2'
}
