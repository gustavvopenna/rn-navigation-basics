import React from 'react';
import { Platform, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

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
        let iconName: string = ''
        switch(route.name) {
          case 'Tab1Screen':
            iconName = 'T1'
            break;
          case 'TopTabsNavigator':
            iconName = 'TT'
            break;
          case 'StackNavigator':
            iconName = 'ST'
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
          let iconName: string = ''
          switch(route.name) {
            case 'Tab1Screen':
              iconName = 'T1'
              break;
            case 'TopTabsNavigator':
              iconName = 'TT'
              break;
            case 'StackNavigator':
              iconName = 'ST'
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