import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authActions } from "../../store";
import { useDispatch, useSelector } from "react-redux";

export const Librariannavbar = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  return (
    <div>
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">
              Librarian Dashbord
            </a>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav navbar-right">
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                  VIEW<span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link to="/teacherbookrequest">
                      Book Request From Teachers
                    </Link>
                  </li>
                  <li>
                    <Link to="/studentbookrequest">
                      Book Request From Students
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                  ISSUE BOOK<span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link to="/issuebook">ISSUE BOOK</Link>
                  </li>
                </ul>
              </li>
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                  ADD<span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link to="/addbooks">ADD BOOKS</Link>
                  </li>
                </ul>
              </li>

              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                  RETRIEVE<span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link to="/retrieveissuedbook">ISSUED BOOK</Link>
                  </li>
                  <li>
                    <Link to="/retrievefine">FINE</Link>
                  </li>
                </ul>
              </li>

              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                  DELETE<span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link to="/deletebooks">DELETE BOOKS</Link>
                  </li>
                </ul>
              </li>

              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                  STUDENT<span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link to="/studentrecord">STUDENT INFO</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/librarianprofile">PROFILE</Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setValue(0);
                    localStorage.setItem("token", "");
                    dispatch(authActions.logout());
                  }}
                >
                  <span class="glyphicon glyphicon-log-in"></span> Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
