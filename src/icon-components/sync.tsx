import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxSync = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
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
        d='M19.94 11.885h-6.946c-1.141 0-2.06.927-2.06 2.059v3.707c0 1.14.927 2.06 2.06 2.06h1.552v1.025h-.87v1.255h5.582v-1.255h-.739v-1.017h1.429c1.14 0 2.06-.927 2.06-2.06v-3.707a2.075 2.075 0 0 0-2.069-2.067Zm-6.954 1.255h6.945c.443 0 .813.36.813.812v2.428H12.18v-2.428c0-.451.361-.812.805-.812Zm4.269 7.604h-1.462V19.72h1.462v1.025Zm2.684-2.28h-6.945a.814.814 0 0 1-.813-.813v-.032h8.563v.032a.807.807 0 0 1-.805.813ZM12.23 6.88h-3.3v2.593h3.3V6.881Z'
      />
      <path
        fill='currentColor'
        d='m5.39 11.507-.008-3.322H6.64v3.33h7.84V2.009L2.009 2v2.436H2c0 .066 0 .123.008.189v6.899l3.383-.017Zm2.496-1.246V6.93H4.118l.008 3.33h-.87V6.11c.205.065.41.098.632.106h.041c.559 0 1.051-.18 1.437-.525a2.01 2.01 0 0 0 1.314.525h.04c.559 0 1.052-.18 1.437-.525a2.01 2.01 0 0 0 1.314.525h.041c.566 0 1.075-.196 1.47-.55.344.329.82.542 1.346.55h.041c.304 0 .583-.057.837-.155v4.2h-5.32Zm.936-5.94V3.255h1.544v1.05a.48.48 0 0 1-.099.304c-.18.237-.418.352-.771.352-.37-.008-.674-.279-.674-.607v-.033Zm-1.256 0a.484.484 0 0 1-.098.288c-.173.237-.419.352-.764.352-.377-.008-.681-.279-.681-.607V3.255h1.535v1.066h.008Zm5.649-.016a.48.48 0 0 1-.099.304c-.172.23-.419.344-.763.344-.37-.008-.674-.279-.674-.599v-1.09h1.544v1.041h-.008Zm-8.448-1.05v1.058a.474.474 0 0 1-.099.296c-.172.237-.41.352-.763.352-.296-.008-.591-.147-.64-.443V3.255h1.502ZM15.728 5.585a.559.559 0 1 0-.001-1.117.559.559 0 0 0 0 1.117ZM17.55 5.585a.559.559 0 1 0 0-1.117.559.559 0 0 0 0 1.117ZM19.373 5.585a.559.559 0 1 0 0-1.117.559.559 0 0 0 0 1.117ZM19.373 7.168a.559.559 0 1 0 0-1.117.559.559 0 0 0 0 1.117ZM19.373 8.743a.559.559 0 1 0 0-1.117.559.559 0 0 0 0 1.117ZM19.373 10.326a.559.559 0 1 0 0-1.117.559.559 0 0 0 0 1.117ZM8.528 17.463a.559.559 0 1 0 .558.558.564.564 0 0 0-.558-.558ZM6.705 17.463a.559.559 0 1 0 .558.558.564.564 0 0 0-.558-.558ZM4.882 17.463a.559.559 0 1 0 .559.558.57.57 0 0 0-.559-.558ZM4.882 17.003a.558.558 0 1 0 0-1.116.558.558 0 0 0 0 1.116ZM4.882 14.305a.559.559 0 1 0 .559.558.57.57 0 0 0-.559-.558ZM4.882 12.73a.559.559 0 1 0 .559.557.564.564 0 0 0-.559-.557Z'
      />
    </svg>
  )
})

if (__DEV__) {
  BxSync.displayName = 'BxSync'
}
