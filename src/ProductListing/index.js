import React, { useState } from "react";

import "./style.css";

function ProductListing() {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", rating: 0, inCart: false },
    { id: 2, name: "Product 2", rating: 0, inCart: false },
    { id: 3, name: "Product 3", rating: 0, inCart: false },
    // Add more products as needed
  ]);

  const handleRatingChange = (id, value) => {
    if (value >= 0 && value <= 5) {
      const updatedProducts = products.map((product) => {
        if (product.id === id) {
          return { ...product, rating: value };
        }
        return product;
      });
      setProducts(updatedProducts);
    }
  };

  const handleAddToCart = (id) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, inCart: true };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const handleRemoveFromCart = (id) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, inCart: false };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  return (
    <div className="product">
      <h2 >Product Listing</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Rating: {product.rating}</p>
          < input 
            type="number"
            min="0"
            max="5"
            value={product.rating}
            onChange={(e) =>
              handleRatingChange(product.id, parseInt(e.target.value))
            }
          />
          <button className="product"
            disabled={product.inCart}
            onClick={() => handleAddToCart(product.id)}
          >
            {product.inCart ? "Added to Cart" : "Add to Cart"}
          </button>
          {product.inCart && (
            <button className="product" onClick={() => handleRemoveFromCart(product.id)}>
              Remove from Cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default ProductListing;
