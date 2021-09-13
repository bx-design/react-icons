import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxPersonExecutive = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M12.005 11.866c2.848 0 5.163-2.212 5.163-4.933C17.168 4.212 14.853 2 12.005 2 9.155 2 6.832 4.212 6.832 6.933c0 2.721 2.324 4.933 5.173 4.933Zm0-8.598c2.114 0 3.835 1.645 3.835 3.665s-1.721 3.664-3.835 3.664c-2.115 0-3.836-1.644-3.836-3.664 0-2.02 1.721-3.665 3.835-3.665ZM12.004 12.4C6.491 12.4 2 16.415 2 21.357v.634h20v-.634c0-4.942-4.482-8.957-9.996-8.957Zm-8.641 8.322c.367-3.94 4.098-7.053 8.641-7.053 4.544 0 8.275 3.114 8.642 7.053H3.363Z'
        />
        <path
          fill='currentColor'
          d='M13.359 15.455c0-.717-.612-1.293-1.355-1.293-.751 0-1.354.584-1.354 1.293 0 .418.21.793.533 1.027l-.682 3.422c-.026.176.123.334.315.334h2.385c.192 0 .341-.158.306-.342l-.751-3.364a1.28 1.28 0 0 0 .603-1.077Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxPersonExecutive.displayName = 'BxPersonExecutive'
}
