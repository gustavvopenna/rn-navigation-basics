import React, { useEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button, Text, View } from 'react-native'

import { styles } from '../theme/globalStyles'
import { StackRoutesParams } from '../navigator/StackNavigator'

interface Props extends NativeStackScreenProps<StackRoutesParams, any>{}

export const Page2Screen = ({ navigation }: Props) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'Holaaa!',
      headerBackTitle: 'Atras'
    })
  }, [])

  return (
    <View>
      <Text style={styles.title}>Page 2</Text>
      <Button
        title='Go to page 3'
        onPress={() => navigation.navigate('Page3Screen')}
        />
    </View>
  )
}
