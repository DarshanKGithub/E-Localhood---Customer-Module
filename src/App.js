import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./Components/Loginpage/Login";
import Navbar from "./Components/Navbar/Navbar";
import Forgot from "./Components/Forgotpassword/Forgot";
import Loginbtn from "./Components/LoginButton/Loginbtn";
import Seller from "./Components/SellerButton/Seller";
import Cart from "./Components/CartButton/Cart";
import Logo from "./Components/Logo/Logo";
import Register from "./Components/Registration/Register";
import ForgotE from "./Components/ForgotE/ForgotE";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import axios from "axios";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Footer from "./Components/Footer/Footer";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Cartpage from "./Components/Cartpage/Cartpage";
// import ProductDetails from "./Components/ProductDetails/ProductDetails";

function App() {
  return (
    <Routes>
      <Route
        path="/homepage"
        element={
          <div>
            <Homepage />,<Footer /> ,
          </div>
        }
      />
      <Route
        path="/"
        element={
          <div>
            <Login />,<Navbar />,<Forgot />,<Loginbtn />,<Seller />,
            <Logo />,<Footer />
          </div>
        }
      />
      <Route
        path="/login"
        element={
          <div>
            <Login />, <Logo /> ,<Footer /> , <Forgot />
          </div>
        }
      />
      <Route path="/Register" element={<Register />} />
      <Route path="/Forgot" element={<ForgotE />} />
      <Route path="/Reset" element={<ResetPassword />} />
      <Route path="/Cartpage" element={<Cartpage />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;
