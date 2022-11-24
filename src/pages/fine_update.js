// import React, { useState } from "react";
// import { Librariannavbar } from "../components/Navbar/librarian_navbar";
// import { useDispatch } from "react-redux";
// import { bindActionCreators } from "redux";
// import { actionCreators } from "../combine_action_creator";
// import { useSelector } from "react-redux";

// export const Fineupdate = () => {
//   return (
//     <div>
//       <Librariannavbar />
//       <div className="container" style={{ marginTop: "5%" }}>
//         <h3>UPDATE FINE</h3>
//         <form>
//           <div class="mb-3">
//             <label for="exampleInputPassword1" class="form-label">
//               Library Id
//             </label>
//             <input
//               type="text"
//               class="form-control"
//               value={inputs.libraryId}
//               onChange={(e) => setlibraryId(e.target.value)}
//             />
//           </div>
//           <div class="mb-3">
//             <label for="exampleInputEmail1" class="form-label">
//               Book Id
//             </label>
//             <input
//               type="text"
//               class="form-control"
//               value={inputs.bookid}
//               onChange={(e) => setbookid(e.target.value)}
//             />
//           </div>
//           <div class="mb-3">
//             <label for="exampleInputPassword1" class="form-label">
//               Fine
//             </label>
//             <input
//               type="number"
//               class="form-control"
//               value={inputs.fine}
//               onChange={(e) => setfine(e.target.value)}
//             />
//           </div>
//           <br />
//           <button type="button" class="btn btn-primary" onClick={handleSubmit}>
//             Add Fine
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };
