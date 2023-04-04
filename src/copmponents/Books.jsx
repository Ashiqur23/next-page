import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import SingleBook from "./SingleBook";
import LoadingSpinner from "./LoadingSpinner";

const Books = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner></LoadingSpinner>;
  }
  const { books } = useLoaderData();
  // console.log(books)

  return (
    <div className="my-container">
      <div className="grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2">
        {books?.map((book, index) => (
          <SingleBook book={book} key={index}></SingleBook>
        ))}
      </div>
    </div>
  );
};

export default Books;
