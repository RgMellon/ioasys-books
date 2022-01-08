import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { SigIn } from '../pages/Auth/SignIn';

const Stack = createStackNavigator();

export function AuthRoutes() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SigIn" component={SigIn} />
    </Stack.Navigator>
  );
}
