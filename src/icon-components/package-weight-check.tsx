import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxPackageWeightCheck = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M15.671 9.4a.627.627 0 0 0-.89.018.654.654 0 0 0 .016.907l1.304 1.267a.633.633 0 0 0 .882-.008l4.464-4.542a.647.647 0 0 0 0-.907.62.62 0 0 0-.891 0l-4.026 4.097-.859-.831ZM8.74 12.978H5.978v1.284H8.74v-1.284Z'
        />
        <path
          fill='currentColor'
          d='M21.381 15.765h-1.394v-2.72a4.445 4.445 0 0 0 .874-3.317.627.627 0 0 0-.71-.545.64.64 0 0 0-.536.722c.025.168.033.344.033.52-.04 1.696-1.402 3.048-3.06 3.048h-.067a3.013 3.013 0 0 1-2.145-.965 3.128 3.128 0 0 1-.85-2.225c.042-1.722 1.436-3.082 3.136-3.048.47.008.924.126 1.336.344.305.16.685.042.85-.277a.65.65 0 0 0-.272-.865 4.11 4.11 0 0 0-1.89-.487h-.099c-2.335 0-4.265 1.906-4.323 4.299a4.407 4.407 0 0 0 1.196 3.14 4.268 4.268 0 0 0 3.028 1.36h.1c.783 0 1.51-.218 2.145-.587v1.301H4.896V4.17h4.381v2.385h4.76V4.17h4.696v1.26c0 .352.28.638.627.638a.632.632 0 0 0 .627-.639V3.784a.892.892 0 0 0-.883-.899H4.524a.892.892 0 0 0-.882.899v11.981H2.627a.634.634 0 0 0-.627.647v3.543c0 .353.28.638.627.638h2.657a.632.632 0 0 0 .627-.638V19.1h12.228l.008.856c0 .353.28.638.627.638h2.599a.632.632 0 0 0 .627-.638v-3.543a.622.622 0 0 0-.619-.647ZM12.775 5.27h-2.244v-1.1h2.244v1.1Zm7.979 14.039h-1.345l-.008-.857a.632.632 0 0 0-.627-.638H5.292a.632.632 0 0 0-.627.638v.857H3.262V17.05h17.492v2.259Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxPackageWeightCheck.displayName = 'BxPackageWeightCheck'
}
