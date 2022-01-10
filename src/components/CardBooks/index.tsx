import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

export type BookProps = {
  title: string;
  authors: string[];
  pageCount: number;
  imageUrl: string;
  publisher: string;
  published: number;
  category: string;
};

type CardProps = {
  book: BookProps;
} & TouchableOpacityProps;

export function CardBook({ book, ...rest }: CardProps) {
  return (
    <S.Container {...rest}>
      <S.BookImage source={{ uri: book.imageUrl }} />

      <S.Detail>
        <S.Title>{book.title}</S.Title>

        <S.HighlightDescription>
          {book.authors.map((author, index) => {
            if (index > 0) {
              return `, ${author}`;
            }
            return author;
          })}
        </S.HighlightDescription>
        <S.Description>{book.pageCount} Páginas</S.Description>
        <S.Description>{book.publisher} </S.Description>
        <S.Description>Publicado em {book.published} </S.Description>
        <S.Description> {book.category} </S.Description>
      </S.Detail>
    </S.Container>
  );
}
