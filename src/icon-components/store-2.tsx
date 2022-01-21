import React, { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxStore2 = forwardRef<SVGSVGElement, IconBaseProps>(
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
          d='M18.072 7.183V6.164h1.83V2H3.947v4.164H5.77v1.01H2.017v3.754H2c0 .082.008.164.017.246V22l3.594-.008H22V7.19l-3.928-.008Zm-3.644 3.597c0 .148-.042.28-.126.386-.2.271-.484.411-.877.411-.435-.008-.794-.337-.794-.74V8.465h1.789v2.316h.008Zm-3.1.066c-.01.066-.068.164-.185.329-.2.27-.484.41-.877.41-.435-.008-.794-.337-.794-.739V8.464h1.855v2.382c0-.008 0 0 0 0Zm-3.16-1.133v1.076c0 .14-.042.27-.125.377-.201.271-.485.411-.878.411-.435-.008-.794-.337-.794-.74V8.466H8.16l.008 1.248Zm7.572 1.067V8.464h1.789v2.316c0 .148-.042.28-.126.386-.2.271-.476.411-.877.411-.435-.008-.794-.337-.794-.74v-.057h.008ZM5.251 3.281h13.34v1.594H5.25V3.28Zm1.822 2.883h9.687v1.019l-9.687-.008v-1.01ZM5.067 8.456v2.333c0 .14-.042.27-.125.377-.2.271-.485.411-.878.411-.334-.008-.668-.164-.743-.501v-2.62h1.746Zm1.162 6.957h2.959v5.281H6.246l-.017-5.281Zm7.196 0v5.281h-2.942v-5.281h2.942Zm1.312 5.29V15.42h2.859v5.281h-2.859Zm4.162 0V14.13H4.917l.025 6.571-1.621.008v-7.967c.225.074.46.123.718.123h.059c.618 0 1.17-.213 1.596-.59.376.36.886.582 1.446.59h.059c.618 0 1.17-.213 1.596-.59.376.36.886.582 1.446.59h.058c.635 0 1.195-.221 1.63-.624.376.378.903.616 1.48.624h.058c.618 0 1.17-.213 1.596-.6.376.362.886.584 1.454.6h.059c.635 0 1.195-.221 1.63-.624.376.378.902.616 1.479.624h.058c.351 0 .677-.073.97-.197v8.033h-1.814Zm1.789-9.923c0 .148-.042.28-.125.386-.201.271-.485.411-.878.411-.435-.008-.794-.337-.794-.74V8.473h1.789v2.308h.008Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxStore2.displayName = 'BxStore2'
}
