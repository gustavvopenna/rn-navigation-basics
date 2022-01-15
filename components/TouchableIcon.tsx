import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export type IconName = keyof typeof Ionicons.glyphMap;

interface TouchableIconProps {
  name: IconName;
  onPress: () => void;
  size?: number;
}

export const TouchableIcon = ({ name, size = 40, onPress }: TouchableIconProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name={name} size={size} />
    </TouchableOpacity>
  )
}
