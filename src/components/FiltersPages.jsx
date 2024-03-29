import React from "react";

function FiltersPages({ maxPage, handleChange }) {
  return (
    <label
      htmlFor="rangePage"
      className="flex flex-col text-2xl text-[#E2e8f0] mt-2 w-[330px] ">
      filtrar por paginas
      <div className="flex gap-2">
        <input
          type="range"
          min="0"
          max="1200"
          value={maxPage}
          onChange={handleChange}
          className="w-60"
          id="rangePage"
        />
        {maxPage}
      </div>
    </label>
  );
}

export default FiltersPages;
