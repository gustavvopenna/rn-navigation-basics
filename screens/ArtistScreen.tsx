import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../theme/globalStyles'

export const ArtistScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>ArtistScreen</Text>
      </View>
    </SafeAreaView>
  )
}
