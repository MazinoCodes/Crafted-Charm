import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import arrow from '../icons/Arrow.svg';
import remove from '../icons/Remove icon.svg';
import plus from '../icons/plus.svg';
import minus from '../icons/minus.svg';
import Navbar from '../Components/Navbar';

const Cart = ({ cartItems, removeFromCart, addToCart, removeItemFromCart }) => {
  if (!cartItems.length) {
    return (
      <div className='w-full h-screen flex items-center justify-center flex-col gap-6'>
        <h2 className='text-2xl'>Your Cart is empty</h2>
        <Link to="/">
          <button className="bg-[#343A40] text-white text-sm py-2 px-3 rounded flex flex-row items-center gap-2">
            Checkout our Store <img src={arrow} alt="" />
          </button>
        </Link>
      </div>
    );
  }
console.log(1)
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

  const totalAmount = cartItems.reduce((sum, item) => sum + (item.current_price[0].NGN ? item.current_price[0].NGN[0] : "600") * item.quantity, 0);

  return (
    <div className='flex flex-col pt-7 w-[100vw] gap-9 px-6 bg-white phone:w-[100vw] tablet:w-[100vw]'>
      <Navbar />
      <h2 className='font-semibold text-3xl text-center'>Cart</h2>
      <div className='flex flex-col md:flex-row items-start gap-5'>
        <ul className='flex flex-col items-center justify-center gap-9 w-full md:w-[60vw]'>
          {cartItems.map(item => (
            <li key={item.id} className='flex flex-col md:flex-row w-full border-b-2 items-center justify-between p-3 pb-7 gap-5 tablet:flex-col'>

                <Link to={`/product/${item.id}`}  className='flex flex-row items-center gap-6 w-full md:w-auto phone:gap-3 tablet:gap-3'><img src={`/api/images/${item.photos[0].url}`} alt={item.name} className='w-32 md:w-40 rounded-xl' />
                <span className='font-semibold text-base'>{item.name}</span></Link>
              <div className='flex flex-row justify-between gap-20 phone:items-center phone:w-full phone:gap-5 tablet:items-center tablet:w-full tablet:gap-5'>
              <select className='custom-select border border-black px-2 py-3 rounded-[10px] phone:px-0 phone:py-0 phone:w-fit phone:border-0 tablet:px-0 tablet:py-0 tablet:w-fit tablet:border-0'>
                  <option value="" key="">Black</option>
                  <option value="" key="">Blue</option>
                  <option value="" key="">Brown</option>
                  <option value="" key="">Green</option>
                  <option value="" key="">Red</option>
                  <option value="" key="">Orange</option>
                  <option value="" key="">Grey</option>
                </select>

                <div className='flex flex-row items-center phone:gap-4 tablet:gap-4 w-full md:w-auto phone:flex-2 tablet:flex-2 gap-6'>
                  <div className='flex flex-row items-center justify-between gap-2'>
                    <button onClick={() => handleRemoveOne(item)} className='w-full'><img src={minus} alt="" /></button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleAddOne(item)} className='w-full'><img src={plus} alt="" /></button>
                  </div>
                  <span className='font-semibold text-xl'>£{(item.current_price[0].NGN ? item.current_price[0].NGN[0] : "600" * item.quantity).toFixed(2)}</span>
                  <button onClick={() => handleRemoveAll(item)}><img src={remove} alt="" /></button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className='w-[80vw] mx-auto md:w-[400px] flex flex-col justify-start gap-6 phone:h-auto tablet:h-auto h-[100vh] fixed left-[65%] phone:relative phone:left-0 tablet:relative tablet:left-0 phone:my-16 tablet:my-16 tablet:'>
          <h2 className='border-b border-black font-semibold pb-5'>Order Summary</h2>
          <div className='flex flex-col gap-3'>
            <h4 className='flex flex-row justify-between text-sm font-normal text-[#747373]'>
              Subtotal: <span>£{totalAmount.toFixed(2)}</span>
            </h4>
            <h4 className='flex flex-row justify-between text-sm font-normal text-[#747373]'>
              VAT <span>£10</span>
            </h4>
          </div>
          <h3 className='flex flex-row justify-between font-semibold text-lg text-[#343A40] border-t border-black'>
            Total: <span>£{(totalAmount + 10).toFixed(2)}</span>
          </h3>
          <Link to="/checkout" className='w-full bg-[#343A40] text-sm text-center py-2 rounded-md text-[#F5F5F5]'>
            Proceed to checkout
          </Link>
        </div>
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
