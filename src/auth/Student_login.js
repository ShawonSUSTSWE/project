import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { authActions } from "../store";

function Signupscreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [regNo, setRegNo] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then((data) => localStorage.setItem("token", "Bearer " + data.token))
      .then(() => dispatch(authActions.login()))
      .then(() => navigate("/"));
  };

  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:5000/api/students/login", {
        regNo: regNo,
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
        <h3>STUDENT LOGIN</h3>
        <form>
          <div className="mb-3">
            <label className="form-label">Registration No.</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              onChange={(e) => setRegNo(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
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
        </form>
      </div>
    </div>
  );
}

export default Signupscreen;
