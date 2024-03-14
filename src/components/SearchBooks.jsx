import React from "react";

function SearchBooks({ value, handleChangeSearch }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(event) => handleChangeSearch(event)}
      placeholder="Buscar"
      className="rounded-lg border bg-[#E2e8f0] border-black w-80 h-12 pl-2  focus:outline-none mt-4"
    />
  );
}

export default SearchBooks;
