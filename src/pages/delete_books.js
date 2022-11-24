// import React, { useState, useEffect } from "react";
// import { Librariannavbar } from "../components/Navbar/librarian_navbar";

// export const Deletebooks = () => {
//   return (
//     <div>
//       <Librariannavbar />
//       <div className="container" style={{ marginTop: "3%" }}>
//         <div className="card">
//           <h4>DELETE BOOKS</h4>
//           <div class="mb-3">
//             <label className="form-label">Select Category</label>
//             <select
//               className="form-control"
//               value={inputs.category}
//               onChange={(e) => setcategory(e.target.value)}
//             >
//               <option>SELECT CATEGORY</option>
//               <option>EDUCATION</option>
//             </select>
//           </div>
//           <br />
//           <button
//             type="button"
//             className="btn btn-primary"
//             onClick={handleSubmit}
//           >
//             Get
//           </button>
//         </div>
//       </div>
//       {books.map((data, index) => {
//         return (
//           <div className="container" style={{ marginTop: "3%" }} key={index}>
//             <div className="card">
//               <img src={data.bookimage} />
//               <br />
//               <h4>{data.booktitle}</h4>
//               <button
//                 type="button"
//                 className="btn btn-primary"
//                 onClick={() => deleteBooks(data.booktitle)}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
