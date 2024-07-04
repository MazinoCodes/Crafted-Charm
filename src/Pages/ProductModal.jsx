import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ProductModal.css';

const ProductModal = ({ product, onClose, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (amount) => {
    setQuantity(prevQuantity => Math.max(1, prevQuantity + amount));
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{product.name}</h2>
        <p>Price: ${product.price}</p>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div>
          <button onClick={() => handleQuantityChange(-1)} disabled={quantity <= 1}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantityChange(1)}>+</button>
        </div>
        <button onClick={() => {
          addToCart(product, quantity);
          onClose();
        }}>Add to Cart</button>
      </div>
    </div>
  );
};

ProductModal.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductModal;
