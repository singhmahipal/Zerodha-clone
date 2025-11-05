import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Signup.css";

const Signup = () => {
  const [form, setForm] = useState({ email: "", username: "", password: "" });
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const { signup, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      window.location.href = `${process.env.DASHBOARD_URL}`; // Dashboard URL
    }
  }, [isAuthenticated]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    
    const result = await signup(form.email, form.username, form.password);
    
    if (result.success) {
      setMessage(result.message);
      // Redirect to dashboard after successful signup
      setTimeout(() => {
        window.location.href = `${process.env.DASHBOARD_URL}`; // Dashboard URL
      }, 1000);
    } else {
      setMessage(result.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
          <input
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            minLength="6"
            disabled={isLoading}
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>
        {message && (
          <p className={`message ${message.includes('success') ? 'success' : 'error'}`}>
            {message}
          </p>
        )}
        <div className="auth-footer">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;