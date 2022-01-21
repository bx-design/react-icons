import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxPackageExclamation = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='m21.821 15.642-1.65-2.9v-5.37c0-.158-.043-.3-.11-.424l-.025-.05c-.008-.016-.025-.033-.033-.05-.009-.008-.009-.016-.017-.025l-2.85-3.582A.663.663 0 0 0 16.633 3H5.11a.62.62 0 0 0-.52.274L2.177 6.807a.598.598 0 0 0-.075.166.83.83 0 0 0-.101.399v11.977c0 .507.41.914.922.914h16.326a.916.916 0 0 0 .922-.914v-1.687h.335c.545 0 1.048-.275 1.316-.723.227-.4.235-.89 0-1.297Zm-3.746-9.184H13.39l-.428-2.203h3.361l1.752 2.203ZM9.577 7.713h2.656v2.011H9.577V7.713Zm.092-1.255.318-2.203h1.693l.436 2.203H9.669ZM5.445 4.255h3.26l-.319 2.203H3.944l1.5-2.203Zm13.46 14.753H3.265V7.713H8.32l-.008 3.266h5.188V7.713h5.406v2.809l-.68-1.18c-.259-.457-.762-.74-1.323-.74-.562 0-1.065.283-1.325.74l-3.595 6.3c-.235.407-.235.898.008 1.305.26.449.763.723 1.316.723h5.59v1.338h.009Zm1.81-2.693c-.025.042-.1.1-.218.1h-7.182c-.118 0-.193-.05-.218-.1-.017-.025-.009-.041 0-.058l3.595-6.3c.042-.075.143-.1.218-.1.075 0 .176.025.218.1l3.595 6.3c.009.017.009.033-.008.058Z'
        />
        <path
          fill='currentColor'
          d='M16.851 11.37a.596.596 0 0 0-.544.64l.184 2.103a.41.41 0 0 0 .377.374.425.425 0 0 0 .453-.374l.184-2.103v-.1a.595.595 0 0 0-.654-.54ZM16.902 15.833c.3 0 .544-.242.544-.54a.543.543 0 0 0-.544-.54c-.301 0-.545.242-.545.54 0 .298.244.54.545.54ZM7.649 16.299H4.548v1.255h3.1v-1.255Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxPackageExclamation.displayName = 'BxPackageExclamation'
}
