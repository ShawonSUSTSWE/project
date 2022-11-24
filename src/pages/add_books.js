import React, { useState } from "react";
import { Librariannavbar } from "../components/Navbar/librarian_navbar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../css/login.css";
import axios from "axios";

export const Addbooks = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [inputs, setInputs] = useState({
    accessionNo: "",
    author: "",
    title: "",
    edition: "",
    volume: "",
    placeOfPub: "",
    publisher: "",
    dateOfPub: "",
    source: "",
    binding: "",
    pagination: "",
    price: "",
    billNoDate: "",
    ISBN: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    const res = await axios
      .post(
        "http://localhost:5000/api/v1/news/",
        {
          accessionNo: inputs.accessionNo,
          author: inputs.author,
          title: inputs.title,
          edition: inputs.edition,
          volume: inputs.volume,
          placeOfPub: inputs.placeOfPub,
          publisher: inputs.publisher,
          dateOfPub: inputs.dateOfPub,
          source: inputs.source,
          binding: inputs.binding,
          pagination: inputs.pagination,
          price: inputs.price,
          billNoDate: inputs.billNoDate,
          ISBN: inputs.ISBN,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest()
      .then((data) => console.log(data))
      .then(() => navigate("/blogs/user"));
  };
  return (
    <div>
      <Librariannavbar />
      <div className="container" style={{ marginTop: "3%" }}>
        <h3>ADD BOOKS</h3>
        <form>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Accession No.
            </label>
            <input
              type="text"
              class="form-control"
              onChange={handleChange}
              value={inputs.accessionNo}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Author
            </label>
            <input
              type="text"
              class="form-control"
              onChange={handleChange}
              value={inputs.author}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Title
            </label>
            <input
              type="text"
              class="form-control"
              onChange={handleChange}
              value={inputs.title}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Edition
            </label>
            <input
              type="text"
              class="form-control"
              onChange={handleChange}
              value={inputs.edition}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Volume
            </label>
            <input
              type="text"
              class="form-control"
              onChange={handleChange}
              value={inputs.volume}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Place of Publication
            </label>
            <input
              type="text"
              class="form-control"
              onChange={handleChange}
              value={inputs.placeOfPub}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Publisher
            </label>
            <input
              type="text"
              class="form-control"
              onChange={handleChange}
              value={inputs.publisher}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Date of Publication
            </label>
            <input
              type="text"
              class="form-control"
              onChange={handleChange}
              value={inputs.dateOfPub}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Source
            </label>
            <input
              type="text"
              class="form-control"
              onChange={handleChange}
              value={inputs.source}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Binding
            </label>
            <input
              type="text"
              class="form-control"
              onChange={handleChange}
              value={inputs.binding}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Pagination
            </label>
            <input
              type="text"
              class="form-control"
              onChange={handleChange}
              value={inputs.pagination}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Price
            </label>
            <input
              type="text"
              class="form-control"
              onChange={handleChange}
              value={inputs.price}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              billNoDate
            </label>
            <input
              type="text"
              class="form-control"
              onChange={handleChange}
              value={inputs.billNoDate}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              ISBN
            </label>
            <input
              type="text"
              class="form-control"
              onChange={handleChange}
              value={inputs.ISBN}
            />
          </div>
          <br />
          <button type="button" class="btn btn-primary" onClick={handleSubmit}>
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};
