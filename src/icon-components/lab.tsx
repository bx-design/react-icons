import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxLab = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
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
        d='m19.061 18.808-4.372-9.56V5.816h1.087a.659.659 0 0 0 .648-.665.654.654 0 0 0-.648-.665H7.734a.659.659 0 0 0-.647.665c0 .37.287.665.647.665h1.223v3.685L4.92 18.857a2.28 2.28 0 0 0 .168 2.125A2.164 2.164 0 0 0 6.911 22h10.176a2.15 2.15 0 0 0 1.839-1.034c.407-.657.455-1.46.136-2.158Zm-8.817-9.02V5.818h3.158v3.717l2.126 4.653H8.342l1.902-4.398Zm7.602 10.464a.87.87 0 0 1-.751.427H6.911a.858.858 0 0 1-.744-.419.91.91 0 0 1-.064-.87l1.671-3.873h8.362l1.766 3.857a.95.95 0 0 1-.056.878Z'
      />
      <path
        fill='currentColor'
        d='M12.419 13.432c.543 0 .99-.45.99-1.017 0-.558-.439-1.018-.99-1.018-.544 0-.992.452-.992 1.018a1 1 0 0 0 .992 1.018ZM12.107 4.044c.547 0 .991-.455.991-1.017 0-.562-.444-1.018-.991-1.018-.548 0-.991.456-.991 1.018s.443 1.017.99 1.017ZM12.003 19.284c.547 0 .991-.456.991-1.018s-.444-1.018-.991-1.018c-.547 0-.991.456-.991 1.018s.444 1.018.99 1.018ZM9.813 17.577a.543.543 0 0 0 .535-.55c0-.304-.24-.55-.535-.55a.543.543 0 0 0-.536.55c0 .303.24.55.536.55Z'
      />
    </svg>
  )
})

if (__DEV__) {
  BxLab.displayName = 'BxLab'
}
