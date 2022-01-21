import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxMessageSendEdit = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M12.267 13.364a.78.78 0 0 0 .379.568.788.788 0 0 0 .395.119c.09 0 .172-.017.255-.051l1.036-.45c.296-.126.535-.338.691-.6l2.288-3.925c.156-.27.057-.627-.223-.805L15.41 7.186a.644.644 0 0 0-.345-.093.568.568 0 0 0-.453.263l-2.279 3.915a1.553 1.553 0 0 0-.19.932l.124 1.161Zm2.954-5.152 1.07.66-.428.73-1.07-.661.428-.73Zm-2.073 3.568 1.168-2 1.07.66-1.169 2.01a.53.53 0 0 1-.238.203l-.79.339-.09-.882c-.025-.135-.009-.246.049-.33Z'
        />
        <path
          fill='currentColor'
          d='M20.865 5H8.483c-.634 0-1.144.576-1.144 1.28v8.212c0 .703.51 1.28 1.144 1.28h1.604v2.575c0 .238.124.45.321.568.099.06.206.085.304.085.116 0 .23-.034.33-.093l4.928-3.136h4.886c.634 0 1.144-.576 1.144-1.28V6.28c.008-.704-.51-1.28-1.135-1.28Zm-.124 9.466h-4.936c-.016 0-.025 0-.041.009-.025 0-.05 0-.074.008a.148.148 0 0 0-.058.017c-.016.008-.041.008-.057.017a.244.244 0 0 0-.066.034c-.017.008-.025.008-.041.017l-4.114 2.618v-2.059a.644.644 0 0 0-.633-.652H8.598l.008-8.17h12.135v8.161ZM5.998 6.263H2.633A.638.638 0 0 0 2 6.915c0 .365.28.653.633.653h3.365a.643.643 0 0 0 .634-.653.643.643 0 0 0-.634-.652ZM5.998 9.576H3.777a.643.643 0 0 0-.633.653c0 .356.28.652.633.652h2.221a.643.643 0 0 0 .634-.652.643.643 0 0 0-.634-.653ZM5.998 12.873h-1.11a.643.643 0 0 0-.634.652c0 .356.28.653.634.653h1.11a.643.643 0 0 0 .634-.653.643.643 0 0 0-.634-.652Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxMessageSendEdit.displayName = 'BxMessageSendEdit'
}
