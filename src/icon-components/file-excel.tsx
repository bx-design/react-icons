import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxFileExcel = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M20.454 10.94h-.33V8.093a.631.631 0 0 0-.194-.457l-4.684-4.461A.684.684 0 0 0 14.8 3H5.346c-.76 0-1.375.608-1.375 1.357v6.583h-.33a.637.637 0 0 0-.641.632v6.658c0 .35.287.633.641.633h.33v1.78c0 .75.616 1.357 1.375 1.357H18.75c.76 0 1.376-.608 1.376-1.357v-1.78h.329a.637.637 0 0 0 .641-.633v-6.658a.637.637 0 0 0-.641-.632ZM4.283 17.598v-5.393h15.53v5.393H4.282Zm10.972-12.65 3.047 2.896h-3.047V4.947ZM5.253 4.356c0-.05.043-.092.093-.092h8.626v4.203c0 .35.287.632.641.632h4.229v1.84H5.253V4.357Zm13.589 16.286c0 .05-.042.092-.093.092H5.346a.093.093 0 0 1-.093-.091v-1.781H18.85v1.78h-.008Z'
        />
        <path
          fill='currentColor'
          d='M5.751 15.092H6.95v-.665H5.75v-.675h1.326v-.674H5.009v3.396h2.118v-.683H5.751v-.699ZM10.343 13.078h-.81l-.625 1.049-.616-1.049h-.836l1.005 1.615-1.072 1.78h.835l.692-1.164.676 1.165h.844l-1.08-1.756.987-1.64ZM12.259 15.85c-.583 0-1.022-.458-1.022-1.066 0-.615.44-1.073 1.022-1.073.438 0 .776.25.92.65h.75c-.16-.808-.826-1.357-1.67-1.357-1.013 0-1.781.765-1.781 1.78 0 1.007.768 1.773 1.78 1.773.853 0 1.528-.566 1.68-1.406h-.751a.946.946 0 0 1-.928.699ZM15.221 15.092h1.198v-.665h-1.198v-.675h1.325v-.674h-2.068v3.396h2.119v-.683H15.22v-.699ZM17.973 13.078h-.743v3.396h2.067v-.683h-1.325v-2.713Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxFileExcel.displayName = 'BxFileExcel'
}
