import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProductList = ({ products, addToCart, setSelectedProduct }) => {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (productId, amount) => {
    setQuantities({
      ...quantities,
      [productId]: Math.max(1, (quantities[productId] || 1) + amount),
    });
  };

  const handleAddToCart = (product) => {
    addToCart(product, quantities[product.id] || 1);
    setQuantities({ ...quantities, [product.id]: 1 });
  };

  return (
    <div>
      <h2>Products</h2>
      <div>
        {products.map(product => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => setSelectedProduct(product)}>View Details</button>
            <div>
              <button onClick={() => handleQuantityChange(product.id, -1)} disabled={quantities[product.id] <= 1}>-</button>
              <span>{quantities[product.id] || 1}</span>
              <button onClick={() => handleQuantityChange(product.id, 1)}>+</button>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
  setSelectedProduct: PropTypes.func.isRequired,
};

export default ProductList;
