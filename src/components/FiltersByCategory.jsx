import React from "react";

function FiltersByCategory({ genresBooks, handleChangeGenres }) {
  return (
    <label
      htmlFor="genres"
      className="flex flex-col gap-2  justify-center w-[300px] mt-2 text-2xl  text-center text-white">
      filtrar por categorias
      <select
        name="genres"
        id="genres"
        onChange={(event) => handleChangeGenres(event)}
        className="bg-black text-white rounded-sm">
        <option value="all">todos</option>
        {genresBooks.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </label>
  );
}

export default FiltersByCategory;
