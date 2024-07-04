import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Cart = ({ cartItems, removeFromCart, addToCart }) => {
  if (!cartItems.length) return <h2>Your cart is empty</h2>;

  const handleRemoveOne = (item) => {
    if (item.quantity > 1) {
      removeFromCart({ ...item, quantity: item.quantity - 1 });
    }
  };

  const handleRemoveAll = (item) => {
    removeFromCart(item);
  };

  const handleAddOne = (item) => {
    addToCart(item, 1);
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <div>
              <button onClick={() => handleRemoveOne(item)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleAddOne(item)}>+</button>
              <button onClick={() => handleRemoveAll(item)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalAmount.toFixed(2)}</h3>
      <Link to="/checkout">Checkout</Link>
    </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Cart;
