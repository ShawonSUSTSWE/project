// import React, { useState, useEffect } from "react";
// import { Studentnavbar } from "../components/Navbar/student_navbar";

// export const Notificationpage = () => {
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
//       {notification != "" || failnotification != "" ? (
//         notification.map((data, index) => {
//           return (
//             <div key={index}>
//               <div className="alert alert-success" id="alert" onClick={fadeOut}>
//                 {data.successmessage}
//               </div>
//             </div>
//           );
//         })
//       ) : (
//         <div className="container">
//           <div className="alert alert-danger">
//             No Notifications Right Now
//             <br />
//             <br />
//             <button onClick={Retrievefunction} className="btn btn-primary">
//               View Notifications
//             </button>
//           </div>
//         </div>
//       )}
//       {failnotification.map((data, index) => {
//         return (
//           <div key={index}>
//             <div className="alert alert-danger" id="alert" onClick={fadeOut}>
//               {data.failuremessage}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
