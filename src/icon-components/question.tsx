import { forwardRef } from 'react'

import { IconBaseProps } from '../types'
import { __DEV__ } from '../is-dev'

export const BxQuestion = forwardRef<SVGSVGElement, IconBaseProps>(
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
          fill-rule='evenodd'
          d='M12 3.395a8.605 8.605 0 1 0 0 17.21 8.605 8.605 0 0 0 0-17.21ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z'
          clip-rule='evenodd'
        />
        <path
          fill='currentColor'
          d='M11.917 15.577a1.004 1.004 0 0 0-1.024.998c0 .315.105.56.306.735.201.175.438.263.71.263a.972.972 0 0 0 .69-.272c.202-.175.298-.42.298-.735a.964.964 0 0 0-.289-.709.923.923 0 0 0-.691-.28ZM13.79 7.813c-.499-.236-1.068-.358-1.716-.358-.691 0-1.304.14-1.829.428-.525.29-.919.648-1.19 1.077-.263.438-.403.867-.403 1.287 0 .201.088.393.254.569a.86.86 0 0 0 .63.262c.42 0 .71-.254.867-.753.157-.481.358-.849.586-1.094.228-.245.595-.367 1.085-.367.42 0 .762.122 1.024.367.263.245.394.543.394.902 0 .184-.043.35-.13.508a1.908 1.908 0 0 1-.325.428c-.131.132-.332.315-.621.57-.324.288-.587.533-.78.735-.192.21-.35.446-.463.726a2.501 2.501 0 0 0-.175.972c0 .297.079.525.236.674a.82.82 0 0 0 .587.227c.446 0 .709-.227.796-.691.053-.22.088-.368.114-.456.026-.087.061-.175.105-.262.044-.088.114-.184.201-.289.088-.105.21-.228.368-.367.551-.49.928-.84 1.138-1.05.21-.21.394-.456.551-.736.158-.289.228-.621.228-.998a2.38 2.38 0 0 0-.403-1.339c-.245-.411-.63-.735-1.129-.972Z'
        />
      </svg>
    )
  }
)

if (__DEV__) {
  BxQuestion.displayName = 'BxQuestion'
}
