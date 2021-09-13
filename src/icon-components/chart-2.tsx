import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxChart2 = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M19.764 5a2.24 2.24 0 0 0-2.237 2.235c0 .632.262 1.198.684 1.61l-1.764 2.691a2.24 2.24 0 0 0-.624-.093c-.65 0-1.24.287-1.646.734l-2.75-2.058a2.24 2.24 0 0 0-2.22-2.522 2.232 2.232 0 0 0-2.228 2.236c0 .413.118.81.32 1.138l-2.691 3.593c-.127-.017-.245-.034-.372-.034A2.24 2.24 0 0 0 2 16.765 2.24 2.24 0 0 0 4.236 19a2.24 2.24 0 0 0 2.237-2.235c0-.599-.245-1.147-.633-1.552l2.498-3.331c.27.118.565.177.877.177a2.21 2.21 0 0 0 1.604-.683l2.784 2.083c-.008.068-.008.143-.008.21a2.24 2.24 0 0 0 2.236 2.236 2.24 2.24 0 0 0 2.236-2.235c0-.515-.177-.987-.472-1.366l1.873-2.868c.102.017.194.025.296.025A2.24 2.24 0 0 0 22 7.227 2.232 2.232 0 0 0 19.764 5ZM4.236 17.625a.864.864 0 0 1-.86-.86c0-.472.388-.86.86-.86.473 0 .861.388.861.86a.87.87 0 0 1-.86.86Zm4.98-6.94a.864.864 0 0 1-.862-.86c0-.473.389-.861.861-.861.473 0 .86.388.86.86 0 .48-.387.86-.86.86Zm6.615 3.845a.864.864 0 0 1-.86-.86c0-.472.388-.86.86-.86.473 0 .861.388.861.86a.864.864 0 0 1-.86.86Zm3.933-6.443a.864.864 0 0 1-.861-.86c0-.473.388-.86.86-.86.473 0 .861.387.861.86 0 .48-.388.86-.86.86Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxChart2.displayName = 'BxChart2'
}
