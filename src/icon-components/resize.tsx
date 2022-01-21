import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxResize = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M14.992 7.36H3.626c-.83 0-1.507.663-1.507 1.478v11.155c0 .814.676 1.478 1.507 1.478H15c.831 0 1.508-.664 1.508-1.479V8.838c0-.815-.677-1.478-1.516-1.478ZM15 19.993H3.626V8.838H15v11.155ZM15.12 2.186a.655.655 0 0 0-.908 0 .625.625 0 0 0 0 .89l.437.429H4.174l.429-.437a.618.618 0 0 0-.018-.89.647.647 0 0 0-.907.016l-1.5 1.529a.623.623 0 0 0 .01.882l1.498 1.47c.12.117.291.185.454.185a.642.642 0 0 0 .454-.185.625.625 0 0 0 0-.89l-.437-.429h10.484l-.429.437a.618.618 0 0 0 .017.89c.12.118.283.177.446.177a.655.655 0 0 0 .462-.194l1.5-1.528a.623.623 0 0 0-.01-.882l-1.507-1.47ZM21.81 19.455a.655.655 0 0 0-.909 0l-.436.428V9.603l.445.42c.12.117.282.176.445.176a.656.656 0 0 0 .463-.193.618.618 0 0 0-.017-.89l-1.56-1.47a.661.661 0 0 0-.898.008l-1.5 1.47a.625.625 0 0 0 0 .89c.25.244.66.244.909 0l.436-.428V19.867l-.445-.42a.647.647 0 0 0-.908.016.618.618 0 0 0 .017.89l1.559 1.47c.12.118.283.177.445.177a.642.642 0 0 0 .454-.185l1.5-1.47a.625.625 0 0 0 0-.89Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxResize.displayName = 'BxResize'
}
