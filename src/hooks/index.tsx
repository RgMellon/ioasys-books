import React from 'react';

import { AuthProvider } from './auth';
import { BookProvider } from './books';
import { FilterProvider } from './filter';

type AppProviderProps = {
  children: React.ReactNode;
};

function AppProvider({ children }: AppProviderProps) {
  return (
    <AuthProvider>
      <BookProvider>
        <FilterProvider>{children}</FilterProvider>
      </BookProvider>
    </AuthProvider>
  );
}

export { AppProvider };
