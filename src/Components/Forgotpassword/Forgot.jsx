import React from "react";
import "./Forgot.css";
import { Link } from "react-router-dom";

function Forgot() {
  return (
    <div>
      <Link className="forgot-pwd" to="/Forgot">
        Forgot Password
      </Link>
    </div>
  );
}

export default Forgot;