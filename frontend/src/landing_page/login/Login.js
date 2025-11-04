import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
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
        "http://localhost:8080/auth/login",
        form,
        { withCredentials: true }
      );
      
      console.log("Login response:", res.data); // Debug log
      setMessage(res.data.message);

      if (res.data.success) {
        const verifyRes = await axios.post(
          "http://localhost:8080/auth/verify",
          {},
          { withCredentials: true }
        );
        console.log("Verify response:", verifyRes.data); // Debug log
        
        if (verifyRes.data.status) {
          setUser(verifyRes.data.user);
        }
      }
    } catch (err) {
      console.error("Full error:", err); // Debug log
      console.error("Error response:", err.response); // Debug log
      
      if (err.response) {
        // Server responded with error
        setMessage(err.response.data.message || "Login failed");
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
    <div className="login-container">
      <div className="login-box">
        <h2>{user ? `Welcome, ${user}` : "Login"}</h2>
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
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <button type="submit">Login</button>
          </form>
        )}
        {message && <p className="message">{message}</p>}
        {!user && (
          <div className="auth-footer">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;