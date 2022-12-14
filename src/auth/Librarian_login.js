import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../store";
import "../css/login.css";
import axios from "axios";

function Librarianlogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errText, setErrText] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const validateEmail = (e) => {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let emailValue = e.target.value;
    setEmail(emailValue);
    if (email.match(pattern)) {
      console.log(emailValue);
      setErrText("");
    } else {
      setErrText("Email format is not valid");
      alert("Email Address Not VALID");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.match(pattern)) {
      sendRequest()
        .then((data) => localStorage.setItem("token", "Bearer " + data.token))
        .then(() => dispatch(authActions.login()))
        .then(() => navigate("/librarianpage"));
    } else {
      alert("Email not valid");
    }
  };

  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:5000/api/librarian/login", {
        email: email,
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
        <h3>Librarian LogIn</h3>
        <form>
          <div class="mb-3">
            <label class="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              onChange={(e) => setEmail(e.target.value)}
              aria-describedby="emailHelp"
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
        </form>
      </div>
    </div>
  );
}

export default Librarianlogin;
