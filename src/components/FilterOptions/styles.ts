import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.opacity_background};
    padding: 20px;

    justify-content: center;
  `}
`;

export const Content = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 80%;
    background: ${theme.colors.secondary};
    border-radius: 4px;
    padding: 16px;
  `}
`;

export const Header = styled.View`
  height: 40px;
  width: 100%;

  flex-direction: row;
  justify-content: flex-end;
`;

export const ButtonClose = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 32px;
    height: 32px;
    border: 1px;
    border-color: ${theme.colors.opacity_background};
    border-radius: 20px;

    justify-content: center;
    align-items: center;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: 12px;
    line-height: 20px;
    font-family: ${theme.fonts.primary_500};
    margin-bottom: 8px;
  `}
`;

export const SelectorContainer = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
`;

export const WrapperButton = styled.View`
  margin-top: 40px;
  justify-content: center;
  align-items: center;
`;
