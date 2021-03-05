import { FC, useMemo } from 'react'
import bxIcons from 'icons/bx-icons/src/index'
import IconBase from './icon-base'
import type { BxIconsProps } from 'types'

const BxIcons: FC<BxIconsProps> = ({ icon, size, color }) => {
  const filteredIcon = useMemo(() => bxIcons.find((ico) => ico.name === icon), [
    icon
  ])

  return (
    <IconBase size={size} color={color}>
      {filteredIcon &&
        filteredIcon.paths.map((path, index) => (
          <path
            d={path.d}
            fillRule={path.fillRule || 'inherit'}
            clipRule={path.clipRule || 'inherit'}
            fill='currentColor'
            key={index}
          />
        ))}
    </IconBase>
  )
}

BxIcons.displayName = 'BxIcons'

export default BxIcons
