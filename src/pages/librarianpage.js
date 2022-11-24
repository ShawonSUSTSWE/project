import React from "react";
import { useSelector } from "react-redux";
import { Librariannavbar } from "../components/Navbar/librarian_navbar";

export const Librarianpage = () => {
  return (
    <div>
      <Librariannavbar />
      <h1>This is librarian page</h1>
    </div>
  );
};
