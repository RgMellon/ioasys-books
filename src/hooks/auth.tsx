import React, { createContext, useContext, useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';

type User = {
  id: string;
  birthdate: string;
  email: string;
  name: string;
  gender: string;
  token: string;
};

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  loading: boolean;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<User>({} as User);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@Books:token',
        '@Books:user',
      ]);
      if (token[1] && user[1]) {
        api.defaults.headers.authorization = `Bearer ${token[1]}`;

        const parsedUser = JSON.parse(user[1]);

        console.log(parsedUser);

        setData(parsedUser);
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

      console.log(user, 'user');

      const token = response.headers.authorization;

      await AsyncStorage.multiSet([
        ['@Books:token', token],
        ['@Books:user', JSON.stringify(user)],
      ]);

      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({ ...user, token });
    } catch (err) {
      throw new Error(err as string);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user: data,
        signIn,

        loading,
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
