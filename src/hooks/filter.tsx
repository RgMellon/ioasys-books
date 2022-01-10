import React, { createContext, useContext, useEffect, useState } from 'react';
import { BookResponse, useBook } from './books';

type FilterProp = {
  category: string[];
  published: string[];
};

type PublishDateProps = {
  books: BookResponse[];
  published: string[];
};

type FilterContextData = {
  currentFilter: FilterProp;
  setCurrentFilter: (currentFilter: FilterProp) => void;
  aplyFilter({ category, published }: FilterProp): void;
};

type FilterProviderProps = {
  children: React.ReactNode;
};

const FilterContext = createContext<FilterContextData>({} as FilterContextData);

function FilterProvider({ children }: FilterProviderProps) {
  const { books, setBooks, booksWithoutFilter } = useBook();
  const [currentFilter, setCurrentFilter] = useState({
    category: [] as string[],
    published: [] as string[],
  });

  function aplyFilter({ category, published }: FilterProp) {
    if (category.length === 0 && published.length === 0) {
      setBooks(booksWithoutFilter);
      return;
    }

    if (category.length > 0 && published.length > 0) {
      const result = filterByCategoryAndDate({ category, published });
      setBooks(result);

      return;
    }

    if (category.length > 0 && published.length === 0) {
      const result = filterByCategory(category);
      setBooks(result);

      return;
    }

    const result = filterByPublishedDate({ books, published });

    setBooks(result);
    return;
  }

  function filterByPublishedDate({
    books: filteredBooks,
    published,
  }: PublishDateProps) {
    return filteredBooks.filter(book =>
      published.find(findPublishDateBook => {
        return findPublishDateBook === String(book.published);
      }),
    );
  }

  function filterByCategory(categories: string[]) {
    return booksWithoutFilter.filter(book =>
      categories.find(filterCategory => {
        return filterCategory === book.category;
      }),
    );
  }

  function filterByCategoryAndDate({ category, published }: FilterProp) {
    const resultOfFilter = filterByCategory(category);

    const filtDate = filterByPublishedDate({
      books: resultOfFilter,
      published,
    });
    return filtDate;
  }

  return (
    <FilterContext.Provider
      value={{
        currentFilter,
        setCurrentFilter,
        aplyFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

function useFilter(): FilterContextData {
  const context = useContext(FilterContext);
  return context;
}

export { useFilter, FilterProvider };
