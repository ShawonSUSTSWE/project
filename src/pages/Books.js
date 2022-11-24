import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from "./Book";
const Books = () => {
  const [books, setBooks] = useState();
  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:5000/api/books/")
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setBooks(data));
  }, []);
  console.log(books);
  return (
    <div>
      {books &&
        books.map((book, index) => (
          <Book
            accessionNo={book.accessionNo}
            title={book.title}
            author={book.author}
            ISBN={book.ISBN}
            coverpic={book.coverpic}
          />
        ))}
    </div>
  );
};

export default Books;
