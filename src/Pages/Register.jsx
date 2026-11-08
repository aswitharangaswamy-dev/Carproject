
import React, { useState } from "react";
import { register } from "./Auth";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  
  const [error, seterror] = useState("");
  const [success, setsuccess] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await register(username, password);

      setsuccess("Registered Successfully");
      seterror("");

      navigate("/login");

    } catch (err) {
      console.log("Registration Error", err);

      seterror("Registration Failed");
      setsuccess("");
    }
  };

  return (
    <div className="register-page">

      <div className="register-card">

        <h2 className="register-heading">
          Create Account
        </h2>

        <p className="register-subtitle">
          Register a new account
        </p>

        <form onSubmit={handleSubmit} className="register-form">

          <div className="register-group">

            <label className="register-label">
              Username
            </label>

            <input
              type="text"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              placeholder="Enter your username"
              required
              className="register-input"
            />

          </div>

          <div className="register-group">

            <label className="register-label">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="register-input"
            />

          </div>

          <button type="submit" className="register-button">
            Register
          </button>

          {success && (
            <p className="register-success">{success}</p>
          )}

          {error && (
            <p className="register-error">{error}</p>
          )}

        </form>

        <p className="register-login-text">
          Already have an account?{" "}

          <Link to="/login" className="register-link">
            Login
          </Link>

        </p>

      </div>

    </div>
  );
};

export default Register;
