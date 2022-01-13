import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Page1Screen } from '../screens/Page1Screen';
import { Page2Screen } from '../screens/Page2Screen';
import { Page3Screen } from '../screens/Page3Screen';
import { ProfileScreen } from '../screens/ProfileScreen';

export type StackRoutesParams = {
  Page1Screen: undefined
  Page2Screen: undefined
  Page3Screen: undefined
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
        component={Page1Screen}
      />
      <Stack.Screen name="Tab2Screen" component={Page2Screen} />
      <Stack.Screen name="Tab3Screen" component={Page3Screen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
}