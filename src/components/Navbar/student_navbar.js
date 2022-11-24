import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";
import { useSelector } from "react-redux";

export const Studentnavbar = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  return (
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              Student Dashbord
            </a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li className="active">
                <Link to="/studentpage">HOME</Link>
              </li>
              <li>
                <Link to="/yourbooks">YOUR BOOKS</Link>
              </li>
              <li>
                <Link to="/notificationpage">NOTIFICATIONS</Link>
              </li>
              <li>
                <Link to="/feedbackpage">FEEDBACK</Link>
              </li>
              <li>
                <Link to="/studentprofile">
                  <span className="glyphicon glyphicon-user"></span> PROFILE
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setValue(0);
                    localStorage.setItem("token", "");
                    dispatch(authActions.logout());
                  }}
                >
                  <span className="glyphicon glyphicon-log-in"></span> LOGOUT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
