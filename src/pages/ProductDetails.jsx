import React from 'react';
import './ProductDetails.css';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();

  // Dummy product details (replace with real data in future)
  const product = {
    id,
    name: "Wireless Headphones",
    price: 1499,
    description: "High-quality wireless headphones with noise cancellation.",
    image: "https://via.placeholder.com/250"
  };

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <div className="details">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h3>Price: ₹{product.price}</h3>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
