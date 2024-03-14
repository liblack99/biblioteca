import React from "react";

function FiltersByCategory({ genresBooks, handleChangeGenres }) {
  return (
    <label
      htmlFor="genres"
      className="flex flex-col gap-2 w-[300px] mt-4 text-2xl  text-[#E2e8f0]">
      filtrar por categorias
      <select
        name="genres"
        id="genres"
        onChange={(event) => handleChangeGenres(event)}
        className="bg-[#111111] text-[#E2e8f0 rounded-sm border border-white">
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
