import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxEdit2 = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='m21.468 6.028-3.94-3.602c-.31-.275-.701-.426-1.11-.426H4.149A2.143 2.143 0 0 0 2 4.147v15.706A2.15 2.15 0 0 0 4.147 22h15.706A2.15 2.15 0 0 0 22 19.853V7.235c0-.452-.195-.896-.532-1.207ZM17.457 4.13l2.546 2.333h-2.395a.15.15 0 0 1-.151-.15V4.13Zm2.396 16.557H4.147a.848.848 0 0 1-.843-.843V4.147c0-.461.382-.843.843-.843h12.006v3.008c0 .808.656 1.456 1.455 1.456h3.088v12.085a.84.84 0 0 1-.843.834Z'
        />
        <path
          fill='currentColor'
          d='M16.863 14.715a3.905 3.905 0 0 0-.843-1.464L8.85 5.47a.85.85 0 0 0-1.189-.044l-2.227 2.05a.85.85 0 0 0-.044 1.189l7.16 7.764c.39.426.887.763 1.429.976l2.236.87c.124.044.248.07.372.07.258 0 .506-.097.701-.275.293-.275.4-.674.284-1.056l-.71-2.298Zm-8.66-8.012.966 1.056-1.543 1.42-.959-1.057 1.535-1.42Zm6.246 9.485a2.533 2.533 0 0 1-.94-.639l-4.996-5.412 1.544-1.42 5.004 5.43c.249.275.444.604.55.959l.542 1.748-1.704-.666Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxEdit2.displayName = 'BxEdit2'
}
