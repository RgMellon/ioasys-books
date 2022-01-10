import styled, { css } from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 40,
    paddingTop: 40,
    paddingBottom: 100,
    // alignItems: 'center',
  },
})`
  flex: 1;
  background-color: white;
`;

export const Header = styled.View`
  width: 100%;
  height: 50px;
`;

export const BookWrapper = styled.View`
  align-items: center;
`;

export const ButtonGoBack = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 32px;
    height: 32px;
    border: 1px;
    border-color: ${theme.colors.opacity_background};
    border-radius: 16px;

    justify-content: center;
    align-items: center;
  `}
`;

export const BookImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 240px;
  height: 351px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 28px;
    line-height: 40px;
    color: ${theme.colors.text};
    margin-top: 24px;
    font-family: ${theme.fonts.primary_600};
  `}
`;

export const HighlightDescription = styled.Text`
  ${({ theme }) => css`
    font-size: 12px;
    line-height: 20px;
    color: ${theme.colors.detail};
  `}
`;

export const UpperCaseDescription = styled.Text`
  ${({ theme }) => css`
    font-size: 12px;
    /* font-weight: 500; */
    text-transform: uppercase;
    color: ${theme.colors.text};
    font-family: ${theme.fonts.primary_600}
    margin: 32px 0;
  `}
`;

export const BoldDescription = styled.Text`
  ${({ theme }) => css`
    font-size: 12px;
    font-family: ${theme.fonts.primary_600};
    color: ${theme.colors.text};
    margin-top: 16px;
  `}
`;

export const Content = styled.View``;

export const Description = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: #999999;
  line-height: 20px;
`;

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
