import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';

const windowWidth = Dimensions.get('window').width;

export const LoadingScreen = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    flex: 1;
    padding: 20px;
  `}
`;

export const WrapperFilter = styled.View`
  width: 100%;
  margin-bottom: 32px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerSearch = styled.View`
  ${({ theme }) => css`
    width: 80%;
    border: 1px;
    border-color: ${theme.colors.opacity_background};
    border-radius: 2px;
    padding: 12px 14px;

    flex-direction: row;
    align-items: center;
  `}
`;

export const SearchInput = styled.TextInput`
  ${({ theme }) => css`
    width: 80%;
    flex: 1;
    color: ${theme.colors.text};
  `}
`;

export const ButtonFilter = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
`;

export const FilterImage = styled.Image`
  width: 20px;
  height: 20px;
`;
