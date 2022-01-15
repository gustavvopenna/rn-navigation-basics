import React from 'react';
import { Platform, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons'

import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';

import { colors } from '../theme/globalStyles';
import { TopTabsNavigator } from './TopTabsNavigator';

const BottomTabIOS = createBottomTabNavigator();
const BottomTabAndroid = createMaterialBottomTabNavigator();

export const Tabs = () => (
  Platform.OS === 'ios'
    ? <TabsIOS />
    : <TabsAndroid />
)

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarStyle: {
        borderTopColor: 'white',
      },
      tabBarIcon: (({ focused, color }) => {
        let iconName: React.ReactNode | string = ''
        switch(route.name) {
          case 'Tab1Screen':
            iconName = <Ionicons name='people' />
            break;
          case 'TopTabsNavigator':
            iconName = <Ionicons name='albums-outline' size={30} />
            break;
          case 'StackNavigator':
            iconName = <Ionicons name='file-tray-stacked-outline' size={30} />
            break;
        }
        return <Text style={{ color }}>{iconName}</Text>
      })
      })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab 1'}} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="TopTabsNavigator" options={{ title: 'Top Tabs'}} component={TopTabsNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack'}} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.tertiary,
        tabBarInactiveTintColor: colors.lightPurple,
        tabBarStyle: {
          borderTopColor: 'white',
        },
        tabBarIcon: (({ focused, color, size }) => {
          let iconName: React.ReactNode | string = ''
          switch(route.name) {
            case 'Tab1Screen':
              iconName = <Ionicons name='people' size={30} />
              break;
            case 'TopTabsNavigator':
              iconName = <Ionicons name='albums-outline' size={30} />
              break;
            case 'StackNavigator':
              iconName = <Ionicons name='file-tray-stacked-outline' size={30} />
              break;
          }
          return <Text style={{ color: focused ? colors.tertiary : colors.lightPurple }}>{iconName}</Text>
        })
      })}
    >
      <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab 1'}} component={Tab1Screen} />
      <BottomTabIOS.Screen name="TopTabsNavigator" options={{ title: 'Top Tabs'}} component={TopTabsNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack'}} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
}