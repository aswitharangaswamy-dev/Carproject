
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './ProductUpload.css';

const ProductUpload = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const productName = form.productName.value;
    const productImage = form.Image.value;
    const productPrice = form.productPrice.value;

    if (!productName || !productImage || !productPrice) {
      toast.warn('Please fill all the fields');
      return;
    }

    const product = {
      productName,
      productImage,
      productPrice
    };

    fetch('http://localhost:6002/uploadproduct', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(product)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

        toast.success('Product uploaded successfully');

        form.reset();

        window.location.href = '/fetch';
      })
      .catch(err => {
        console.error(err);
        toast.error('Failed to upload product');
      });
  };

  return (
    <div className="product-container">

      <ToastContainer />

      <form className="product-form" onSubmit={handleSubmit}>

        <h2 className="product-heading">
          Product Upload
        </h2>

        <label>Product Name</label>
        <input
          type="text"
          name="productName"
          placeholder="Enter product name"
        />

        <label>Product Image URL</label>
        <input
          type="url"
          name="Image"
          placeholder="Enter image URL"
        />

        <label>Product Price</label>
        <input
          type="number"
          name="productPrice"
          placeholder="Enter price"
        />

        <button type="submit" className="product-button">
          Upload Product
        </button>

      </form>
    </div>
  );
};

export default ProductUpload;
