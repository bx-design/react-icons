const TEMPLATE = (componentName, content) => `
  import { forwardRef } from 'react'

  import { IconBaseProps } from '../types'
  import { __DEV__ } from '../is-dev'

  export const ${componentName} = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
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
        ${content}
      </svg>
    )
  })

  if (__DEV__) {
    ${componentName}.displayName = '${componentName}'
  }

`

module.exports = TEMPLATE
