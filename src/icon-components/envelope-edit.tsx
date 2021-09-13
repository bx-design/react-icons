import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxEnvelopeEdit = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M18.99 16.085a.635.635 0 0 0-.635.635c0 .484-.4.885-.885.885H4.155a.891.891 0 0 1-.885-.885V8.86l7.643 2.798 7.442-2.865v.175a.635.635 0 1 0 1.27 0V6.863a2.16 2.16 0 0 0-2.155-2.155H4.155A2.16 2.16 0 0 0 2 6.863v9.857a2.16 2.16 0 0 0 2.155 2.155H17.47a2.16 2.16 0 0 0 2.155-2.155.635.635 0 0 0-.635-.635ZM4.155 5.978H17.47c.484 0 .885.4.885.885v.568l-7.45 2.874L3.27 7.507v-.644a.88.88 0 0 1 .885-.885Z'
        />
        <path
          fill='currentColor'
          d='m21.83 10.756-1.103-1.103a.577.577 0 0 0-.81-.008l-3.675 3.667a2.038 2.038 0 0 0-.485.793l-.359 1.136a.692.692 0 0 0 .167.685c.125.126.3.2.476.2a.606.606 0 0 0 .209-.033l1.128-.376c.292-.1.56-.258.776-.476l3.684-3.675a.577.577 0 0 0-.008-.81Zm-4.352 3.8c-.109.109-.25.193-.401.243l-.61.2.2-.61c.05-.158.134-.3.251-.409l1.93-1.93.568.568-1.938 1.938Zm2.614-2.597-.568-.568.802-.794.568.568-.802.794Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxEnvelopeEdit.displayName = 'BxEnvelopeEdit'
}
