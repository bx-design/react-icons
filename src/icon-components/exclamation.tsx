import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxExclamation = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M19.553 21.084H4.452c-.906 0-1.73-.462-2.158-1.209a2.153 2.153 0 0 1-.016-2.116l7.55-13.617c.42-.756 1.252-1.226 2.175-1.226.922 0 1.745.47 2.173 1.226l7.551 13.617c.37.664.363 1.461-.016 2.116-.428.747-1.26 1.209-2.158 1.209ZM3.381 18.397a.824.824 0 0 0 .008.832c.198.344.61.562 1.063.562h15.101c.453 0 .865-.218 1.063-.563a.824.824 0 0 0 .008-.83L13.064 4.78c-.197-.361-.6-.571-1.062-.571-.469 0-.864.218-1.062.57L3.381 18.398Z'
        />
        <path
          fill='currentColor'
          d='m12.801 8.902-.173 5.852a.64.64 0 0 1-.65.63.645.645 0 0 1-.618-.63l-.173-5.852a.803.803 0 1 1 1.606-.042.092.092 0 0 1 .008.042ZM12.002 18.145a.956.956 0 0 0 .947-.965.956.956 0 0 0-.947-.965.956.956 0 0 0-.947.965c0 .533.424.965.947.965Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxExclamation.displayName = 'BxExclamation'
}
