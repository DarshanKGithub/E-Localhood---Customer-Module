import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = (e) => {
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [mobileNoError, setMobileNoError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState("password");
  const [showConfirmPassword, setShowConfirmPassword] =
    useState("<FaEyeSlash>");

  const navigate = useNavigate("");

  const handleUsername = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError("");
  };

  const handleName = (e) => {
    setName(e.target.value);
    setMobileNoError("");
  };

  const handleMobileNo = (e) => {
    setMobileNo(e.target.value);
    setMobileNoError("");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validateForm = () => {
    let isValid = true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address.");
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
    }

    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(mobileNo)) {
      setMobileNoError("Please enter a valid 10-digit phone number.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert("Invalid form. Please check your inputs.");
      return;
    }

    axios
      .post("http://10.42.0.158:3000/v1/registration", {
        name: name,
        mobile_no: mobileNo,
        email: email,
        password: password,
        confirm_password: confirmPassword,
      })
      .then((response) => {
        console.log(response.data);
        alert("Successfully Signed In");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
        alert(err.response.data.error.message);
        alert("can't Resgisterd Solve the issue");
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
    <form onSubmit={handleSubmit}>
      <div className="wrapper">
        <h6>#Create an account</h6>

        <div className="customer-name">
          <label className="customerName">Full Name:</label>
          <input
            type="text"
            placeholder="Enter the Name"
            value={name}
            onChange={handleName}
            required
          />
          {/* {nameError && <span className="error-message">{nameError}</span>} */}
          <h1 className="err-msg">{nameError}</h1>
        </div>

        <div className="phn-no">
          <label className="mobile_no">Phone no:</label>
          <input
            type="tel"
            name="mobile"
            maxLength="10"
            placeholder="Enter your phone no.."
            pattern="[0-9]{10}"
            value={mobileNo}
            onChange={handleMobileNo}
            required
          ></input>
          {mobileNoError && <p4 className="error-message">{mobileNoError}</p4>}
        </div>

        <div className="email-name">
          <label className="email">Email:</label>
          <input
            type="text"
            placeholder="Enter your email"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            value={email}
            onChange={handleUsername}
            required
          />
          {emailError && <span className="error-message">{emailError}</span>}
        </div>
        <div className="pwd-name">
          <label className="password">Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            minLength="8"
            value={password}
            onChange={handlePassword}
            required
          />
          <span className="password-toggle" onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
          {passwordError && (
            <span className="error-message">{passwordError}</span>
          )}
        </div>

        <div className="pwd-crfm">
          <label className="ConfirmPassword">Confirm Password:</label>
          <input
            type="password"
            placeholder="Enter confirm password"
            value={confirmPassword}
            onChange={handleConfirmPassword}
            required
          ></input>
          <span
            className="password-toggle1"
            onClick={toggleConfirmPasswordVisibility}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
          {confirmPasswordError && (
            <span className="error-message">{confirmPasswordError}</span>
          )}
        </div>
        <div>
          <button className="validate" type="submit">
            Signup
          </button>
        </div>
      </div>
    </form>
  );
};

export default Register;
