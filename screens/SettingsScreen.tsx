import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/globalStyles'

export const SettingsScreen = () => {
  const { top: paddingTop } = useSafeAreaInsets()

  return (
    <View style={{ paddingTop }}>
      <Text style={styles.title}>Settings</Text>
    </View>
  )
}
