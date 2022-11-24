// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { bindActionCreators } from "redux";
// import { actionCreators } from "../combine_action_creator";
// import { Studentnavbar } from "../components/Navbar/student_navbar";
// import { useDispatch } from "react-redux";

// export const Feedbackpage = () => {
//   return (
//     <div>
//       <Studentnavbar />
//       <div className="container">
//         <h3>GIVE FEEDBACK</h3>
//         <form>
//           <div className="mb-3">
//             <label className="form-label">Name</label>
//             <input
//               type="text"
//               className="form-control"
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//               value={inputs.name}
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Email address</label>
//             <input
//               type="email"
//               className="form-control"
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//               value={inputs.email}
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Feedback</label>
//             <input
//               type="text"
//               className="form-control"
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//               value={inputs.feedback}
//               onChange={(e) => setfeedback(e.target.value)}
//             />
//           </div>
//           <br />
//           <button
//             type="button"
//             className="btn btn-primary"
//             onClick={handleSubmit}
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };
