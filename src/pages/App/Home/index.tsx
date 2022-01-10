import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Modal, FlatList, Alert } from 'react-native';
import debounce from 'lodash.debounce';
import { Feather } from '@expo/vector-icons';

import { CardBook } from '../../../components/CardBooks';
import { Header } from '../../../components/Header';
import { CardAnimation } from '../../../components/CardAnimated';

import filterImage from '../../../assets/img/filter.png';

import * as S from './styles';
import { FilterOptions } from '../../../components/FilterOptions';
import { useBook } from '../../../hooks/books';

export function Home() {
  const navigation = useNavigation();

  const { getBooks, books, loadBooks, setBooks, booksWithoutFilter } =
    useBook();

  const [input, setInput] = useState<string>('');
  const [visible, setVisible] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadBooks() {
      try {
        await getBooks();
      } catch (err) {
        Alert.alert('Ops', ' algo de errado aconteceu');
      }
    }

    loadBooks();
  }, []);

  function handleToggleModal() {
    setVisible(oldState => !oldState);
  }

  function handleDetail(id: string) {
    navigation.navigate('BookDetail', {
      id,
    });
  }

  function handlePaginate() {
    const currentPage = page + 1;
    setPage(currentPage);
    getBooks(String(currentPage));
  }

  const makeSearch = useCallback(
    search => {
      try {
        let searchValue = search.toLowerCase();

        const filteredValues = books.filter(book => {
          const bookTitleLower = book.title.toLowerCase();

          return bookTitleLower.indexOf(searchValue) > -1;
        });

        if (!search) {
          setBooks(booksWithoutFilter);
          return;
        }

        setBooks(filteredValues);
      } catch (error) {
        alert('error');
      }
    },
    [books, booksWithoutFilter],
  );

  const debouncedMethod = useMemo(
    () =>
      debounce(arg => {
        makeSearch(arg);
      }, 1500),
    [makeSearch],
  );

  function handleSearchText(text: string) {
    setInput(text);
    debouncedMethod(text);
  }

  return (
    <S.Container>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={handleToggleModal}
      >
        <FilterOptions onToggle={handleToggleModal} />
      </Modal>

      {!loadBooks && (
        <FlatList
          ListHeaderComponent={
            <>
              <Header />

              <S.WrapperFilter>
                <S.ContainerSearch>
                  <S.SearchInput
                    placeholder="Procure um livro"
                    onChangeText={text => handleSearchText(text)}
                    value={input}
                    returnKeyType="search"
                  />
                  <Feather name="search" size={18} color="#333333" />
                </S.ContainerSearch>

                <S.ButtonFilter onPress={handleToggleModal}>
                  <S.FilterImage source={filterImage} />
                </S.ButtonFilter>
              </S.WrapperFilter>
            </>
          }
          data={books}
          keyExtractor={book => book.id.toString()}
          showsVerticalScrollIndicator={false}
          onEndReached={handlePaginate}
          onEndReachedThreshold={0.1}
          renderItem={({ item: book }) => (
            <CardAnimation>
              <CardBook
                book={book}
                onPress={() => {
                  handleDetail(book.id);
                }}
              />
            </CardAnimation>
          )}
        />
      )}
    </S.Container>
  );
}
