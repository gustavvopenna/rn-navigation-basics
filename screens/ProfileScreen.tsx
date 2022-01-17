import React, { useContext, useEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Text, View } from 'react-native'
import { styles } from '../theme/globalStyles'

import { StackRoutesParams } from '../navigator/StackNavigator'
import { AuthContext } from '../context/AuthContext'

interface Props extends NativeStackScreenProps<StackRoutesParams, 'ProfileScreen'>{};

export const ProfileScreen = ({ navigation, route }: Props) => {
  const { changeUsername } = useContext(AuthContext)
  const params = route.params

  useEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'Átras',
      title: `${params.name} profile`
    })
  }, [])

  useEffect(() => {
    changeUsername(params.name)
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
