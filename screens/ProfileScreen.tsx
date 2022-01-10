import React, { useEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Text, View } from 'react-native'
import { styles } from '../theme/globalStyles'

import { StackRoutesParams } from '../navigator/StackNavigator'

interface Props extends NativeStackScreenProps<StackRoutesParams, 'ProfileScreen'>{};

export const ProfileScreen = ({ navigation, route }: Props) => {
  const params = route.params

  useEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'Átras',
      title: `${params.name} profile`
    })
  }, [])

  return (
    <View>
      <Text style={styles.title}>Profile</Text>
      <Text>
        {
          JSON.stringify(params, null, 3)
        }
      </Text>
    </View>
  )
}
