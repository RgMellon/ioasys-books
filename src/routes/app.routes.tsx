import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../pages/App/Home';

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
