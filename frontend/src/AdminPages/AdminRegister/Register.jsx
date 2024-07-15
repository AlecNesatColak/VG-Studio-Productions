import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./Register.css";

toast.configure();

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    confirmUsername: "",
    email: "",
    confirmEmail: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.username !== formData.confirmUsername) {
      setMessage("Usernames do not match");
      return;
    }
    if (formData.email !== formData.confirmEmail) {
      setMessage("Emails do not match");
      return;
    }

    try {
      const response = await axios.post("/api/admin/admin-register", {
        username: formData.username,
        confirmUsername: formData.confirmUsername,
        email: formData.email,
        confirmEmail: formData.confirmEmail,
      });

      if (response.data.success) {
        toast("Redirecting to login page");
        navigate("/login");
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Internal server error");
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Admin Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Username</label>
          <input
            type="text"
            name="confirmUsername"
            value={formData.confirmUsername}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Email</label>
          <input
            type="email"
            name="confirmEmail"
            value={formData.confirmEmail}
            onChange={handleChange}
            required
          />
        </div>
        <input type="submit" value="Register" className="register-button" />
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default Register;
