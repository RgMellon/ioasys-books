import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

type InputProps = {
  value?: string;
  label: string;
  children?: React.ReactNode;
} & TextInputProps;

import * as S from './styles';

export function Input({ value, label, children, ...rest }: InputProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Label>{label}</S.Label>
        <S.InputText {...rest} />
      </S.Wrapper>

      {!!children && children}
    </S.Container>
  );
}
