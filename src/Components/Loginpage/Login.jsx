import "./Login.css";
import { MdOutlineEmail } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import axios, { formToJSON } from "axios";
import { Link } from "react-router-dom";
// import Register from "../Registration/Register";
import { useNavigate } from "react-router-dom";
// import SigninButton from '../SigninButton/SigninButton';
// import {Route} from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState("");
  // const [validemail, setValidEmail] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [pwd, setPwd] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [passwordIcon, setPasswordIcon] = useState("<FaEyeSlash/>");
  const navigate = useNavigate();

  useEffect(() => {
    handleToogle();
  }, []);

  const handleUsername = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleToogle = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setPasswordIcon(FaEye);
    } else {
      setPasswordType("password");
      setPasswordIcon(FaEyeSlash);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if email and password are not empty
    if (email.trim() === "" && password.trim() === "") {
      setMessage("Please enter your email and password.");
      setPwd("Please enter your email and password.");
      return; // Exit the function early if both fields are empty
    } else if (email.trim() === "") {
      setMessage("Please enter your email.");
      return; // Exit the function early if email is empty
    } else if (password.trim() === "") {
      setPwd("Please enter your password.");
      return; // Exit the function early if password is empty
    }

    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      return; // Exit the function early if email is invalid
    }

    // Password validation
    if (password.length < 6) {
      setPwd("Password must be at least 6 characters long.");
      return; // Exit the function early if password is too short
    }

    setMessage(""); // Clear any previous error messages

    axios
      .post("http://10.42.0.158:3000/v1/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        alert("Successfully Signed In");

        navigate("/homepage");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);

        // Display appropriate error message
        if (
          err.response &&
          err.response.data &&
          err.response.data.error &&
          err.response.data.error.message
        ) {
          alert(err.response.data.error.message);
        } else {
          alert("Incorrect login & password");
        }
      });
  };

  return (
    <div className="header">
      <h1>Login/Signin</h1>
      <form onSubmit={handleSubmit}>
        <div className="lgn-form">
          <div className="email">
            <input
              type="text"
              spellCheck="false"
              placeholder="Enter your email"
              value={email}
              onChange={handleUsername}
              required
            ></input>
            <label className="email-wrd">Email</label>
            <MdOutlineEmail className="email-icon" />
            <p1>{message}</p1>
            {/* <span className="msg">Valid email</span> */}
          </div>
        </div>
        <div className="pwd">
          <input
            type={passwordType}
            placeholder="Enter your password"
            value={password}
            onChange={handlePassword}
            required
          ></input>
          <span className="visible" onClick={handleToogle}>
            {passwordIcon}
          </span>
          <label className="pwd-wrd">Password </label>
          <TbPasswordUser className="pwd-icon" />
          <p2>{pwd}</p2>
          {/* <span className="msg">Incorrect Password</span> */}
        </div>
        <div className="not-acc">
          <h6>Not Having Account?</h6>
        </div>
        <div>
          <button type="submit" className="signin-btn" onClick={handleSubmit}>
            Signin
          </button>
        </div>
        <div>
          <Link className="sign-btn" to="/Register">
            Signup
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
