import React, { useState } from "react";
import "./Loginbtn.css";
import Login from "../Loginpage/Login";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function Loginbtn() {
  const navigate = useNavigate("");

  const handleClick = () => {
    navigate("/Register");
  };
  return (
    <div className="login-btn">
      <button onClick={handleClick}>SignUp</button>
    </div>
  );
}

export default Loginbtn;
