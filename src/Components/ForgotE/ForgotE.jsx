import React, { useState } from "react";
import "./ForgotE.css";
import axios from "axios";

function Forgot() {
  const [email, setEmail] = useState("");

  const handleForgotPassword = async () => {
    try {
      await axios.post("http://10.42.0.158:3000/v1/forget", {
        email,
      });
      alert("Password reset email sent successfully.");
    } catch (error) {
      console.error("Failed to send password reset email", error);
      alert("Failed to send password reset email");
    }
  };

  return (
    <div className="forgotp">
      <h1 className="h1">Forgot Password</h1>
      <div className="email-input">
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter Your Email..."
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button onClick={handleForgotPassword}>Sent</button>
    </div>
  );
}

export default Forgot;
