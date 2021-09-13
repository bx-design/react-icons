import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxOperator = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M22 11.711c0-.55-.414-1.02-.986-1.203C20.492 6.852 16.714 4 12.133 4c-4.557 0-8.327 2.82-8.874 6.445C2.547 10.556 2 11.082 2 11.71v2.621c0 .71.68 1.29 1.516 1.29h1.84C5.96 18.683 8.76 21 12.115 21c2.502 0 4.69-1.29 5.899-3.21h3.62v-2.637c.224-.223.357-.51.357-.82V11.71H22Zm-3.62-.071h2.096c.157 0 .248.071.256.071v2.605c-.016.024-.099.096-.256.096H19v-.024a6.156 6.156 0 0 0-.622-2.748Zm-6.247-6.421c3.836 0 7.025 2.262 7.589 5.21h-2.088a6.975 6.975 0 0 0-5.51-2.653c-2.253 0-4.258 1.036-5.51 2.645h-2.07c.563-2.94 3.753-5.202 7.589-5.202Zm-8.617 9.193c-.157 0-.248-.072-.257-.072v-2.605c.017-.024.1-.095.257-.095h2.345a6.387 6.387 0 0 0-.622 2.748v.024H3.516Zm8.608 5.377c-3.098 0-5.617-2.422-5.617-5.401 0-2.98 2.519-5.401 5.617-5.401 3.099 0 5.617 2.422 5.617 5.401 0 .78-.174 1.522-.488 2.19H14.56a.92.92 0 0 0-.936-.876H10.79c-.513 0-.936.407-.936.9v1.323c0 .494.423.9.936.9h2.834c.513 0 .936-.406.936-.9v-.135h1.914a5.672 5.672 0 0 1-4.35 2Zm1.5-1.872h-2.825l-.009-1.306 2.71-.008v1.195h.132l-.008.12Zm4.996-1.338c.116-.311.199-.63.265-.956h1.491v.956H18.62Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxOperator.displayName = 'BxOperator'
}
