import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../theme/globalStyles'

export const Tab1Screen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>Tab 1</Text>
      </View>
    </SafeAreaView>
  )
}
