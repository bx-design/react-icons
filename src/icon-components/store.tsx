import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxStore = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M12.917 19.056h6.213V13.81h-6.213v5.247Zm1.303-3.942h3.599v2.645h-3.6v-2.645Z'
        />
        <path
          fill='currentColor'
          d='M20.415 2H3.534L2.017 5.677v3.345H2c0 .103.009.196.017.299V22l4.233-.017-.017-6.766h4.028v6.774h11.748V5.686L20.415 2ZM6.602 6.454v2.355c0 .299-.095.58-.249.81-.368.53-.883.794-1.534.794h-.043c-.805-.017-1.37-.512-1.456-1.22v-2.74h3.282Zm1.31 2.355V6.453h3.334V8.81c0 .299-.094.58-.249.81-.368.52-.882.785-1.533.785H9.42a1.53 1.53 0 0 1-1.508-1.527V8.81Zm4.645 0V6.453h3.342v2.339c0 .307-.086.597-.257.836-.369.52-.883.785-1.534.785h-.043a1.542 1.542 0 0 1-1.508-1.536V8.81Zm4.739-2.355h3.341v2.338c0 .307-.085.597-.256.836-.369.52-.883.785-1.534.785h-.043a1.542 1.542 0 0 1-1.508-1.536V6.454Zm2.262-3.149.797 1.852H3.645l.763-1.852h15.15Zm-7.995 17.381v-6.775H4.922l.017 6.775-1.62.009v-9.37c.412.24.9.376 1.432.385h.068c1.183 0 1.937-.538 2.4-1.084a2.838 2.838 0 0 0 2.176 1.084h.069c.96 0 1.8-.384 2.399-1.084a2.838 2.838 0 0 0 2.176 1.084h.069c.985 0 1.842-.41 2.45-1.143a2.827 2.827 0 0 0 2.229 1.143h.068c.694 0 1.32-.205 1.843-.572v9.557h-9.135v-.009Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxStore.displayName = 'BxStore'
}
