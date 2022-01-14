import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AboutScreen } from '../screens/AboutScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { ArtistScreen } from '../screens/ArtistScreen';
import { colors } from '../theme/globalStyles';

const Tab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {
const { top: paddingTop } = useSafeAreaInsets()

  return (
    <Tab.Navigator
      style={{ paddingTop }}
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={{
        tabBarStyle: {
          elevation: 0,
          shadowColor: 'transparent'
        },
        tabBarIndicatorStyle: {
          backgroundColor: colors.tertiary
        }
      }}
    >
      <Tab.Screen name="Artist" component={ArtistScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}