import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';

type BookContextData = {
  books: BookResponse[];
  booksWithoutFilter: BookResponse[];
  loadBooks: boolean;
  getBooks(page?: string): Promise<void>;
  setBooks(book: BookResponse[]): void;
};

type BookProviderProps = {
  children: React.ReactNode;
};

export type BookResponse = {
  id: string;
  title: string;
  authors: string[];
  pageCount: number;
  imageUrl: string;
  publisher: string;
  published: number;
  category: string;
};

const BookContext = createContext<BookContextData>({} as BookContextData);

function BookProvider({ children }: BookProviderProps) {
  const [books, setBooks] = useState<BookResponse[]>([]);

  const [booksWithoutFilter, setBooksWithoutFilter] = useState<BookResponse[]>(
    [],
  );

  const [loadBooks, setLoadBooks] = useState(true);

  async function getBooks(page = '1') {
    try {
      const response = await api.get('/books', {
        params: {
          page,
          amount: '10',
        },
      });

      const { data: listOfBooks } = response.data;

      setBooks(prevState => prevState.concat(...listOfBooks));
      setBooksWithoutFilter(prevStateWithoutFilter =>
        prevStateWithoutFilter.concat(...listOfBooks),
      );
    } catch (err) {
      throw new Error(String(err));
    } finally {
      setLoadBooks(false);
    }
  }

  return (
    <BookContext.Provider
      value={{
        getBooks,
        loadBooks,
        books,
        setBooks,
        booksWithoutFilter,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

function useBook(): BookContextData {
  const context = useContext(BookContext);
  return context;
}

export { useBook, BookProvider };
