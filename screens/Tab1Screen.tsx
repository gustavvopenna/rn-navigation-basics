import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/globalStyles'

interface Props extends NativeStackScreenProps<any, any>{}

export const Tab1Screen = ({ navigation }: Props) => {
  return (
    <View>
      <Text style={styles.title}>Tab1Screen</Text>
      <Button
        title='Go to page 2'
        onPress={() => navigation.navigate('Tab2Screen')}
        />
      <Button
        title='Perfil'
        onPress={() => navigation.navigate('ProfileScreen')}
        />
    </View>
  )
}
