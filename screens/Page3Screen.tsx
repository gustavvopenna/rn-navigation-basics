import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/globalStyles'

interface Props extends NativeStackScreenProps<any, any>{}

export const Page3Screen = ({ navigation }: Props) => {
  return (
    <View>
      <Text style={styles.title}>Page 3</Text>
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
