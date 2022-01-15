import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/globalStyles'

import { AuthContext } from '../context/AuthContext'

export const SettingsScreen = () => {
  const { top: paddingTop } = useSafeAreaInsets()

  const { authState } = useContext(AuthContext)

  return (
    <View style={{ paddingTop }}>
      <Text style={styles.title}>Settings</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
    </View>
  )
}
