import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Header.css";

const Header = () => {
  const { cart } = useCart();

  const logout=()=>{
    localStorage.removeItem("token")
    window.location.href="/login"
  }

  return (
    <header className="header">
      <Link to="/" className="logo">
        PRESTIGE<span>MOTORS</span>
      </Link>

      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/category">Category</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={()=>logout()}> Logout </button>
      </nav>

      <div className="header-actions">
        <Link to="/category" className="cart-badge-btn">
          Cart ({cart.length})
        </Link>
        <Link to="/category" className="header-btn">
          Explore Cars
        </Link>
      </div>
    </header>
  );
};

export default Header;
