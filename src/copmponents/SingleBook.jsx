import React from "react";
import { Link } from "react-router-dom";

const SingleBook = ({ book }) => {
    console.log(book)
  return (
    <Link to={`/book/${book.isbn13}`}>
      <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl">
        <img
          className="object-cover w-full h-56 md:h-64 xl:h-80"
          src={book.image}
          alt="book cover"
        />
        <div className="bg-black bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute  inset-0 transition-opacity duration-200 p-10 flex flex-col">
          <p>{book.title}</p>
          <br />
          <p>{book.subtitle ? `${book.subtitle.substring(0, 45)}...` : ""}</p>
          <br />
          <p className="mt-0">Price: {book.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default SingleBook;