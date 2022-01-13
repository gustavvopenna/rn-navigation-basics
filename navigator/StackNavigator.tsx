import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';

import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';
import { ProfileScreen } from '../screens/ProfileScreen';

export type StackRoutesParams = {
  Tab1Screen: undefined
  Tab2Screen: undefined
  Tab3Screen: undefined
  ProfileScreen: {
    id: number,
    name: string
  }
}

const Stack = createNativeStackNavigator<StackRoutesParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white'
        },
        contentStyle: {
          backgroundColor: 'white'
        }
      }}
      >
      <Stack.Screen
        name="Tab1Screen"
        component={Tab1Screen}
      />
      <Stack.Screen name="Tab2Screen" component={Tab2Screen} />
      <Stack.Screen name="Tab3Screen" component={Tab3Screen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
}