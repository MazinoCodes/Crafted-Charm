import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Checkout = ({ cartItems, clearCart }) => {
  const handleFinalCheckout = () => {
    clearCart();
    localStorage.removeItem('cart');
    alert('Purchase confirmed! Your cart has been cleared.');
  };

  if (!cartItems.length) {
    return <h2>Your cart is empty</h2>;
  }

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className='flex flex-col pt-7 w-[100vw] gap-5'>
      <h2 className='font-semibold text-3xl text-center'>Checkout</h2>
      <ul className='flex flex-col items-center justify-center gap-2'>
        {cartItems.map(item => (
          <li key={item.id} className='flex w-[95vw] border-b-2 flex-row items-center justify-between p-3 pb-7'>
            <img src={item.pic} alt={item.name} className='w-[10vw] rounded-xl' />
            {item.name}
            <span className='font-semibold text-xl'>£{item.price.toFixed(2)} x {item.quantity}</span>
          </li>
        ))}
      </ul>
      <div className='w-[400px] flex flex-col relative left-[65%] mt-7 justify-center gap-6'>
        <h2 className='border-b-2'>Order Summary</h2>
        <div className='flex flex-col gap-3'>
          <h4 className='flex flex-row justify-between text-sm font-normal text-[#747373]'>Subtotal: <span>£{totalAmount.toFixed(2)}</span></h4>
          <h4 className='flex flex-row justify-between text-sm font-normal text-[#747373]'>VAT <span>£10</span></h4>
        </div>
        <h3 className='flex flex-row justify-between font-semibold text-lg text-[#343A40]'>Total: <span>£{(totalAmount + 10).toFixed(2)}</span></h3>
        <button onClick={handleFinalCheckout} className='w-[100%] bg-[#343A40] text-sm text-center py-2 rounded-md text-[#F5F5F5]'>Confirm Purchase</button>
      </div>
      <Link to="/" className='w-[100%] bg-[#343A40] text-sm text-center py-2 rounded-md text-[#F5F5F5] mt-3'>Back to Home</Link>
    </div>
  );
};

Checkout.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      pic: PropTypes.string.isRequired,
    })
  ).isRequired,
  clearCart: PropTypes.func.isRequired,
};

export default Checkout;
