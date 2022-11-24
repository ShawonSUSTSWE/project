import React, { useState, useEffect } from "react";
import { Studentnavbar } from "../components/Navbar/student_navbar";
import "../css/category.css";

export const Studentpage = () => {
  return (
    <div>
      <Studentnavbar />
      <h1>This is Student page</h1>
    </div>
  );
};
