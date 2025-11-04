import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/auth/login",
        form,
        { withCredentials: true } // important for cookies
      );
      setMessage(res.data.message);

      // Verify user to get username
      if (res.data.success) {
        const verifyRes = await axios.post(
          "http://localhost:8080/auth/verify",
          {},
          { withCredentials: true }
        );
        if (verifyRes.data.status) setUser(verifyRes.data.user);
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "Login error");
    }
  };

  return (
    <div>
      <h2>{user ? `Welcome, ${user}` : "Login"}</h2>
      {!user && (
        <form onSubmit={handleSubmit}>
          <input
            name="email"
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
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
