import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../theme/globalStyles'

export const AlbumsScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>AlbumsScreen</Text>
      </View>
    </SafeAreaView>
  )
}
