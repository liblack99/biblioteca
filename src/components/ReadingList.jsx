import React, { useContext } from "react";
import BookCard from "./BookCard";
import { BooksContext } from "../context/BooksContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function ReadingList() {
  const { booksToReadList, deleteToReadList } = useContext(BooksContext);

  return (
    <aside className="flex h-[1000px] border border-white flex-col w-[35%] overflow-y-auto  p-4 bg-[#12171b] rounded-lg mt-[20px]  sm:w-[90%] md:w-[90%] lg:w-[35%] ml-6  ">
      <h2 className="text-[#E2e8f0]  text-4xl text-center mb-8">
        Lista de lectura
      </h2>
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-2 w-[90%] place-content-center">
          {booksToReadList?.map((book) => (
            <BookCard
              key={book.ISBN}
              book={book}
              deleteToReadList={deleteToReadList}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}

export default ReadingList;
