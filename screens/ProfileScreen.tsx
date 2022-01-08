import React, { useEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Text, View } from 'react-native'
import { styles } from '../theme/globalStyles'

interface Props extends NativeStackScreenProps<any, any>{};

export const ProfileScreen = ({ navigation }: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'Átras',
      title: 'My profile'
    })
  }, [])

  return (
    <View>
      <Text style={styles.title}>Profile</Text>
    </View>
  )
}
