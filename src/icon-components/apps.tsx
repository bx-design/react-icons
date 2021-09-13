import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxApps = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
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
        d='M9.192 1.991H4.03c-1.12 0-2.038.93-2.038 2.062v5.214c0 1.14.919 2.061 2.038 2.061h5.163c1.128 0 2.039-.93 2.039-2.061V4.053c0-1.132-.91-2.062-2.039-2.062Zm.727 7.284a.732.732 0 0 1-.727.735H4.03a.732.732 0 0 1-.726-.735V4.053c0-.406.325-.735.726-.735h5.163c.401 0 .727.33.727.735v5.222ZM19.961 1.991h-5.154c-1.128 0-2.039.93-2.039 2.062v5.214c0 1.14.92 2.061 2.039 2.061h5.154c1.128 0 2.039-.93 2.039-2.061V4.053a2.048 2.048 0 0 0-2.039-2.062Zm.736 7.284a.732.732 0 0 1-.727.735h-5.155a.732.732 0 0 1-.727-.735V4.053c0-.406.326-.735.727-.735h5.155c.4 0 .727.33.727.735v5.222ZM9.192 12.663H4.03c-1.12 0-2.038.921-2.038 2.062v5.222c0 1.14.919 2.062 2.038 2.062h5.163c1.128 0 2.039-.93 2.039-2.062v-5.222c0-1.14-.91-2.062-2.039-2.062Zm.727 7.276a.732.732 0 0 1-.727.735H4.03a.732.732 0 0 1-.726-.735v-5.222c0-.406.325-.736.726-.736h5.163c.401 0 .727.33.727.736v5.222ZM19.961 12.663h-5.154c-1.128 0-2.039.93-2.039 2.062v5.222c0 1.14.92 2.062 2.039 2.062h5.154c1.128 0 2.039-.93 2.039-2.062v-5.222a2.042 2.042 0 0 0-2.039-2.062Zm.736 7.276a.731.731 0 0 1-.727.735h-5.155a.732.732 0 0 1-.727-.735v-5.222c0-.406.326-.736.727-.736h5.155c.4 0 .727.33.727.736v5.222Z'
      />
    </svg>
  )
})

if (__DEV__) {
  BxApps.displayName = 'BxApps'
}
