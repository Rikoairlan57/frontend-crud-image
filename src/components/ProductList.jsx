/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/products/${productId}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="columns">
          <div className="column is-centered">
            <Link to="/add" className="button is-success">
              Add New
            </Link>
            <table className="table is-striped is-bordered  is-fullwidth mt-2">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Image</th>
                  <th>Name Product</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="is-align-content-center">
                {products.map((product, index) => (
                  <tr key={product.id}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={product.url}
                        alt="Image"
                        width="75"
                        height="75"
                      />
                    </td>
                    <td>{product.name}</td>
                    <td>${product.price}</td>
                    <td>
                      <Link
                        to={`edit/${product.id}`}
                        className="button is-small is-info mr-5"
                      >
                        Edit
                      </Link>
                      <a
                        onClick={() => deleteProduct(product.id)}
                        className="button is-small is-danger"
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
