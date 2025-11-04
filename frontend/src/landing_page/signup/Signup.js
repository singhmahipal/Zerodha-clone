import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [form, setForm] = useState({ email: "", username: "", password: "" });
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data:", form); // Debug log
    
    try {
      const res = await axios.post(
        "http://localhost:8080/auth/signup",
        form,
        { withCredentials: true }
      );
      
      console.log("Response:", res.data); // Debug log
      setMessage(res.data.message);

      if (res.data.success) {
        setUser(res.data.user.username);
      }
    } catch (err) {
      console.error("Full error:", err); // Debug log
      console.error("Error response:", err.response); // Debug log
      
      if (err.response) {
        // Server responded with error
        setMessage(err.response.data.message || "Signup failed");
      } else if (err.request) {
        // Request made but no response
        setMessage("Cannot connect to server. Is it running on port 8080?");
      } else {
        // Something else went wrong
        setMessage("Error: " + err.message);
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>{user ? `Welcome, ${user}` : "Signup"}</h2>
        {!user && (
          <form onSubmit={handleSubmit}>
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              minLength="6"
            />
            <button type="submit">Sign Up</button>
          </form>
        )}
        {message && <p className="message">{message}</p>}
        {!user && (
          <div className="auth-footer">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;