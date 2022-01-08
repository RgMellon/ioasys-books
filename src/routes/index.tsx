import React from 'react';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../hooks/auth';

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export function Routes() {
  const { user, loading } = useAuth();

  console.log(user);

  return loading ? (
    <ActivityIndicator />
  ) : (
    <NavigationContainer>
      {!!user && user?.id ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
