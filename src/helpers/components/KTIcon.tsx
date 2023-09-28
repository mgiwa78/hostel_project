import React from 'react'
import icons from '../icons-config/icons'
import {getLayoutFromLocalStorage} from '../../layouts/core'

type Props = {
  className?: string
  iconType?: 'duotone' | 'solid' | 'outline'
  iconName: string
  style?: object
}

const KTIcon: React.FC<Props> = ({className = '', iconType, iconName, style}) => {
  if (!iconType) {
    iconType = getLayoutFromLocalStorage().main?.iconType
  }
  console.log(style)
  return (
    <i style={style} className={`ki-${iconType} ki-${iconName}${className && ' ' + className}`}>
      {iconType === 'duotone' &&
        [...Array(icons[iconName])].map((e, i) => {
          return (
            <span
              key={`${iconType}-${iconName}-${className}-path-${i + 1}`}
              className={`path${i + 1}`}
            ></span>
          )
        })}
    </i>
  )
}

export {KTIcon}
