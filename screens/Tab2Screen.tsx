import React, { useEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/globalStyles'

interface Props extends NativeStackScreenProps<any, any>{}

export const Tab2Screen = ({ navigation }: Props) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'Holaaa!',
      headerBackTitle: 'Atras'
    })
  }, [])

  return (
    <View>
      <Text style={styles.title}>Tab2Screen</Text>
      <Button
        title='Go to page 3'
        onPress={() => navigation.navigate('Tab3Screen')}
        />
    </View>
  )
}
