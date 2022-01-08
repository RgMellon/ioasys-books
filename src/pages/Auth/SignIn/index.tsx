import React, { useState } from 'react';

import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';

import { useAuth } from '../../../hooks/auth';
import backgroundImage from '../../../assets/img/background-login.png';

import * as S from './styles';

export function SigIn() {
  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn() {
    try {
      //  const schema = Yup.object().shape({
      //    email: Yup.string()
      //      .required('E-mail obrigatório')
      //      .email('Digite um e-mail válido'),

      //    password: Yup.string().required('Senha obrigatória'),
      //  });

      //  await schema.validate({ email, password });

      signIn({ email, password });
    } catch (err) {
      //  if (err instanceof Yup.ValidationError) {
      //    Alert.alert('Opa', err.message);
      //  } else {
      //    Alert.alert('Erro na autenticação', 'Ocorreu um erro ao fazer login');
      //  }
    }
  }

  return (
    <S.Container source={backgroundImage}>
      <Input
        label="E-mail"
        keyboardType="email-address"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={setEmail}
        value={email}
      />

      <S.Wrapper>
        <Input
          label="Password"
          onChangeText={setPassword}
          secureTextEntry={true}
        >
          <Button title="Entrar" onPress={handleSignIn} />
        </Input>
      </S.Wrapper>
    </S.Container>
  );
}
