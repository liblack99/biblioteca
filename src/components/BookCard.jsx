import React, { useState } from "react";

function BookCard({ book, index, addToReadList, deleteToReadList }) {
  const [hover, setHover] = useState(false);
  const [id, setId] = useState(null);
  const [click, setClick] = useState(false);
  return (
    <div
      className={`${click && "zoomOut"} relative`}
      onMouseOver={(event) => {
        setHover(true);
        setId(index);
        event.stopPropagation();
      }}
      onMouseOut={(event) => {
        setHover(false);
        event.stopPropagation();
      }}>
      <div
        className={`${
          hover && id === index ? "description" : "description__book"
        }  p-4 `}>
        <span className="text-white flex flex-col gap-1 ">
          <h2 className="font-bold text-xl">{book.title}</h2>
          <h3 className="font-semibold">Genero: {book.genre}</h3>
          <h3 className="font-semibold">Autor: {book.author.name}</h3>
        </span>
        <p className="text-white pt-2">{book.synopsis}</p>
        <div className="w-full flex justify-center">
          {addToReadList ? (
            <button
              className="text-white absolute  bottom-4 border  border-white rounded-lg p-2 hover:text-black hover:bg-white"
              onClick={() => {
                setClick(true);
                setTimeout(() => {
                  addToReadList(book.ISBN);
                }, 500);
              }}>
              Agregar lista de lectura
            </button>
          ) : null}
          {deleteToReadList ? (
            <button
              className="text-white absolute  bottom-4   border border-white rounded-lg p-2 hover:text-black hover:bg-white"
              onClick={() => {
                setClick(true);
                setTimeout(() => {
                  deleteToReadList(book.ISBN);
                }, 500);
              }}>
              Eliminar de la lista lectura
            </button>
          ) : null}
        </div>
      </div>
      <img src={book.cover} alt={book.title} className="w-full h-full cover" />
    </div>
  );
}

export default BookCard;
