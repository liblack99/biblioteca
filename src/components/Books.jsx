import { useContext, useState } from "react";
import BookCard from "./BookCard.jsx";

import { BooksContext } from "../context/BooksContext.jsx";
import SearchBooks from "./SearchBooks.jsx";
import FiltersPages from "./FiltersPages.jsx";
import FiltersByCategory from "./FiltersByCategory.jsx";

function Books() {
  const { books, addToReadList } = useContext(BooksContext);
  const [filters, setFilters] = useState({
    genre: "all",
    maxPage: 1200,
    name: "",
  });

  const booksFilters = books.filter((book) => {
    const genreCondition =
      filters.genre === "all" || book.genre === filters.genre;
    const maxPageCondition = book.pages <= filters.maxPage;
    const nameCondition = book.title
      .toLowerCase()
      .includes(filters.name.toLowerCase());

    return genreCondition && maxPageCondition && nameCondition;
  });
  const genresBooks = books
    .map((book) => book.genre)
    .filter((item, i, array) => array.indexOf(item) === i);

  const handleChange = (event) => {
    const range = parseInt(event.target.value);
    setFilters((prevFilters) => ({
      ...prevFilters,
      maxPage: range,
    }));
  };

  const handleChangeGenres = (event) => {
    const value = event.target.value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      genre: value,
    }));
  };

  const handleChangeSearch = (event) => {
    const value = event.target.value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      name: value,
    }));
  };

  return (
    <div className="flex flex-col gap-4 pl-6 relative mb-20 mt-6 w-[60%] h-full sm:w-[90%] md:w-[90%] lg:w-[60%]">
      <div className="flex justify-between items-center w-full flex-wrap">
        <h2 className="text-[#E2e8f0] text-4xl">
          {books.length} Libros disponible
        </h2>
        <SearchBooks
          value={filters.name}
          handleChangeSearch={handleChangeSearch}
        />
      </div>
      <div className="flex items-center justify-between flex-wrap md:flex-wrap sm:flex-wrap">
        <FiltersPages maxPage={filters.maxPage} handleChange={handleChange} />
        <FiltersByCategory
          genresBooks={genresBooks}
          handleChangeGenres={handleChangeGenres}
        />
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-2">
        {booksFilters.map((book, index) => (
          <BookCard
            key={book.ISBN}
            book={book}
            index={index}
            addToReadList={addToReadList}
          />
        ))}
      </div>
    </div>
  );
}

export default Books;
