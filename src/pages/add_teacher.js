import React, { useState } from "react";
import { Librariannavbar } from "../components/Navbar/librarian_navbar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../store";
import axios from "axios";

export const Addteacher = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ID, setID] = useState(null);
  const [email, setemail] = useState(null);
  const [name, setname] = useState(null);
  const [password, setpassword] = useState(null);
  const [dept, setdept] = useState(null);
  const [picture, setpicture] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then((data) => localStorage.setItem("token", "Bearer " + data.token))
      .then(() => dispatch(authActions.login()))
      .then(() => navigate("/"));
  };

  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:5000/api/teachers", {
        ID: ID,
        name: name,
        email: email,
        password: password,
        dept: dept,
        picture: picture,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };
  return (
    <div>
      <div className="container" style={{ marginTop: "5%" }}>
        <h3>Teacher Registration</h3>
        <form>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              ID
            </label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => setID(e.target.value)}
            />
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                onChange={(e) => setname(e.target.value)}
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Department
            </label>
            <select
              type="text"
              class="form-control"
              onChange={(e) => setdept(e.target.value)}
            >
              <option></option>
              <option>SWE</option>
              <option>EEE</option>
              <option>CSE</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Picture
            </label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => setpicture(e.target.value)}
            />
          </div>
          <br />
          <button type="button" class="btn btn-primary" onClick={handleSubmit}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};
