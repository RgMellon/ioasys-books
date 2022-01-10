import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
  margin-bottom: 32px;
`;

export const AreaLogo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.Image``;

export const Title = styled.Text`
  ${({ theme }) => css`
    margin-left: 17px;
    font-size: 28px;
    font-family: ${theme.fonts.primary_400};
  `}
`;

export const ActionArea = styled.View``;

export const LogoutButton = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px;
    border-color: ${theme.colors.opacity_background};

    justify-content: center;
    align-items: center;
  `}
`;
