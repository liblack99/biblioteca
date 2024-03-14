import React from "react";
import { BooksContext } from "../context/BooksContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const { booksToReadList, openReadList, setOpenReadList } =
    useContext(BooksContext);
  return (
    <header className="w-full h-20 flex flex-col items-center justify-center md:justify-start sm:justify-start  ">
      <nav className="w-full h-full flex items-center justify-center relative ">
        <h1 className="text-6xl text-[#E2e8f0] font-bold pl-20">Biblioteca</h1>
        {
          <div className="flex justify-center items-center absolute right-10">
            <FontAwesomeIcon
              icon={faBookBookmark}
              className="text-white text-4xl"
              onClick={() => setOpenReadList(true)}
            />
            <span className="text-white absolute -top-4 left-10 top">
              {booksToReadList.length}
            </span>
          </div>
        }
      </nav>
    </header>
  );
}

export default Header;
