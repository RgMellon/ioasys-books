import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';

type User = {
  id: string;
  email: string;
  name: string;
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
    async function loadUserData() {
      setLoading(false);
    }

    loadUserData();
  }, []);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post('api', {
        email,
        password,
      });

      const { user, token } = response.data;
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
