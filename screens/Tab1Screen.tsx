import React, { useContext } from 'react'
import { Text, View, SafeAreaView } from 'react-native'

import { AuthContext } from '../context/AuthContext'
import { TouchableIcon } from '../components/TouchableIcon'
import { styles } from '../theme/globalStyles'

export const Tab1Screen = () => {

  const { authState, changeFavoriteIcon } = useContext(AuthContext)
  const { favoriteIcon } = authState

  return (
    <SafeAreaView style={{ marginHorizontal: 20 }}>
      <View>
        <Text style={styles.title}>Icons</Text>
      </View>
      <View style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
      }}>
        <TouchableIcon name='planet-outline' size={80} onPress={() => changeFavoriteIcon('planet-outline')} />
        <TouchableIcon name='alarm-outline' size={80} onPress={() => changeFavoriteIcon('alarm-outline')} />
        <TouchableIcon name='basketball-outline' size={80} onPress={() => changeFavoriteIcon('basketball-outline')} />
        <TouchableIcon name='battery-charging-outline' size={80} onPress={() => changeFavoriteIcon('battery-charging-outline')} />
        <TouchableIcon name='bluetooth-outline' size={80} onPress={() => changeFavoriteIcon('bluetooth-outline')} />
        <TouchableIcon name='car-sport-outline' size={80} onPress={() => changeFavoriteIcon('car-sport-outline')} />
        <TouchableIcon name='color-palette-outline' size={80} onPress={() => changeFavoriteIcon('color-palette-outline')} />
        <TouchableIcon name='game-controller-outline' size={80} onPress={() => changeFavoriteIcon('game-controller-outline')} />
      </View>
      {
        favoriteIcon &&
        <View>
          <Text style={styles.title}>Favorite Icon</Text>
          <TouchableIcon name={favoriteIcon} size={80} onPress={() => {}} />
        </View>
      }

    </SafeAreaView>
  )
}
