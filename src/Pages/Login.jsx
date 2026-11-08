
import React, { useState } from "react";
import { login } from "./Auth";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const [success, setsuccess] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = await login(username, password);

      alert("Login successful");

      setusername("");
      setpassword("");
      setsuccess("Successfully Logged In");
      seterror("");

      navigate("/");

    } catch (err) {
      console.log("Login Error", err);

      seterror("Login Failed");
      setsuccess("");
    }
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <h2 className="login-heading">
          Welcome Back 👋
        </h2>

        <p className="login-subtitle">
          Login to your account
        </p>

        <form onSubmit={handleSubmit} className="login-form">

          <div className="login-group">

            <label className="login-label">
              Username
            </label>

            <input
              type="text"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              placeholder="Enter your username"
              required
              className="login-input"
            />

          </div>

          <div className="login-group">

            <label className="login-label">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="login-input"
            />

          </div>

          <button type="submit" className="login-button">
            Login
          </button>

          {success && (
            <p className="login-success">{success}</p>
          )}

          {error && (
            <p className="login-error">{error}</p>
          )}

        </form>

        <p className="login-register-text">
          Don't have an account?{" "}

          <Link to="/register" className="login-link">
            Register
          </Link>

        </p>

      </div>

    </div>
  );
};

export default Login;
