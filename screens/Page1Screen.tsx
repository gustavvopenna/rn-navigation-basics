// import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { colors, styles } from '../theme/globalStyles'

// import { StackRoutesParams } from '../navigator/StackNavigator'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { StackRoutesParams } from '../navigator/StackNavigator'

// interface Props extends NativeStackScreenProps<StackRoutesParams, 'Tab1Screen'>{}
interface Props extends DrawerScreenProps<StackRoutesParams, any>{};

export const Page1Screen = ({ navigation }: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
        >
          <Ionicons name='menu-outline' size={30} color={colors.darkGray} />
        </TouchableOpacity>
      )
    })
  }, [])

  return (
    <View>
      <Text style={styles.title}>Page 1</Text>
      <Button
        title='Go to page 2'
        onPress={() => navigation.navigate('Page2Screen')}
        />
      <Text style={styles.title}>Navigation with params</Text>
      <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProfileScreen', {
            id: 1,
            name: 'Gus'
          })}
          style={{
            ...styles.bigButton,
            backgroundColor: colors.tertiary
          }}>
          <Text style={styles.bigButtonText}>Perfil de Gustavo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProfileScreen', {
            id: 2,
            name: 'Mari'
          })}
          style={{
            ...styles.bigButton,
            backgroundColor: colors.primary
          }}>
          <Text style={styles.bigButtonText}>Perfil de Mari</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
