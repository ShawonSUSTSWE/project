// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { Studentnavbar } from "../components/Navbar/student_navbar";

// export const Yourbooks = () => {
//   return (
//     <div>
//       <input
//         type="hidden"
//         className="form-control"
//         aria-describedby="emailHelp"
//         name="libraryId"
//         value={inputs.libraryId}
//         onChange={handleChange}
//       />
//       <Studentnavbar />

//       {bookdata != "" ? (
//         bookdata.map((data, index) => {
//           return (
//             <div
//               className="container"
//               style={{ width: "fit-content" }}
//               key={index}
//             >
//               <div className="card">
//                 <img src={data.bookimage} />
//                 <br />
//                 <br />
//                 <h4>{data.bookname}</h4>
//                 <h4>START DATE : {data.startdate}</h4>

//                 <h4>END DATE : {data.enddate}</h4>
//                 <h4>FINE : {data.fine}</h4>
//               </div>
//             </div>
//           );
//         })
//       ) : (
//         <div className="container">
//           <div className="alert alert-danger">
//             Your Book Cart Is Empty
//             <br />
//             <br />
//             <button onClick={Retrievefunction} className="btn btn-primary">
//               View Cart
//             </button>
//           </div>{" "}
//         </div>
//       )}
//     </div>
//   );
// };
