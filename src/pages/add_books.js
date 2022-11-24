import React, { useState } from "react";
import { Librariannavbar } from "../components/Navbar/librarian_navbar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../css/login.css";
import axios from "axios";

export const Addbooks = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [accessionNo, setAccessionNo] = useState("");
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [edition, setEdition] = useState("");
  const [volume, setVolume] = useState("");
  const [placeOfPub, setPlaceOfPub] = useState("");
  const [publisher, setPublisher] = useState("");
  const [dateOfPub, setDateOfPub] = useState("");
  const [source, setSource] = useState("");
  const [binding, setBinding] = useState("");
  const [pagination, setPagination] = useState("");
  const [price, setPrice] = useState("");
  const [billNoDate, setBillNoDate] = useState("");
  const [ISBN, setISBN] = useState("");

  const sendRequest = async () => {
    const res = await axios
      .post(
        "http://localhost:5000/api/books/",
        {
          accessionNo: accessionNo,
          author: author,
          title: title,
          edition: edition,
          volume: volume,
          placeOfPub: placeOfPub,
          publisher: publisher,
          dateOfPub: dateOfPub,
          source: source,
          binding: binding,
          pagination: pagination,
          price: price,
          billNoDate: billNoDate,
          ISBN: ISBN,
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
    sendRequest()
      .then((data) => console.log(data))
      .then(() => navigate("/librarianpage"));
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
              onChange={(e) => setAccessionNo(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Title
            </label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Author
            </label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Edition
            </label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => setEdition(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Volume
            </label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => setVolume(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Place of Publication
            </label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => setPlaceOfPub(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Publisher
            </label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => setPublisher(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Date of Publication
            </label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => setDateOfPub(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Source
            </label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => setSource(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Binding
            </label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => setBinding(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Pagination
            </label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => setPagination(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Price
            </label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              billNoDate
            </label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => setBillNoDate(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              ISBN
            </label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => setISBN(e.target.value)}
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
