import React, { createContext, useState } from 'react';

export const BookContext = createContext();

export const BookProvider = (props) => {
  const [books, setBooks] = useState([
    {
      id: 0,
      bookname: 'Anna Karenina',
      author: 'Leo Tolstoy',
      language: 'English',
    },
    {
      id: 1,
      bookname: 'To Kill a Mockingbirda',
      author: 'Harper Lee',
      language: 'English',
    },
    {
      id: 2,
      bookname: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      language: 'English',
    },
    {
      id: 3,
      bookname: 'One Hundred Years of Solitude',
      author: 'Gabriel García Márquez',
      language: 'English',
    },
    {
      id: 4,
      bookname: 'A Passage to India',
      author: 'E.M. Forster',
      language: 'English',
    },
  ]);
  return (
    <BookContext.Provider value={[books, setBooks]}>
      {props.children}
    </BookContext.Provider>
  );
};
