import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../store";
import "../css/login.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Teacherlogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ID, setID] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ID, password);
    sendRequest()
      .then((data) => localStorage.setItem("token", "Bearer " + data.token))
      .then(() => dispatch(authActions.login()))
      .then(() => navigate("/teacherpage"));
  };

  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:5000/api/teachers/login", {
        ID: ID,
        password: password,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };
  return (
    <div>
      {/* <Homenavbar /> */}
      <div className="container">
        <h3>Teacher LogIn</h3>
        <form>
          <div class="mb-3">
            <label class="form-label">ID</label>
            <input
              className="form-control"
              id="exampleInputID1"
              onChange={(e) => setID(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Login
          </button>
          <Link to="/teachersignup">
            <button type="button" className="btn btn-primary">
              Sign Up{" "}
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Teacherlogin;
