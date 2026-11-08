import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Category from "./Pages/Category";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import ProductUpload from "./Pages/ProductUpload";
import FetchProduct from "./Pages/FetchProduct";
import EditUpload from "./Pages/EditUploade";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import ProtectedRoute from "./Pages/ProtectedRoute";
function App() {
  return (
    <CartProvider>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
              
              } />
            <Route path="/category" element={
              <Category />
              } />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={
                            <ProtectedRoute>

              <Contact />
              </ProtectedRoute>
              } />
            <Route path="/upload" element={<ProductUpload />} />
            <Route path="/fetch" element={<FetchProduct />} />
            <Route path="/edit/:Price" element={<EditUpload />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
