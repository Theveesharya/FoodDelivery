import React, { useState } from "react";
import Navbar from "./components/Navrbar/Navbar";
import {Routes,Route} from "react-router-dom"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/Login/LoginPopup";

const App = () => {
  const [showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
    <div className="app">
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/Order' element={<PlaceOrder/>} />

      </Routes>
      
    </div>
    <Footer />
    </>
    
  );
};

export default App;
