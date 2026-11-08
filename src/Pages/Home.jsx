import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* 1. Main Hero Banner */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">WELCOME TO PRESTIGE MOTORS</p>
          <h1>Drive Your Dreams.<br />Experience True Luxury.</h1>
          <blockquote className="hero-quote">
            "The cars we drive say a lot about who we are."
          </blockquote>
          <span>
            Discover high-performance BMW, Audi, rugged Thar 4x4, and world-class
            luxury supercars built for elegance and excitement.
          </span>
          <div className="hero-buttons">
            <Link to="/category" className="hero-btn">
              Explore Collection
            </Link>
            <Link to="/contact" className="hero-btn-secondary">
              Book Test Drive
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Extra Page/Section 1: The Philosophy of Speed */}
      <section className="quote-feature-section speed-section">
        <div className="quote-text-container">
          <p className="section-label">PERFORMANCE & HERITAGE</p>
          <h2>The Art of Pure Speed</h2>
          <blockquote className="featured-quote">
            "Straight roads are for fast cars, turns are for fast drivers."
            <cite>— Colin McRae</cite>
          </blockquote>
          <p className="quote-desc">
            Every curve in the road is an invitation to test your reflexes and
            revel in the harmony between driver and machine. Our sports cars are
            handcrafted with race-bred twin-turbo engines and responsive track handling.
          </p>
          <Link to="/category" className="section-link">
            View Sports & BMW Lineup →
          </Link>
        </div>
        <div className="quote-img-container">
          <img
            src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900"
            alt="BMW Sports Performance"
          />
        </div>
      </section>

      {/* 3. Extra Page/Section 2: Engineering Elegance */}
      <section className="quote-feature-section reverse elegance-section">
        <div className="quote-text-container">
          <p className="section-label">CRAFTSMANSHIP & INNOVATION</p>
          <h2>Symphony of Luxury & Tech</h2>
          <blockquote className="featured-quote">
            "Nobody remembers who took the easy road. Great cars are born out of obsession."
            <cite>— Automotive Philosophy</cite>
          </blockquote>
          <p className="quote-desc">
            Step into handcrafted cabins enveloped in bespoke Nappa leather,
            panoramic acoustic glass, and digital intelligence that anticipates
            your every desire before you even touch the wheel.
          </p>
          <Link to="/category" className="section-link">
            Explore Audi & Luxury Sedans →
          </Link>
        </div>
        <div className="quote-img-container">
          <img
            src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=900"
            alt="Audi Luxury Sedan"
          />
        </div>
      </section>

      {/* 4. Extra Page/Section 3: The Untamed 4x4 Spirit */}
      <section className="quote-feature-section offroad-section">
        <div className="quote-text-container">
          <p className="section-label">CONQUER EVERY TERRAIN</p>
          <h2>Born for the Uncharted</h2>
          <blockquote className="featured-quote">
            "Great roads are made for journeys, but the true adventure begins where the pavement ends."
            <cite>— 4x4 Expedition Rule</cite>
          </blockquote>
          <p className="quote-desc">
            Unleash raw, unapologetic power with high-ground clearance,
            locking differentials, and water-wading capability. Built for thrill-seekers
            who see mountains as invitations and rocky trails as playgrounds.
          </p>
          <Link to="/category" className="section-link">
            Explore Thar 4x4 Collection →
          </Link>
        </div>
        <div className="quote-img-container">
          <img
            src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=900"
            alt="Mahindra Thar 4x4 Off-Road"
          />
        </div>
      </section>

      {/* 5. Extra Page/Section 4: Inspirational Car Quotes Gallery */}
      <section className="quotes-gallery-section">
        <div className="gallery-header">
          <p className="section-label">WORDS THAT FUEL PASSION</p>
          <h2>Legendary Automotive Quotes</h2>
          <span>Timeless wisdom from motorsport legends and automotive icons.</span>
        </div>

        <div className="quotes-card-grid">
          <div className="quote-card">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600"
              alt="Porsche Supercar"
            />
            <div className="quote-card-body">
              <p className="card-quote">
                "If everything seems under control, you're just not going fast enough."
              </p>
              <h4>— Mario Andretti</h4>
            </div>
          </div>

          <div className="quote-card">
            <img
              src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600"
              alt="Mercedes Luxury"
            />
            <div className="quote-card-body">
              <p className="card-quote">
                "Aerodynamics are for people who can't build engines."
              </p>
              <h4>— Enzo Ferrari</h4>
            </div>
          </div>

          <div className="quote-card">
            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600"
              alt="Luxury Sports Car"
            />
            <div className="quote-card-body">
              <p className="card-quote">
                "Speed has never killed anyone. Suddenly becoming stationary, that's what gets you."
              </p>
              <h4>— Ken Miles</h4>
            </div>
          </div>

          <div className="quote-card">
            <img
              src="https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=600"
              alt="Ultra Luxury Car"
            />
            <div className="quote-card-body">
              <p className="card-quote">
                "Money can't buy happiness, but it can buy a luxury car, and that's pretty close."
              </p>
              <h4>— Automotive Proverb</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
