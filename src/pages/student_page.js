// import React, { useState, useEffect } from "react";
// import { Studentnavbar } from "../components/Navbar/student_navbar";
// import "../css/category.css";

// export const Studentpage = () => {
//   return (
//     <div>
//       <Studentnavbar />
//       <div className="container" style={{ width: "fit-content" }}>
//         <div className="card">
//           {state.data.bookimage ? (
//             <div>
//               {" "}
//               <img src={state.data.bookimage} width="auto" height="auto" />
//               <br />
//               <br />
//               <h4>{state.data.booktitle}</h4>
//               <br />
//               <input
//                 type="date"
//                 value={inputs.startdate}
//                 onChange={(e) => setstartdate(e.target.value)}
//                 placeholder="start date"
//               />
//               <br />
//               <br />
//               <input
//                 type="date"
//                 placeholder="end date"
//                 value={inputs.enddate}
//                 onChange={(e) => setenddate(e.target.value)}
//               />
//               <br />
//               <br />
//               {requestbtn ? (
//                 <button className="btn btn-danger" onClick={requestFunction}>
//                   REQUEST
//                 </button>
//               ) : (
//                 ""
//               )}
//             </div>
//           ) : (
//             <div className="alert alert-danger">Search Books By Category</div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
