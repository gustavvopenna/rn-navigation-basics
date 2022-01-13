import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { styles } from '../theme/globalStyles'

export const Tab2Screen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>Tab 2</Text>
      </View>
    </SafeAreaView>
  )
}
