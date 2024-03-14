import { useState } from "react";

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
          <h2 className="font-bold text-sm">{book.title}</h2>
          <h3 className="font-semibold text-sm">Genero: {book.genre}</h3>
          <h3 className="font-semibold text-sm">Autor: {book.author.name}</h3>
        </span>
        <p className="text-white text-sm pt-2">{book.synopsis}</p>
        <div className="flex justify-center items-center">
          {addToReadList ? (
            <button
              className="absolute  bottom-3 text-white w-[150px] border text-[12px]  border-white rounded-lg hover:text-black hover:bg-white"
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
              className="absolute bottom-3 text-white w-[150px] border text-[12px] border-white rounded-lg  hover:text-black hover:bg-white"
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
