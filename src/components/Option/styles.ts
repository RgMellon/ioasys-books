import styled, { css } from 'styled-components/native';

type OptionProps = {
  isSelectedOption: boolean;
};
export const OptionButton = styled.TouchableOpacity<OptionProps>`
  ${({ theme, isSelectedOption }) => css`
    height: 32px;
    padding: 6px 16px;
    border-radius: 44px;
    border: 1px solid ${theme.colors.opacity_background};

    justify-content: center;
    align-items: center;

    margin-right: 8px;
    margin-bottom: 8px;

    background-color: ${isSelectedOption
      ? theme.colors.text
      : theme.colors.secondary};
  `}
`;

export const OptionButtonText = styled.Text<OptionProps>`
  ${({ theme, isSelectedOption }) => css`
    font-size: 12px;
    font-family: ${theme.fonts.primary_400};
    line-height: 20px;
    color: ${isSelectedOption ? theme.colors.secondary : theme.colors.text};
  `}
`;
