import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import EventDetails from './components/EventDetail';


function App() {
  return (
   <>
         <BrowserRouter>
        <Routes>
        <Route path='/' element={< Navbar/>}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login'element={<Login />}></Route>
          <Route path='/events'element={<EventDetails />}></Route>
          <Route path='/footer' element={<Footer/>}></Route>
        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
