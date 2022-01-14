import React from 'react'
import { Text, View, SafeAreaView } from 'react-native'
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
