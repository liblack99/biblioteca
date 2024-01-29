import React, { createContext, useState, useEffect } from "react";
import { library } from "../Services/books.json";
const BooksContext = createContext();

function BooksProvider({ children }) {
  const booksAvailable = library.map((book) => book.book);
  const [books, setBooks] = useState(booksAvailable);
  const [booksToReadList, setBooksToReadList] = useState([]);
  const [openReadList, setOpenReadList] = useState(false);

  useEffect(() => {
    const handleStorageChange = () => {
      const books = localStorage.getItem("books");
      if (books !== null) {
        setBooks(JSON.parse(books));
      }
    };
    const handleStorageChangeBooksRead = () => {
      const booksRead = localStorage.getItem("booksRead");
      if (booksRead !== null) {
        setBooksToReadList(JSON.parse(booksRead));
      }
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("storage", handleStorageChangeBooksRead);

    handleStorageChange();
    handleStorageChangeBooksRead();
  }, []);

  const saveBooks = (books) => {
    localStorage.setItem("books", JSON.stringify(books));
  };

  const saveBooksRead = (books) => {
    localStorage.setItem("booksRead", JSON.stringify(books));
  };

  const addToReadList = (id) => {
    const movedBook = books.find((book) => book.ISBN === id);
    const updatedBooksToRead = [...booksToReadList, movedBook];
    const updatedBooks = books.filter((book) => book.ISBN !== id);
    setBooksToReadList(updatedBooksToRead);
    setBooks(updatedBooks);
    saveBooks(updatedBooks);
    saveBooksRead(updatedBooksToRead);
  };

  const deleteToReadList = (id) => {
    const bookRead = booksToReadList.find((book) => book.ISBN === id);
    const updatedBooks = [...books, bookRead];
    const updatedBooksToRead = booksToReadList.filter(
      (book) => book.ISBN !== id
    );
    setBooks(updatedBooks);
    setBooksToReadList(updatedBooksToRead);
    saveBooksRead(updatedBooksToRead);
    saveBooks(updatedBooks);
  };

  return (
    <BooksContext.Provider
      value={{
        books,
        setBooks,
        booksToReadList,
        addToReadList,
        deleteToReadList,
        openReadList,
        setOpenReadList,
      }}>
      {children}
    </BooksContext.Provider>
  );
}

export { BooksProvider, BooksContext };
