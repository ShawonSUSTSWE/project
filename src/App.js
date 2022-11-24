import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Signupscreen from "./auth/Student_login";
import Librarianlogin from "./auth/Librarian_login";
import { Homenavbar } from "./components/home_navbar";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import { Librarianpage } from "./pages/librarianpage";

function App() {
  return (
    <Router>
      <Homenavbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/studentlogin" element={<Signupscreen />} exact />
        <Route path="/librarianlogin" element={<Librarianlogin />} />
        <Route path="/librarianpage" element={<Librarianpage />} />
        {/* <Route path="/addstudent " element={<Addstudent />} />
        <Route path="/addbooks " element={<Addbooks />} />
        <Route path="/librarianprofile " element={<Librarianprofile />} />
        <Route path="/studentpage " element={<Studentpage />} />
        <Route path="/studentprofile " element={<Studentprofile />} />
        <Route path="/feedbackpage " element={<Feedbackpage />} />
        <Route path="/todaybookrequest " element={<Todaybookrequest />} />
        <Route path="/issuebook " element={<Issuebook />} />
        <Route path="/yourbooks " element={<Yourbooks />} />
        <Route path="/notificationpage " element={<Notificationpage />} />
        <Route path="/fineupdate " element={<Fineupdate />} />
        <Route path="/viewfeedback " element={<Viewfeedback />} />
        <Route path="/retrieveissuedbook " element={<Retrieveissuedbook />} />
        <Route path="/deletebooks " element={<Deletebooks />} />
        <Route path="/studentrecord " element={<Studentrecord />} />
        <Route path="/retrievefine " element={<Retrievefine />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
