import React, { useState, useEffect } from "react";
import "../css/category.css";
import { useDispatch } from "react-redux";
import { Teachernavbar } from "./../components/Navbar/teacher_navbar";

export const Teacherpage = () => {
  return (
    <div>
      <Teachernavbar />
      <h1>This is Teacher page</h1>
    </div>
  );
};
