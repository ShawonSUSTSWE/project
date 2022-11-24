import React from "react";

function Book(accessionNo, title, author, ISBN, coverpic) {
  return (
    <div>
      <p>{accessionNo}</p>
      <p>{title}</p>
      <p>{author}</p>
      <p>{ISBN}</p>
      <p>{coverpic}</p>
    </div>
  );
}

export default Book;
