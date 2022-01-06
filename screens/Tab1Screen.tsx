import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Button, Text, View } from 'react-native'

interface Props extends NativeStackScreenProps<any, any>{}

export const Tab1Screen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Tab1Screen</Text>
      <Button
        title='Go to page 2'
        onPress={() => navigation.navigate('Tab2Screen')}
        />
    </View>
  )
}
