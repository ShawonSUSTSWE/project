// import React, { useState, useEffect } from "react";
// import { Librariannavbar } from "../components/Navbar/librarian_navbar";

// export const Todaybookrequest = () => {
//   return (
//     <div>
//       <Librariannavbar />
//       {request != "" ? (
//         request.map((data, index) => {
//           return (
//             <div className="container" style={{ marginTop: "5%" }}>
//               <div className="card" key={index}>
//                 <img src={data.bookimage} />
//                 <br />
//                 <br />
//                 <h4>{data.booktitle}</h4>
//                 <h4>BOOK ID : {data.bookid}</h4>
//                 <h4>STUDENT NAME : {data.studentname}</h4>
//                 <h4>LIBRARY ID : {data.libraryId}</h4>
//                 <br />
//                 <div
//                   class="btn-group btn-group-lg"
//                   role="group"
//                   aria-label="..."
//                 >
//                   <button
//                     type="button"
//                     class="btn btn-secondary"
//                     onClick={accceptFunction}
//                     style={{ color: "green" }}
//                   >
//                     Accept
//                   </button>
//                   <button
//                     type="button"
//                     class="btn btn-secondary"
//                     style={{ color: "red" }}
//                     onClick={rejectFunction}
//                   >
//                     Reject
//                   </button>
//                 </div>
//               </div>
//             </div>
//           );
//         })
//       ) : (
//         <div className="container">
//           {" "}
//           <div className="alert alert-danger">No Bookrequests Available</div>
//         </div>
//       )}
//     </div>
//   );
// };
