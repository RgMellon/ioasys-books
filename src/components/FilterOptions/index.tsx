import React, { useEffect, useState } from 'react';

import { Feather } from '@expo/vector-icons';

import { Option } from '../Option';

import * as S from './styles';
import { ScrollView } from 'react-native';
import { Button } from '../Button';
import { useFilter } from '../../hooks/filter';

const categories = [
  'Biografias',
  'Coleções',
  'Comportamento',
  'Contos',
  'Crítica Literária',
  'Folclore',
  'Humor',
  'Jogos',
  'Jornais',
  'Literatura Brasileira',
  'Literatura Estrangeira',
  'Livros Raros',
  'Manuscritos',
  'Poesia',
  'Outros Assuntos',
];

const years = [
  '2012',
  '2013',
  '2014',
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
  '2020',
  '2021',
];

type FilterOptionsProp = {
  onToggle: () => void;
};

export function FilterOptions({ onToggle }: FilterOptionsProp) {
  const { currentFilter, setCurrentFilter, aplyFilter } = useFilter();

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPublishYears, setSelectedPublishYears] = useState<string[]>(
    [],
  );

  useEffect(() => {
    setSelectedCategories(currentFilter.category);
    setSelectedPublishYears(currentFilter.published);
  }, [currentFilter]);

  function handleSetSelectedCategory(currentCategory: string) {
    const alreadySelected = selectedCategories.find(
      selectedCategory => selectedCategory === currentCategory,
    );

    if (alreadySelected) {
      setSelectedCategories(oldSelectedCategories =>
        oldSelectedCategories.filter(category => category !== alreadySelected),
      );

      return;
    }

    setSelectedCategories(oldSelectedCategories => [
      ...oldSelectedCategories,
      currentCategory,
    ]);
  }

  function handleSelectPublishDate(publishYear: string) {
    const alreadySelectedYear = selectedPublishYears.find(
      selectedYear => selectedYear === publishYear,
    );

    if (alreadySelectedYear) {
      setSelectedPublishYears(oldSelectedPublisYears =>
        oldSelectedPublisYears.filter(
          publishYear => publishYear !== alreadySelectedYear,
        ),
      );

      return;
    }

    setSelectedPublishYears(oldPublishYear => [...oldPublishYear, publishYear]);
  }

  function handleSubmitFilter() {
    const filter = {
      category: selectedCategories,
      published: selectedPublishYears,
    };

    setCurrentFilter(filter);

    aplyFilter(filter);

    onToggle();
  }

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <S.ButtonClose onPress={onToggle}>
            <Feather name="x" size={10} color="#333333" />
          </S.ButtonClose>
        </S.Header>

        <ScrollView>
          <S.Title>Selecione as categorias</S.Title>

          <S.SelectorContainer>
            {categories.map(category => (
              <Option
                isSelected={
                  !!selectedCategories.find(
                    selectedCategory => selectedCategory === category,
                  )
                }
                key={category}
                option={category}
                handleSetSelectedCategory={handleSetSelectedCategory}
              />
            ))}
          </S.SelectorContainer>

          <S.Title>Selecione os anos</S.Title>

          <S.SelectorContainer>
            {years.map(year => (
              <Option
                isSelected={
                  !!selectedPublishYears.find(
                    selectedPublishYear => selectedPublishYear === year,
                  )
                }
                key={year}
                option={year}
                handleSetSelectedCategory={handleSelectPublishDate}
              />
            ))}
          </S.SelectorContainer>
        </ScrollView>

        <S.WrapperButton>
          <Button title="Filtrar" onPress={handleSubmitFilter} />
        </S.WrapperButton>
      </S.Content>
    </S.Container>
  );
}
