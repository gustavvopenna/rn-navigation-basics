import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button, Text, View } from 'react-native'

interface Props extends NativeStackScreenProps<any, any>{}

export const Tab2Screen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Tab2Screen</Text>
      <Button
        title='Go to page 3'
        onPress={() => navigation.navigate('Tab3Screen')}
        />
    </View>
  )
}
