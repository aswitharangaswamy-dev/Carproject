import React, { createContext, useContext, useState, useEffect } from "react";

// Beginner-friendly Cart Context
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Load saved cart from localStorage or start empty
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("prestige_cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (e) {
      return [];
    }
  });

  // Save cart changes to localStorage
  useEffect(() => {
    localStorage.setItem("prestige_cart", JSON.stringify(cart));
  }, [cart]);

  // Add car to cart
  const addToCart = (car) => {
    setCart((prevCart) => {
      if (prevCart.some((item) => item.id === car.id)) {
        return prevCart;
      }
      return [...prevCart, car];
    });
  };

  // Remove car from cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Check if car is already in cart
  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  // Toggle car in cart
  const toggleCart = (car) => {
    if (isInCart(car.id)) {
      removeFromCart(car.id);
    } else {
      addToCart(car);
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, isInCart, toggleCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
