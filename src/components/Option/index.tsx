import React, { useEffect, useState } from 'react';

type OptionProps = {
  isSelected: boolean;
  option: string;
  handleSetSelectedCategory: (option: string) => void;
};

import * as S from './styles';

export function Option({
  isSelected,
  option,
  handleSetSelectedCategory,
}: OptionProps) {
  const [isSelectedOption, setIsSelectedOption] = useState(false);

  useEffect(() => {
    setIsSelectedOption(isSelected);
  }, [isSelected]);

  function handleSelectedOption(option: string) {
    setIsSelectedOption(oldOption => !oldOption);
    handleSetSelectedCategory(option);
  }

  return (
    <S.OptionButton
      isSelectedOption={isSelectedOption}
      onPress={() => {
        handleSelectedOption(option);
      }}
    >
      <S.OptionButtonText isSelectedOption={isSelectedOption}>
        {option}
      </S.OptionButtonText>
    </S.OptionButton>
  );
}
