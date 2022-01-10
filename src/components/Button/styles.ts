import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 85px;
    height: 36px;
    background-color: ${theme.colors.secondary};

    border-radius: 44px;
    justify-content: center;
    align-items: center;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.detail}
    font-family: ${theme.fonts.primary_500}
  `}
`;
