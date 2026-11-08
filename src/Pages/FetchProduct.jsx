
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './FetchProduct.css';

const FetchProduct = () => {

    const [products, setProducts] = useState([]);

    // Fetch Products
    useEffect(() => {

        axios.get("http://localhost:6002/products")
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);

    // Delete Product
    const DeleteItems = (id) => {

        axios.delete(`http://localhost:6002/delproduct/${id}`)
            .then((response) => {

                alert("Deleted Successfully");

                setProducts((prevProductItems) =>
                    prevProductItems.filter(
                        (item) => item._id !== id
                    )
                );

            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (

        <div className="fetch-product-container">

            <h2 className="fetch-product-heading">
                Product Details
            </h2>

            <table className="product-table">

                <thead>

                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>

                </thead>

                <tbody>

                    {
                        products.map((product) => (

                            <tr key={product._id}>

                                <td>
                                    {product.productName}
                                </td>

                                <td className="product-price">
                                    ${product.productPrice}
                                </td>

                                <td>

                                    <img
                                        src={product.productImage}
                                        alt={product.productName}
                                        className="product-image"
                                    />

                                </td>

                                <td className="product-actions">

                                    <Link to={`/edit/${product._id}`}>

                                        <button className="edit-button">
                                            Edit
                                        </button>

                                    </Link>

                                    <br />
                                    <br />

                                    <button
                                        className="delete-button"
                                        onClick={() => DeleteItems(product._id)}
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))
                    }

                </tbody>

            </table>

        </div>

    );
};

export default FetchProduct;
