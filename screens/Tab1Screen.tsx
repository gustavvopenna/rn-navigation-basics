import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/globalStyles'

import { StackRoutesParams } from '../navigator/StackNavigator'

interface Props extends NativeStackScreenProps<StackRoutesParams, 'Tab1Screen'>{}

export const Tab1Screen = ({ navigation }: Props) => {
  return (
    <View>
      <Text style={styles.title}>Tab1Screen</Text>
      <Button
        title='Go to page 2'
        onPress={() => navigation.navigate('Tab2Screen')}
        />
      <Text style={styles.title}>Navigation with params</Text>
      <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProfileScreen', {
            id: 1,
            name: 'Gus'
          })}
          style={{
            ...styles.bigButton,
            backgroundColor: '#564256'
          }}>
          <Text style={styles.bigButtonText}>Perfil de Gustavo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProfileScreen', {
            id: 2,
            name: 'Mari'
          })}
          style={{
            ...styles.bigButton,
            backgroundColor: '#fc814a'
          }}>
          <Text style={styles.bigButtonText}>Perfil de Mari</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
