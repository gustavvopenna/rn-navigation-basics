import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'

import { styles } from '../theme/globalStyles'
import { AuthContext } from '../context/AuthContext'

export const AlbumsScreen = () => {
  const { signIn, authState } = useContext(AuthContext)

  return (
    <View>
      <Text style={styles.title}>AlbumsScreen</Text>
      {
        !authState.isLoggedIn &&
        <Button
          title='Sign in'
          onPress={signIn}
        />
      }
    </View>
  )
}
