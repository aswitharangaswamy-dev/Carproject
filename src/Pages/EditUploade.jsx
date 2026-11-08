
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import './EditUpload.css';

const EditUpload = () => {

    const { Price } = useParams();

    const [product, setProduct] = useState({});

    // Fetch Existing Product Details
    useEffect(() => {

        axios
            .get(`http://localhost:7001/products/${Price}`)
            .then((response) => {
                setProduct(response.data);
            })
            .catch((err) => {
                console.log(err);
            });

    }, [Price]);

    // Update Product
    const handleSubmit = (e) => {

        e.preventDefault();

        const form = e.target;

        const productName = form.productName.value;
        const productImage = form.productImage.value;
        const productPrice = form.productPrice.value;

        const updatedProduct = {
            productName,
            productImage,
            productPrice
        };

        axios
            .patch(
                `http://localhost:7001/updateproduct/${Price}`,
                updatedProduct
            )
            .then((response) => {

                alert('Product Updated Successfully');

                window.location.href = '/fetch';

            })
            .catch((err) => {
                console.log(err);
            });

    };

    return (

        <div className="edit-container">

            <form className="edit-form" onSubmit={handleSubmit}>

                <h2 className="edit-heading">
                    Edit Product
                </h2>

                <label>Product Name</label>

                <input
                    type="text"
                    name="productName"
                    placeholder="Enter product name"
                    defaultValue={product.productName || ''}
                />

                <label>Product Image URL</label>

                <input
                    type="url"
                    name="productImage"
                    placeholder="Enter image URL"
                    defaultValue={product.productImage || ''}
                />

                <label>Product Price</label>

                <input
                    type="number"
                    name="productPrice"
                    placeholder="Enter price"
                    defaultValue={product.productPrice || ''}
                />

                <button type="submit" className="edit-submit-button">
                    Edit Product
                </button>

            </form>

        </div>

    );
};

export default EditUpload;
