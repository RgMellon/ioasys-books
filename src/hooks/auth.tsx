import React, { createContext, useContext, useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';

type User = {
  id: string;
  birthdate: string;
  email: string;
  name: string;
  gender: string;
};

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  loading: boolean;
  signOut(): Promise<void>;
};

interface AuthState {
  user: User;
  token: string;
  refreshToken: string;
}

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<AuthState>({} as AuthState);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user, refreshToken] = await AsyncStorage.multiGet([
        '@Books:token',
        '@Books:user',
        '@Books:refresh_token',
      ]);

      if (token[1] && user[1] && refreshToken[1]) {
        api.defaults.headers.authorization = `Bearer ${token[1]}`;

        const parsedUser = JSON.parse(user[1]);

        setData({
          token: token[1],
          refreshToken: refreshToken[1],
          user: parsedUser,
        });
      }
      setLoading(false);
    }
    loadStorageData();
  }, []);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post('/auth/sign-in', {
        email: 'desafio@ioasys.com.br',
        password: '12341234',
      });

      const user = response.data;
      const token = response.headers.authorization;
      const refreshToken = response.headers['refresh-token'];

      await AsyncStorage.multiSet([
        ['@Books:token', token],
        ['@Books:refresh_token', refreshToken],
        ['@Books:user', JSON.stringify(user)],
      ]);

      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({ token, refreshToken, user });
    } catch (err) {
      throw new Error(err as string);
    }
  }

  async function signOut() {
    await AsyncStorage.multiRemove([
      '@Books:token',
      '@Books:user',
      '@Books:refresh_token',
    ]);

    setData({} as AuthState);
  }

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
        loading,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  return context;
}

export { useAuth, AuthProvider };
