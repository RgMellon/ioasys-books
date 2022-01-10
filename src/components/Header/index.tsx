import React from 'react';

import logo_black_image from '../../assets/img/black_logo.png';

import { Feather } from '@expo/vector-icons';

import { useAuth } from '../../hooks/auth';

import * as S from './styles';

export function Header() {
  const { signOut } = useAuth();

  function handleLogout() {
    signOut();
  }

  return (
    <S.Container>
      <S.AreaLogo>
        <S.Logo source={logo_black_image} />
        <S.Title> Books </S.Title>
      </S.AreaLogo>

      <S.ActionArea>
        <S.LogoutButton onPress={handleLogout}>
          <Feather name="log-out" size={16} color="#333" />
        </S.LogoutButton>
      </S.ActionArea>
    </S.Container>
  );
}
