import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const Contact = () => {
  // Beginner-friendly form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    carInterest: "BMW M Performance",
    preferredTime: "Morning (10:00 AM - 1:00 PM)",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      toast.warn("Please enter your name, email, and phone number.");
      return;
    }

    console.log("Contact Inquiry Received:", formData);
    toast.success("Thank you! Our Prestige Car Concierge will call you shortly.");
    setSubmitted(true);

    // Reset form after submit
    setFormData({
      name: "",
      email: "",
      phone: "",
      carInterest: "BMW M Performance",
      preferredTime: "Morning (10:00 AM - 1:00 PM)",
      message: ""
    });
  };

  return (
    <div className="contact-page">
      <ToastContainer position="top-right" autoClose={3000} />

      {/* 1. Section 1: Contact Banner & Quick Cards */}
      <section className="contact-banner">
        <p className="contact-tag">GET IN TOUCH</p>
        <h1>Connect with Prestige Motors</h1>
        <p className="contact-subtext">
          Schedule an exclusive VIP test drive, inquire about customized financing,
          or visit our state-of-the-art luxury showroom.
        </p>

        <div className="contact-cards-grid">
          <div className="contact-info-card">
            <div className="card-icon">📞</div>
            <h3>Direct Hotline</h3>
            <p>+91 98765 43210</p>
            <span>Available 9:00 AM - 8:30 PM</span>
          </div>

          <div className="contact-info-card">
            <div className="card-icon">✉️</div>
            <h3>Official Email</h3>
            <p>concierge@prestigemotors.com</p>
            <span>Responses within 2 hours</span>
          </div>

          <div className="contact-info-card">
            <div className="card-icon">📍</div>
            <h3>Flagship Showroom</h3>
            <p>Prestige Boulevard, Jubilee Hills</p>
            <span>Bangalore / Hyderabad, India</span>
          </div>
        </div>
      </section>

      {/* 2. Section 2: Contact & Test Drive Booking Form */}
      <section className="contact-form-section">
        <div className="form-wrapper">
          <div className="form-header">
            <span className="badge">VIP INQUIRY FORM</span>
            <h2>Book a Consultation or Test Drive</h2>
            <p>
              Fill out the details below and our personal car consultant will arrange
              everything to your schedule.
            </p>
          </div>

          {submitted && (
            <div className="success-banner">
              ✓ Your inquiry has been sent successfully! Our executive will contact you within 2 business hours.
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group-row">
              <div className="form-field">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-field">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>
            </div>

            <div className="form-group-row">
              <div className="form-field">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your 10-digit mobile number"
                  required
                />
              </div>

              <div className="form-field">
                <label>Interested Car Brand / Model</label>
                <select
                  name="carInterest"
                  value={formData.carInterest}
                  onChange={handleChange}
                >
                  <option value="BMW M Performance">BMW M Performance / Luxury</option>
                  <option value="Audi Quattro Series">Audi Quattro / Supercars</option>
                  <option value="Mahindra Thar 4x4">Mahindra Thar 4x4 Off-Road</option>
                  <option value="Mercedes-Maybach Luxury">Mercedes-Maybach & Sedans</option>
                  <option value="Exotic Supercars">Exotic Supercars (Porsche / Ferrari)</option>
                  <option value="General Car Inquiry">General Car Inquiry / Pre-Owned</option>
                </select>
              </div>
            </div>

            <div className="form-field">
              <label>Preferred Contact / Test Drive Time</label>
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
              >
                <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                <option value="Evening (5:00 PM - 8:30 PM)">Evening (5:00 PM - 8:30 PM)</option>
              </select>
            </div>

            <div className="form-field">
              <label>Your Message / Custom Requirements</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your desired color, financing questions, or trade-in requests..."
              ></textarea>
            </div>

            <button type="submit" className="submit-form-btn">
              Send VIP Inquiry →
            </button>
          </form>
        </div>
      </section>

      {/* 3. Section 3: Showroom Experience & Concierge Promise */}
      <section className="showroom-experience-section">
        <div className="experience-grid">
          <div className="experience-text">
            <span className="badge">PRIVATE APPOINTMENT</span>
            <h2>The Prestige Showroom Experience</h2>
            <p>
              When you step into Prestige Motors, you don't just view cars—you immerse
              yourself in private lounges, bespoke espresso bars, and individualized track
              consultations.
            </p>
            <ul className="experience-features">
              <li>✓ Private, closed-door vehicle inspection suites</li>
              <li>✓ Doorstep test drives available directly to your residence</li>
              <li>✓ Instant trade-in evaluations for your existing automobile</li>
              <li>✓ Complete paperwork and registration assistance handled for you</li>
            </ul>
          </div>

          <div className="experience-img">
            <img
              src="https://images.unsplash.com/photo-1563720223185-11003d516935?w=900"
              alt="Luxury Car Showroom"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
