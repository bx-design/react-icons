import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxClip = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
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
        d='M13.067 22c-.444 0-2.321-.137-3.209-2.381a5.002 5.002 0 0 1-.332-1.859V7.388a2.576 2.576 0 0 1 2.568-2.579 2.576 2.576 0 0 1 2.568 2.579v7.991a.677.677 0 0 1-.674.677.677.677 0 0 1-.674-.677V7.388c0-.677-.546-1.225-1.22-1.225-.674 0-1.22.548-1.22 1.225v10.364c0 .505.076.968.239 1.361.614 1.55 1.843 1.542 1.98 1.534h.033c1.4 0 2.543-1.148 2.543-2.553V5.897a2.554 2.554 0 0 0-2.543-2.552H11.08a2.747 2.747 0 0 0-2.74 2.75v12a.677.677 0 0 1-.673.676.664.664 0 0 1-.666-.677v-12A4.086 4.086 0 0 1 11.079 2h2.039A3.893 3.893 0 0 1 17 5.897v12.197c0 2.141-1.732 3.889-3.865 3.897-.017.009-.043.009-.068.009Z'
      />
    </svg>
  )
})

if (__DEV__) {
  BxClip.displayName = 'BxClip'
}
