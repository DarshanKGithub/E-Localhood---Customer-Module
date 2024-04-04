import React from "react";
import "./ResetPassword.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = () => {
    // Add logic for password validation and submission here
    console.log("New Password:", newPassword);
    console.log("Confirm Password:", confirmPassword);
    const queryParameters = new URLSearchParams(window.location.search);
    const tok = queryParameters.get("tok");

    // Add API calls or other logic as needed
    axios
      .post("http://10.42.0.158:3000/v1/reset", {
        // Include data to be sent in the request body if needed

        new_password: newPassword,
        confirm_password: confirmPassword,
        token: tok,
      })
      .then((response) => {
        // Handle the response as needed
        console.log("Response:", response);
        alert("successfully changed the password!!!");

        navigate("/login");
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
        alert("check once again password!!");
      });
  };

  return (
    <div className="reset-wrap">
      <label className="newpassword">
        New Password:
        <input
          type="password"
          placeholder="New password"
          required
          value={newPassword}
          onChange={handleNewPasswordChange}
        />
      </label>
      <label className="confirmpassword">
        Confirm Password:
        <input
          type="password"
          placeholder="Confirm password"
          required
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </label>
      <button className="proceed" onClick={handleSubmit}>
        Proceed
      </button>
    </div>
  );
}

export default ResetPassword;
