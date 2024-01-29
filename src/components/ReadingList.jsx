import React, { useContext } from "react";
import BookCard from "./BookCard";
import { BooksContext } from "../context/BooksContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function ReadingList() {
  const { booksToReadList, deleteToReadList, openReadList, setOpenReadList } =
    useContext(BooksContext);

  return (
    <aside
      className={`${
        openReadList ? "flex" : "hidden"
      } fixed h-full flex items-center flex-col overflow-y-scroll top-0 right-0 w-[600px] bg-black`}>
      <FontAwesomeIcon
        icon={faX}
        className="text-white absolute text-2xl right-0 p-4 cursor-pointer"
        onClick={() => setOpenReadList(false)}
      />
      <h2 className="text-white text-4xl pt-[20px] mb-[20px]">
        Lista de lectura
      </h2>
      <div className="w-[90%] h-[auto]  grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))]  gap-8 p-8">
        {booksToReadList?.map((book) => (
          <BookCard
            key={book.ISBN}
            book={book}
            deleteToReadList={deleteToReadList}
          />
        ))}
      </div>
    </aside>
  );
}

export default ReadingList;
