import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';

import api from '../../../services/api';

import * as S from './styles';

type BookProps = {
  id: string;
  title: string;
  description: string;
  authors: string[];
  pageCount: number;
  category: string;
  imageUrl: string;
  isbn10: string;
  isbn13: string;
  language: string;
  publisher: string;
  published: number;
};

type RouteParams = {
  id: string;
};

export function BookDetail() {
  const navigation = useNavigation();
  const { params } = useRoute();
  const routeParams = params as RouteParams;

  const [bookDetail, setBookDetail] = useState<BookProps>({} as BookProps);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    getBookById();
  }, []);

  async function getBookById() {
    try {
      const response = await api.get(`/books/${routeParams.id}`);
      setBookDetail(response.data);
    } catch (err) {
      Alert.alert('Ops', 'Erro ao listar o detalhe do livro');
    } finally {
      setLoad(false);
    }
  }

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <S.Container>
      <S.Header>
        <S.ButtonGoBack onPress={handleGoBack}>
          <Feather name="arrow-left" size={16} color="#333" />
        </S.ButtonGoBack>
      </S.Header>
      {!load && (
        <>
          <S.BookWrapper>
            <S.BookImage source={{ uri: bookDetail.imageUrl }} />

            <S.Title>{bookDetail.title}</S.Title>

            <S.HighlightDescription>
              {bookDetail.authors.map((author, index) => {
                if (index > 0) {
                  return `, ${author}`;
                }
                return author;
              })}
            </S.HighlightDescription>
          </S.BookWrapper>

          <S.Content>
            <S.UpperCaseDescription>INFORMAÇÕES</S.UpperCaseDescription>

            <S.Wrapper>
              <S.BoldDescription>Páginas</S.BoldDescription>
              <S.Description>{bookDetail.pageCount} páginas</S.Description>
            </S.Wrapper>

            <S.Wrapper>
              <S.BoldDescription>Editora</S.BoldDescription>
              <S.Description>{bookDetail.publisher}</S.Description>
            </S.Wrapper>

            <S.Wrapper>
              <S.BoldDescription>Publicação</S.BoldDescription>
              <S.Description>{bookDetail.published}</S.Description>
            </S.Wrapper>

            <S.Wrapper>
              <S.BoldDescription>Idioma</S.BoldDescription>
              <S.Description>{bookDetail.language}</S.Description>
            </S.Wrapper>

            <S.Wrapper>
              <S.BoldDescription>Título Original</S.BoldDescription>
              <S.Description>{bookDetail.title}</S.Description>
            </S.Wrapper>

            <S.Wrapper>
              <S.BoldDescription>ISBN-10</S.BoldDescription>
              <S.Description>{bookDetail.isbn10}</S.Description>
            </S.Wrapper>

            <S.Wrapper>
              <S.BoldDescription>ISBN-13</S.BoldDescription>
              <S.Description>{bookDetail.isbn13}</S.Description>
            </S.Wrapper>

            <S.Wrapper>
              <S.BoldDescription>Categoria</S.BoldDescription>
              <S.Description>{bookDetail.category}</S.Description>
            </S.Wrapper>

            <S.UpperCaseDescription>RESENHA DA EDITORA</S.UpperCaseDescription>
            <S.Description>{bookDetail.description}</S.Description>
          </S.Content>
        </>
      )}
    </S.Container>
  );
}
