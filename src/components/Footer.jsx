import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-box">
          <h2>PRESTIGE<span>MOTORS</span></h2>
          <p>
            Experience unmatched luxury, precision engineering, and timeless
            sophistication. Find the dream car that complements your passion.
          </p>
          <p className="footer-tagline">"Elegance on every curve, power on every straight."</p>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/category">Car Collection</Link>
          <Link to="/services">Services & Financing</Link>
          <Link to="/contact">Contact Showroom</Link>
        </div>

        <div className="footer-box">
          <h3>Featured Brands</h3>
          <Link to="/category">BMW M Performance</Link>
          <Link to="/category">Audi Quattro Series</Link>
          <Link to="/category">Mahindra Thar 4x4</Link>
          <Link to="/category">Luxury Supercars</Link>
        </div>

        <div className="footer-box">
          <h3>Visit Our Showroom</h3>
          <p>Email: contact@prestigemotors.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Showroom: Prestige Boulevard, Jubilee Hills, India</p>
          <p>Timings: Mon - Sun: 9:00 AM - 8:30 PM</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Prestige Motors. All Rights Reserved.</p>
        <p>Crafted for True Automobile Enthusiasts.</p>
      </div>
    </footer>
  );
};

export default Footer;
