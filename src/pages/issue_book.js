// import React, { useState } from "react";
// import { Librariannavbar } from "../components/Navbar/librarian_navbar";
// import "../css/login.css";

// export const Issuebook = () => {
//   return (
//     <div>
//       <Librariannavbar />
//       <div className="container" style={{ marginTop: "3%" }}>
//         <h3>ISSUE BOOK</h3>
//         <form>
//           <div class="mb-3">
//             <label class="form-label">Student LibraryId</label>
//             <input
//               type="text"
//               className="form-control"
//               id="exampleInputEmail1"
//               value={inputs.libraryId}
//               onChange={(e) => setlibraryId(e.target.value)}
//               aria-describedby="emailHelp"
//             />
//           </div>
//           <div class="mb-3">
//             <label className="form-label">Book Category</label>
//             <select
//               class="form-control"
//               value={inputs.category}
//               onChange={(e) => setcategory(e.target.value)}
//             >
//               <option>SELECT CATEGORY</option>
//               <option>EDUCATION</option>
//             </select>
//           </div>
//           <div class="mb-3">
//             <label className="form-label">Book ISBN</label>
//             <input
//               type="text"
//               class="form-control"
//               id="exampleInputPassword1"
//               value={inputs.bookimage}
//               onChange={(e) => setbookimage(e.target.value)}
//             />
//           </div>
//           <div class="mb-3">
//             <label className="form-label">Book Name</label>
//             <input
//               type="text"
//               class="form-control"
//               id="exampleInputPassword1"
//               value={inputs.bookname}
//               onChange={(e) => setbookname(e.target.value)}
//             />
//           </div>
//           <div class="mb-3">
//             <label className="form-label">Book Id</label>
//             <input
//               type="text"
//               class="form-control"
//               id="exampleInputPassword1"
//               value={inputs.bookid}
//               onChange={(e) => setbookid(e.target.value)}
//             />
//           </div>
//           <div class="mb-3">
//             <label className="form-label">Start Date</label>
//             <input
//               type="date"
//               class="form-control"
//               id="exampleInputPassword1"
//               value={inputs.startdate}
//               onChange={(e) => setstartdate(e.target.value)}
//             />
//           </div>
//           <div class="mb-3">
//             <label className="form-label">End Date</label>
//             <input
//               type="date"
//               class="form-control"
//               id="exampleInputPassword1"
//               value={inputs.enddate}
//               onChange={(e) => setenddate(e.target.value)}
//             />
//           </div>
//           <div class="mb-3">
//             <label className="form-label">Fine</label>
//             <input
//               type="text"
//               class="form-control"
//               id="exampleInputPassword1"
//               value={inputs.fine}
//               onChange={(e) => setfine(e.target.value)}
//             />
//           </div>
//           <br />
//           <button
//             type="button"
//             className="btn btn-primary"
//             onClick={handleSubmit}
//           >
//             Issue Book
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };
