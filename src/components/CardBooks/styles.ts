import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  ${({ theme }) => css`
    border-radius: 4px;
    padding: 19px 16px;
    background: ${theme.colors.secondary};
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 16px;
    border-radius: 10px;
  `}
`;

export const BookImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 81px;
  height: 122px;
`;

export const Detail = styled.View`
  flex: 1;
  margin-left: 16px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 14px;
    line-height: 20px;
    color: ${theme.colors.text};
    font-family: ${theme.fonts.primary_600};
  `}
`;

export const HighlightDescription = styled.Text`
  ${({ theme }) => css`
    font-size: 12px;
    line-height: 20px;
    color: ${theme.colors.detail};
    margin-bottom: 25px;
    font-family: ${theme.fonts.primary_500};
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: 12px;
    line-height: 20px;
    color: ${theme.colors.description};
    font-family: ${theme.fonts.primary_400};
  `}
`;
