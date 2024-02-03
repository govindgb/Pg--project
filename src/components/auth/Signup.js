// Signup.js

import React, { useState } from "react";
import "../../Signup.css"; // Import your CSS file

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Add your signup API endpoint
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log(data); // Response from the backend
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="App">
      <div className="signup-container">
        <h2>Create an Account</h2>
        <form onSubmit={handleSignup}>
          <div className="input-group">
            <label htmlFor="username" Style="margin-Right: 100px">Username</label>
            <input
              type="text"
              placeholder="Username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" Style="margin-Right: 100px">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              Style="margin-Right: -20px"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </span>
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword" Style="margin-Right: 40px">Confirm Password</label>
            <input
              type="password"
              
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <h2>
            <button type="submit" className="sub">Sign Up</button>
          </h2>
        </form>
      </div>
    </div>
  );
}

export default Signup;
