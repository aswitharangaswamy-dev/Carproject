import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import "./Category.css";


const Category = () => {
  // Use shared cart context
  const { cart, toggleCart, isInCart } = useCart();

  // Selected Category filter
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Current Page (1 to 5)
  const [currentPage, setCurrentPage] = useState(1);

  // Cars per page: 4 cars per page creates 5 pages for 20 cars
  const carsPerPage = 4;

  // Filter cars based on selected category
  const filteredCars =
    selectedCategory === "All"
      ? allCars
      : allCars.filter((car) => car.category === selectedCategory);

  // Calculate pagination
  const totalPages = Math.ceil(filteredCars.length / carsPerPage) || 1;
  const safePage = Math.min(currentPage, totalPages);
  const indexOfLastCar = safePage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  // Category switch handler
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to page 1 on category change
  };

  return (
    <div className="category-page">
      {/* Banner */}
      <section className="category-banner">
        <p className="category-tag">PRESTIGE SHOWROOM CATALOG</p>
        <h1>Explore Our Car Collection</h1>
        <p className="banner-subtext">
          Browse our world-class inventory of BMW, Audi, Thar 4x4, Luxury, and Supercars.
        </p>
      </section>

      {/* Cart Status Bar */}
      <div className="cart-summary-bar">
        <div className="cart-summary-content">
          <span>
             Cars in Your Cart: <strong>{cart.length}</strong>
          </span>
          {cart.length > 0 && (
            <span className="cart-added-names">
              ({cart.map((item) => item.name).join(", ")})
            </span>
          )}
        </div>
      </div>

      {/* Categories Filter Tabs */}
      <section className="category-nav-section">
        <div className="category-tabs">
          {["All", "BMW", "Audi", "Thar", "Luxury", "Supercars"].map((cat) => (
            <button
              key={cat}
              className={`cat-tab-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat === "All" ? "All Cars (20)" : `${cat} (${allCars.filter(c => c.category === cat).length})`}
            </button>
          ))}
        </div>
      </section>

      {/* Car Cards Grid */}
      <section className="car-section">
        <div className="section-header-row">
          <h2>
            Showing: {selectedCategory} Cars ({filteredCars.length} Available)
          </h2>
          <span className="page-indicator">
            Page {safePage} of {totalPages}
          </span>
        </div>

        <div className="car-grid">
          {currentCars.map((car) => {
            const added = isInCart(car.id);

            return (
              <div className={`car-card ${added ? "card-in-cart" : ""}`} key={car.id}>
                <div className="car-image-box">
                  <img src={car.image} alt={car.name} />
                  <span className="car-category-badge">{car.category}</span>
                </div>

                <div className="car-info">
                  <p className="car-type">{car.type}</p>
                  <h3 className="car-title">{car.name}</h3>
                  <p className="car-power">{car.power}</p>
                  <h4 className="car-price">{car.price}</h4>

                  <div className="car-actions">
                    <button
                      className={added ? "remove-from-cart-btn" : "add-to-cart-btn"}
                      onClick={() => toggleCart(car)}
                    >
                      {added ? "✓ Remove from Cart" : "+ Add to Cart"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4 to 5 Pages Pagination Controls */}
        <div className="pagination-container">
          <p className="pagination-label">Browse Pages (4 to 5 Pages):</p>
          <div className="pagination-buttons">
            <button
              className="page-nav-btn"
              disabled={safePage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              ← Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                className={`page-number-btn ${safePage === pageNum ? "active-page" : ""}`}
                onClick={() => setCurrentPage(pageNum)}
              >
                Page {pageNum}
              </button>
            ))}

            <button
              className="page-nav-btn"
              disabled={safePage === totalPages}
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            >
              Next →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;
