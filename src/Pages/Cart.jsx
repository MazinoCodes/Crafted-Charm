import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import arrow from '../icons/Arrow.svg';
import remove from '../icons/Remove icon.svg';
import plus from '../icons/plus.svg';
import minus from '../icons/minus.svg';

const Cart = ({ cartItems, removeFromCart, addToCart, removeItemFromCart }) => {
  if (!cartItems.length) {
    return (
      <div className='w-[100vw] h-[100vh] flex items-center justify-center flex-col'>
        <h2 className='text-2xl'>Your Cart is empty</h2>
        <Link to='/'>
          <button className="bg-[#343A40] text-white text-sm py-2 px-3 rounded flex flex-row items-center gap-2">
            Add to Cart <img src={arrow} alt="" />
          </button>
        </Link>
      </div>
    );
  }

  const handleRemoveOne = (item) => {
    if (item.quantity > 1) {
      removeFromCart({ ...item, quantity: item.quantity - 1 });
    } else {
      removeItemFromCart(item);
    }
  };

  const handleRemoveAll = (item) => {
    removeItemFromCart(item);
  };

  const handleAddOne = (item) => {
    addToCart(item, 1);
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className='flex flex-col pt-7 w-[100vw] gap-5 mb-14'>
      <h2 className='font-semibold text-3xl text-center'>Cart</h2>
      <ul className='flex flex-col items-center justify-center gap-2'>
        {cartItems.map(item => (
          <li key={item.id} className='flex w-[95vw] border-b-2 flex-row items-center justify-between p-3 pb-7'>
            <img src={item.pic} alt={item.name} className='w-[10vw] rounded-xl' />
            {item.name}
            <div className='flex flex-row items-center justify-between gap-1'>
              <button onClick={() => handleRemoveOne(item)}><img src={minus} alt="" /></button>
              <span>{item.quantity}</span>
              <button onClick={() => handleAddOne(item)}><img src={plus} alt="" /></button>
            </div>
            <span className='font-semibold text-xl'>£{(item.price*item.quantity).toFixed(2)}</span>
            <button onClick={() => handleRemoveAll(item)}><img src={remove} alt="" /></button>
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
        <Link to="/checkout" className='w-[100%] bg-[#343A40] text-sm text-center py-2 rounded-md text-[#F5F5F5]'>Proceed to checkout</Link>
      </div>
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
      pic: PropTypes.string.isRequired,
    })
  ).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeItemFromCart: PropTypes.func.isRequired,
};

export default Cart;
