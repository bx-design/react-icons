import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxStar = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
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
        d='M21.943 9.582a1.208 1.208 0 0 0-.96-.855l-5.463-.855L13.103 2.7C12.896 2.268 12.49 2 12.027 2h-.009c-.455 0-.869.268-1.076.69l-2.45 5.156-5.463.803c-.455.07-.828.389-.969.847-.14.457-.033.95.298 1.286l3.932 4.033-.96 5.665c-.083.475.1.941.472 1.226.372.285.852.32 1.258.104l4.892-2.66 4.876 2.703a1.146 1.146 0 0 0 1.258-.086c.372-.276.554-.752.48-1.218l-.91-5.673 3.964-3.999c.34-.354.464-.837.323-1.295Zm-5.53 4.24c-.28.285-.413.7-.347 1.106l.811 5.077-4.354-2.418a1.192 1.192 0 0 0-.563-.147c-.19 0-.38.044-.554.139l-4.38 2.374.853-5.069a1.28 1.28 0 0 0-.339-1.105l-3.51-3.61 4.884-.716a1.2 1.2 0 0 0 .902-.683l2.202-4.602 2.169 4.628c.174.372.513.63.902.691l4.876.76-3.551 3.575Z'
      />
    </svg>
  )
})

if (__DEV__) {
  BxStar.displayName = 'BxStar'
}
