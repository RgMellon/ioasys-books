import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    height: 60px;
    background-color: ${theme.colors.opacity_background};
    padding: 10px 13px;
    border-radius: 4px;
  `}
`;

export const Wrapper = styled.View`
  width: 70%;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_400};
    font-size: 12px;
    color: ${theme.colors.opacity_light_tex};
  `}
`;

export const InputText = styled(TextInput)`
  ${({ theme }) => css`
    flex: 1;

    margin-top: 4px;
    color: ${theme.colors.light_text};
    font-size: 16px;
    font-family: ${theme.fonts.primary_400};
  `}
`;
