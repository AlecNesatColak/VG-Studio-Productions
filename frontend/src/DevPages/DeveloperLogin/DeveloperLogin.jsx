import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./DeveloperLogin.css";

const DeveloperLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/developer/auth/login",
        { username, password }
      );
      if (response.data.token) {
        // Store the token in localStorage
        localStorage.setItem("developerToken", response.data.token);
        // Redirect to developer-home
        navigate("/developer-home");
      }
    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Developer Login</h2>
        {error && <p className="error-message">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default DeveloperLogin;
