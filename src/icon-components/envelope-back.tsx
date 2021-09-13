import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxEnvelopeBack = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='m21.822 12.305-1.643-1.66a.644.644 0 0 0-.9-.016.6.6 0 0 0-.017.874l.578.577h-3.147c-2.246 0-4.08 1.78-4.08 3.96 0 2.18 1.834 3.96 4.08 3.96h1.371c.356 0 .636-.28.636-.617a.627.627 0 0 0-.636-.617h-1.37c-1.545 0-2.809-1.219-2.809-2.726s1.256-2.725 2.808-2.725h3.172l-.586.569a.607.607 0 0 0 0 .873.655.655 0 0 0 .908 0l1.644-1.595a.617.617 0 0 0-.009-.857Z'
        />
        <path
          fill='currentColor'
          d='M10.879 16.906H4.205c-.512 0-.933-.409-.933-.906V8.12l7.904 2.806 7.69-2.878v.593c0 .345.289.618.636.618.355 0 .636-.281.636-.618v-2.5c0-1.18-.992-2.141-2.206-2.141H4.205C2.991 4 2 4.962 2 6.14v9.868c0 1.178.991 2.14 2.205 2.14h6.674c.355 0 .636-.28.636-.617a.629.629 0 0 0-.636-.625ZM4.205 5.234h13.727c.512 0 .934.41.934.906v.577l-7.698 2.878-7.896-2.797V6.14c0-.497.421-.906.933-.906Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxEnvelopeBack.displayName = 'BxEnvelopeBack'
}
