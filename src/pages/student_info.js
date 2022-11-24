// import React, { useState, useEffect } from "react";
// import { Librariannavbar } from "../components/Navbar/librarian_navbar";

// export const Studentrecord = () => {
//   return (
//     <div>
//       <Librariannavbar />
//       <div className="container" style={{ marginTop: "3%" }}>
//         <div className="card">
//           <h4>STUDENT DETAILS</h4>
//           <div class="mb-3">
//             <label className="form-label">Library Id</label>
//             <input
//               type="text"
//               className="form-control"
//               value={inputs.libraryId}
//               onChange={(e) => setlibraryId(e.target.value)}
//             />
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
//       {studentdata.map((data, index) => {
//         return (
//           <div className="container" style={{ marginTop: "3%" }} key={index}>
//             <div className="card">
//               <h4>NAME : {data.name}</h4>
//               <br />
//               <h4>LIBRARYID : {data.libraryId}</h4>
//               <br />
//               <h4>EMAIL : {data.email}</h4>
//               <br />
//               <h4>PASSWORD : {data.password}</h4>
//               <br />
//               <h4>ADDRESS : {data.address}</h4>
//               <br />
//               <h4>MOBILE : {data.mobile}</h4>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
