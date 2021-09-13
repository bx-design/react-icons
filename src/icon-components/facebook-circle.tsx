import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxFacebookCircle = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.52 2 12 2Zm1.382 18.601v-5.996h2.32l.444-2.873H13.39V9.856c0-.787.385-1.55 1.625-1.55h1.256V5.862s-1.139-.193-2.227-.193c-2.27 0-3.76 1.374-3.76 3.87v2.194H7.744v2.873h2.53v5.938c-3.979-.804-6.977-4.322-6.977-8.535 0-4.799 3.903-8.71 8.71-8.71 4.808 0 8.71 3.903 8.71 8.71-.008 4.322-3.19 7.932-7.336 8.593Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxFacebookCircle.displayName = 'BxFacebookCircle'
}
