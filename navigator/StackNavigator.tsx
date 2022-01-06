import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tab1Screen" component={Tab1Screen} />
      <Stack.Screen name="Tab2Screen" component={Tab2Screen} />
      <Stack.Screen name="Tab3Screen" component={Tab3Screen} />
    </Stack.Navigator>
  );
}