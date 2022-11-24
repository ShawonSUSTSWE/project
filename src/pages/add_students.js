import React, { useState } from "react";
import { Librariannavbar } from "../components/Navbar/librarian_navbar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../store";
import axios from "axios";

export const Addstudent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    regNo: "",
    name: "",
    email: "",
    password: "",
    dept: "",
    picture: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest()
      .then((data) => localStorage.setItem("token", "Bearer " + data.token))
      .then(() => dispatch(authActions.login()))
      .then(() => navigate("/blogs"));
  };

  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:5000/api/v1/users/", {
        regNo: inputs.regNo,
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
        dept: inputs.dept,
        picture: inputs.picture,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };
  return (
    <div>
      <Librariannavbar />
      <div className="container" style={{ marginTop: "5%" }}>
        <h3>ADD STUDENT</h3>
        <form>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Registration No.
            </label>
            <input
              type="text"
              class="form-control"
              onChange={handleChange}
              value={inputs.regNo}
            />
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                onChange={handleChange}
                value={inputs.name}
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
              onChange={handleChange}
              value={inputs.email}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              onChange={handleChange}
              value={inputs.password}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Department
            </label>
            <input
              type="text"
              class="form-control"
              onChange={handleChange}
              value={inputs.dept}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Picture
            </label>
            <input
              type="text"
              class="form-control"
              onChange={handleChange}
              value={inputs.picture}
            />
          </div>
          <br />
          <button type="button" class="btn btn-primary" onClick={handleSubmit}>
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
};
