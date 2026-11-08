import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => {
  // Beginner-friendly EMI Calculator State
  const [carPrice, setCarPrice] = useState(5000000); // 50 Lakhs default
  const [downPayment, setDownPayment] = useState(1000000); // 10 Lakhs
  const [loanTenure, setLoanTenure] = useState(5); // 5 Years
  const [interestRate, setInterestRate] = useState(8.5); // 8.5%

  // Calculate monthly EMI
  const loanAmount = Math.max(0, carPrice - downPayment);
  const monthlyInterest = interestRate / (12 * 100);
  const totalMonths = loanTenure * 12;
  const calculatedEMI =
    loanAmount > 0 && monthlyInterest > 0
      ? Math.round(
          (loanAmount *
            monthlyInterest *
            Math.pow(1 + monthlyInterest, totalMonths)) /
            (Math.pow(1 + monthlyInterest, totalMonths) - 1)
        )
      : 0;

  return (
    <div className="services-page">
      {/* 1. Section 1: Services Banner */}
      <section className="services-banner">
        <p className="services-tag">BESPOKE AUTOMOTIVE SERVICES</p>
        <h1>World-Class Car Care & Ownership</h1>
        <p className="services-subtext">
          From tailored financial solutions to white-glove doorstep delivery and
          master technician maintenance, we guarantee an effortless luxury experience.
        </p>
      </section>

      {/* 2. Section 2: Core Dealership Services */}
      <section className="services-grid-section">
        <div className="services-section-header">
          <span className="badge">WHAT WE OFFER</span>
          <h2>Comprehensive Luxury Services</h2>
          <p>Everything your prestige automobile needs throughout its lifetime.</p>
        </div>

        <div className="services-cards-grid">
          <div className="service-card">
            <div className="service-icon">💎</div>
            <h3>Bespoke Car Financing</h3>
            <p>
              Collaborations with premier private banks offering low interest
              rates, flexible tenure up to 7 years, and fast 24-hour approvals.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">🔍</div>
            <h3>150-Point Certification</h3>
            <p>
              Thorough mechanical, structural, and electrical diagnostics conducted
              with factory-grade diagnostic scanners before any vehicle delivery.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">🚚</div>
            <h3>Doorstep Covered Delivery</h3>
            <p>
              Your dream automobile transported anywhere across the country in
              closed luxury flatbed carriers with VIP ribbon ceremony.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">🛡️</div>
            <h3>Extended Prestige Warranty</h3>
            <p>
              Up to 3 years bumper-to-bumper extended warranty covering engine,
              transmission, electronic cockpits, and hydraulic systems.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">✨</div>
            <h3>Ceramic Coating & Detailing</h3>
            <p>
              9H ceramic paint protection, self-healing paint protection film (PPF),
              and handcrafted leather interior rejuvenation.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">🔄</div>
            <h3>Instant Trade-In Valuation</h3>
            <p>
              Fair market trade-in appraisals for your current luxury car with
              immediate equity transfer toward your new purchase.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Section 3: Interactive EMI / Loan Calculator */}
      <section className="calculator-section">
        <div className="calculator-box">
          <div className="calculator-header">
            <span className="badge">FINANCIAL PLANNING</span>
            <h2>Luxury Car EMI Calculator</h2>
            <p>Calculate your estimated monthly payments in real-time.</p>
          </div>

          <div className="calculator-grid">
            <div className="calculator-inputs">
              <div className="calc-group">
                <label>Car Price (₹): ₹{carPrice.toLocaleString("en-IN")}</label>
                <input
                  type="range"
                  min="1500000"
                  max="50000000"
                  step="500000"
                  value={carPrice}
                  onChange={(e) => setCarPrice(Number(e.target.value))}
                />
              </div>

              <div className="calc-group">
                <label>
                  Down Payment (₹): ₹{downPayment.toLocaleString("en-IN")}
                </label>
                <input
                  type="range"
                  min="200000"
                  max={carPrice * 0.8}
                  step="100000"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                />
              </div>

              <div className="calc-group">
                <label>Loan Duration: {loanTenure} Years</label>
                <input
                  type="range"
                  min="1"
                  max="7"
                  step="1"
                  value={loanTenure}
                  onChange={(e) => setLoanTenure(Number(e.target.value))}
                />
              </div>

              <div className="calc-group">
                <label>Interest Rate: {interestRate}% per annum</label>
                <input
                  type="range"
                  min="7"
                  max="14"
                  step="0.5"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                />
              </div>
            </div>

            <div className="calculator-result-box">
              <p className="result-label">ESTIMATED MONTHLY PAYMENT</p>
              <h3 className="result-emi">
                ₹{calculatedEMI.toLocaleString("en-IN")}
                <span>/ month</span>
              </h3>

              <div className="result-details">
                <div className="detail-row">
                  <span>Total Loan Amount:</span>
                  <strong>₹{loanAmount.toLocaleString("en-IN")}</strong>
                </div>
                <div className="detail-row">
                  <span>Total Tenure:</span>
                  <strong>{totalMonths} Months</strong>
                </div>
                <div className="detail-row">
                  <span>Interest Rate:</span>
                  <strong>{interestRate}%</strong>
                </div>
              </div>

              <Link to="/contact" className="apply-finance-btn">
                Apply for Pre-Approved Finance →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section 4: Roadside Assistance & Client Assurance */}
      <section className="assurance-section">
        <div className="assurance-grid">
          <div className="assurance-text">
            <span className="badge">24/7 ROADSIDE GUARANTEE</span>
            <h2>Round-The-Clock Roadside Assistance</h2>
            <p>
              No matter where you drive across the subcontinent, Prestige Roadside
              Assistance is only a single button-press away.
            </p>
            <div className="assurance-perks">
              <div className="perk-item">
                <h4>⏱️ 45-Minute Rapid Response</h4>
                <p>On-demand flat tire, battery jump-start, and towing services.</p>
              </div>
              <div className="perk-item">
                <h4>🏨 Luxury Courtesy Vehicle</h4>
                <p>Replacement executive sedan provided if repairs take over 24 hours.</p>
              </div>
            </div>
          </div>

          <div className="assurance-img">
            <img
              src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=800"
              alt="4x4 Assistance Vehicle"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
