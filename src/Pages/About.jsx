import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      {/* 1. About Banner */}
      <section className="about-banner">
        <p className="about-subtitle">OUR HERITAGE & LEGACY</p>
        <h1>About Prestige Motors</h1>
        <p className="banner-tagline">
          Fourteen Years of Automotive Passion, Unwavering Trust, and Pure Luxury.
        </p>
      </section>

      {/* 2. Page / Section 1: From When We Started (Founded in 2012) */}
      <section className="about-section foundation-section">
        <div className="about-grid">
          <div className="about-text">
            <span className="badge">ESTABLISHED 2012</span>
            <h2>How Our Journey Started</h2>
            <p>
              Prestige Motors was founded in the autumn of <strong>2012</strong> by a
              trio of passionate motorsport engineers and automobile collectors. What
              began in a humble boutique showroom in Bangalore with just 8 hand-selected
              German luxury cars has blossomed into one of the nation's premier destinations
              for world-class automobiles.
            </p>
            <p>
              We noticed that car buyers often had to choose between impersonal
              corporate dealerships and unreliable pre-owned markets. Our vision was
              simple: create a bespoke sanctuary where true automobile enthusiasts could
              experience, test, and own iconic cars with absolute peace of mind.
            </p>
            <div className="stats-row">
              <div className="stat-box">
                <h3>14+</h3>
                <p>Years of Legacy</p>
              </div>
              <div className="stat-box">
                <h3>12,500+</h3>
                <p>Cars Delivered</p>
              </div>
              <div className="stat-box">
                <h3>99.4%</h3>
                <p>Customer Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="about-img-box">
            <img
              src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=900"
              alt="Prestige Motors Vintage Showroom Road"
            />
          </div>
        </div>
      </section>

      {/* 3. Page / Section 2: The Car Selling Years & Milestones Timeline */}
      <section className="about-section timeline-section">
        <div className="section-title-wrap">
          <span className="badge">OUR EVOLUTION</span>
          <h2>A Decade & More of Car Selling Excellence</h2>
          <p>
            Explore our car selling milestones from our first key handover to
            delivering rare luxury supercars today.
          </p>
        </div>

        <div className="timeline-container">
          {/* Milestone 1 */}
          <div className="timeline-card">
            <div className="year-pill">2012</div>
            <h3>The Inception</h3>
            <p>
              Opened our first boutique showroom with 8 luxury vehicles. Handed over
              our very first BMW 5 Series within 48 hours of grand opening.
            </p>
          </div>

          {/* Milestone 2 */}
          <div className="timeline-card">
            <div className="year-pill">2015 - 2017</div>
            <h3>Audi & German Expansion</h3>
            <p>
              Expanded authorized partnership networks to include Audi Quattro,
              Mercedes AMG, and bespoke luxury saloons. Crosses 2,000 cars sold.
            </p>
          </div>

          {/* Milestone 3 */}
          <div className="timeline-card">
            <div className="year-pill">2019 - 2021</div>
            <h3>The 4x4 Thar & Off-Road Era</h3>
            <p>
              Welcomed rugged Mahindra Thar and high-terrain 4x4 SUVs to our roster,
              opening our dedicated all-terrain driving experience facility.
            </p>
          </div>

          {/* Milestone 4 */}
          <div className="timeline-card">
            <div className="year-pill">2023 - 2026</div>
            <h3>Supercars & Modern Horizon</h3>
            <p>
              Surpassed 12,000 car deliveries, introduced electric performance hypercars,
              and inaugurated our VIP doorstep handover service across the nation.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Page / Section 3: Pillars of Excellence & Customer Promise */}
      <section className="about-section values-section">
        <div className="section-title-wrap">
          <span className="badge">WHY CHOOSE US</span>
          <h2>The Prestige Commitment</h2>
          <p>Every vehicle in our showroom is held to uncompromising standards.</p>
        </div>

        <div className="values-grid">
          <div className="value-card">
            <div className="value-number">01</div>
            <h3>150-Point Inspection</h3>
            <p>
              Every engine, transmission, chassis weld, and electronics board is
              tested rigorously by certified master technicians.
            </p>
          </div>

          <div className="value-card">
            <div className="value-number">02</div>
            <h3>Transparent History</h3>
            <p>
              Complete verified service documentation, non-accidental certification,
              and transparent pricing with zero hidden surcharges.
            </p>
          </div>

          <div className="value-card">
            <div className="value-number">03</div>
            <h3>Guaranteed Buyback</h3>
            <p>
              Enjoy assured buyback valuations within 3 years, giving you effortless
              upgrades to newer models whenever you desire.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
