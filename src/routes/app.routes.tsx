import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../pages/App/Home';
import { BookDetail } from '../pages/App/BookDetail';

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="BookDetail" component={BookDetail} />
    </Stack.Navigator>
  );
}
