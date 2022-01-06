import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button, Text, View } from 'react-native'

interface Props extends NativeStackScreenProps<any, any>{}

export const Tab3Screen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Tab3Screen</Text>
      <Button
        title='Go back'
        onPress={() => navigation.goBack()}
        />
      <Button
        title='Go Home'
        onPress={() => navigation.popToTop()}
        />
    </View>
  )
}
