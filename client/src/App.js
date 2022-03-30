import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import AboutUs from "./components/AboutUs";
import AddContact from "./components/AddContact";
import ForgotPassword from "./components/ForgotPassword";
import ChangePassword from "./components/ChangePassword";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/addcontact" element={<AddContact />}></Route>
          <Route
            path="/account/password/reset"
            element={<ForgotPassword />}
          ></Route>
          <Route
            path="/account/password/reset/edit"
            element={<ChangePassword />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
