import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Login.css";

const DASHBOARD_URL = process.env.REACT_APP_DASHBOARD_URL || 'http://localhost:3001';

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const { login, isAuthenticated } = useAuth();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      window.location.href = DASHBOARD_URL; 
    }
  }, [isAuthenticated]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    
    console.log('Submitting login form...');
    const result = await login(form.email, form.password);
    console.log('Login result:', result);
    
    if (result.success) {
      setMessage(result.message);
      // Redirect to dashboard after successful login
      setTimeout(() => {
        window.location.href = DASHBOARD_URL; 
      }, 1000);
    } else {
      setMessage(result.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
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
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        {message && (
          <p className={`message ${message.includes('success') ? 'success' : 'error'}`}>
            {message}
          </p>
        )}
        <div className="auth-footer">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;