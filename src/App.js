import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ForgotPassword from "./components/Login/ForgotPassword";
import Course from "./components/Events/Course";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          
          <Route path="/footer" element={<Footer />}></Route>
          <Route path="/forgot" element={< ForgotPassword/>}></Route>
          <Route path="/courses" element={< Course/>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
