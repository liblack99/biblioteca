import React from "react";

function SearchBooks({ value, handleChangeSearch }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(event) => handleChangeSearch(event)}
      placeholder="Busca tu libro preferido"
      className="rounded-lg border border-black w-80 p-4  focus:outline-none"
    />
  );
}

export default SearchBooks;
