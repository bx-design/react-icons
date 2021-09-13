import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxAddPeople = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M9.969 6.4c-1.892 0-3.43 1.515-3.43 3.377 0 1.863 1.538 3.377 3.43 3.377 1.891 0 3.429-1.514 3.429-3.377 0-1.862-1.538-3.376-3.43-3.376Zm0 5.523c-1.2 0-2.18-.964-2.18-2.146s.98-2.145 2.18-2.145c1.2 0 2.17.963 2.17 2.145s-.97 2.146-2.17 2.146Z'
        />
        <path
          fill='currentColor'
          d='M22 7.154C22 4.862 20.109 3 17.781 3a4.22 4.22 0 0 0-3.815 2.397 7.99 7.99 0 0 0-3.997-1.061C5.577 4.328 2 7.85 2 12.174s3.577 7.846 7.969 7.846c4.391 0 7.969-3.522 7.969-7.846 0-.291-.017-.583-.05-.874C20.158 11.242 22 9.405 22 7.154ZM9.969 18.78a6.735 6.735 0 0 1-4.844-2.048c1.127-1.328 2.92-2.122 4.844-2.122 1.867 0 3.709.802 4.86 2.105a6.768 6.768 0 0 1-4.86 2.065Zm5.641-3.052c-1.39-1.458-3.511-2.357-5.65-2.357-2.203 0-4.268.883-5.633 2.373a6.483 6.483 0 0 1-1.069-3.571c0-3.644 3.01-6.607 6.71-6.607 1.3 0 2.55.364 3.636 1.06-.025.17-.041.349-.041.527 0 1.878 1.274 3.473 3.018 3.975a6.397 6.397 0 0 1-.97 4.6Zm2.171-5.66c-1.628 0-2.96-1.304-2.96-2.915 0-1.612 1.324-2.915 2.96-2.915 1.637 0 2.96 1.303 2.96 2.915 0 1.611-1.331 2.915-2.96 2.915Z'
        />
        <path
          fill='currentColor'
          d='M18.406 6.53V5.324a.62.62 0 0 0-.625-.616.62.62 0 0 0-.625.616V6.53h-1.225a.62.62 0 0 0-.625.616c0 .34.28.615.625.615h1.225v1.207c0 .34.28.615.625.615a.62.62 0 0 0 .625-.615V7.769h1.226a.62.62 0 0 0 .625-.615.62.62 0 0 0-.625-.616h-1.226V6.53Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxAddPeople.displayName = 'BxAddPeople'
}
