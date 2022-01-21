import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxChat = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
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
        d='M12.124 2C6.688 2 2.267 6.481 2.267 12c0 1.666.411 3.307 1.2 4.77l-1.435 4.387a.633.633 0 0 0 .596.834.486.486 0 0 0 .193-.034l4.228-1.403a9.771 9.771 0 0 0 5.092 1.437c5.436 0 9.865-4.482 9.865-10C21.99 6.481 17.57 2 12.124 2Zm0 18.724a8.534 8.534 0 0 1-4.672-1.395.6.6 0 0 0-.336-.102.59.59 0 0 0-.268.06L3.6 20.367l1.1-3.368a.642.642 0 0 0-.018-.603 8.827 8.827 0 0 1-1.174-4.388c.008-4.821 3.876-8.733 8.615-8.733 4.748 0 8.607 3.912 8.607 8.725 0 4.812-3.859 8.724-8.607 8.724Z'
      />
      <path
        fill='currentColor'
        d='M8.878 12.85c.52 0 .94-.426.94-.952a.946.946 0 0 0-.94-.953.946.946 0 0 0-.94.953c0 .526.421.952.94.952ZM12.3 10.945c-.52 0-.939.425-.939.953 0 .527.42.952.94.952s.94-.425.94-.952a.95.95 0 0 0-.94-.953ZM15.715 12.85c.52 0 .94-.426.94-.952a.946.946 0 0 0-.94-.953.946.946 0 0 0-.94.953c0 .526.421.952.94.952Z'
      />
    </svg>
  )
})

if (__DEV__) {
  BxChat.displayName = 'BxChat'
}
