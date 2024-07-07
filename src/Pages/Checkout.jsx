import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Checkout = ({ cartItems, clearCart }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // Final step: handle checkout
      clearCart();
      localStorage.removeItem('cart');
      alert('Purchase confirmed! Your cart has been cleared.');
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const StepProgress = ({ step }) => {
    return (
      <div className="flex justify-center items-center mb-6 w-[40vw] phone:w-[80vw] tablet:w-[80vw] tablet:ml-24 phone:ml-14">
        <div className="flex items-center w-[90vw]  px-2 step-line phone:w-[80vw] ">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center w-full">
              <div className={`rounded-full h-10 w-10 flex items-center justify-center ${step >= s ? 'bg-[#343A40] text-white' : 'bg-[#d1d5db] text-gray-600'}`}>
                {s}
              </div>
              {s < 3 && <div className={`h-1 flex-1 ${step > s ? 'bg-[#343A40]' : 'bg-gray-300'}`}></div>}
            </div>
          ))}
        </div>
      </div>
    );
  };

  if (!cartItems.length) {
    return <h2>Your cart is empty</h2>;
  }

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className='flex flex-col pt-7 w-full max-w-4xl mx-auto gap-5'>
      <h2 className='font-semibold text-3xl text-center'>Checkout</h2>
      <StepProgress step={currentStep} />
      {currentStep === 1 && (
        <div className='flex flex-col items-center'>
          <h3 className='mb-4'>Step 1: User Details</h3>
          <div className='flex flex-col w-full md:w-3/4 lg:w-1/2 gap-4'>
            <input
              type='text'
              name='name'
              placeholder='Full Name'
              value={userDetails.name}
              onChange={handleInputChange}
              className='border p-2 rounded-md w-full'
            />
            <input
              type='email'
              name='email'
              placeholder='Email'
              value={userDetails.email}
              onChange={handleInputChange}
              className='border p-2 rounded-md w-full'
            />
            <input
              type='tel'
              name='phone'
              placeholder='Phone Number'
              value={userDetails.phone}
              onChange={handleInputChange}
              className='border p-2 rounded-md w-full'
            />
          </div>
        </div>
      )}
      {currentStep === 2 && (
        <div className='flex flex-col items-center'>
          <h3 className='mb-4'>Step 2: Delivery Details</h3>
          <div className='flex flex-col w-full md:w-3/4 lg:w-1/2 gap-4'>
            <input
              type='text'
              name='address'
              placeholder='Address'
              value={userDetails.address}
              onChange={handleInputChange}
              className='border p-2 rounded-md w-full'
            />
            <input
              type='text'
              name='city'
              placeholder='City'
              value={userDetails.city}
              onChange={handleInputChange}
              className='border p-2 rounded-md w-full'
            />
            <input
              type='text'
              name='postalCode'
              placeholder='Postal Code'
              value={userDetails.postalCode}
              onChange={handleInputChange}
              className='border p-2 rounded-md w-full'
            />
          </div>
        </div>
      )}
      {currentStep === 3 && (
        <div className='flex flex-col items-center'>
          <h3 className='mb-4'>Step 3: Payment</h3>
          <div className='flex flex-col w-full md:w-3/4 lg:w-1/2 gap-4'>
            <select
              name='paymentMethod'
              value={userDetails.paymentMethod}
              onChange={handleInputChange}
              className='border p-2 rounded-md w-full'
            >
              <option value=''>Select Payment Method</option>
              <option value='Credit Card'>Credit Card</option>
              <option value='PayPal'>PayPal</option>
              <option value='Bank Transfer'>Bank Transfer</option>
            </select>
          </div>
        </div>
      )}
      <div className='flex justify-between mt-4 w-full md:w-3/4 lg:w-1/2'>
        <button
          onClick={handlePrevStep}
          disabled={currentStep === 1}
          className={`w-[45%] bg-gray-300 text-sm text-center py-2 rounded-md ${currentStep === 1 ? 'text-gray-500 cursor-not-allowed' : 'text-[#343A40]'}`}
        >
          Previous
        </button>
        <button
          onClick={handleNextStep}
          disabled={
            (currentStep === 1 && (!userDetails.name || !userDetails.email || !userDetails.phone)) ||
            (currentStep === 2 && (!userDetails.address || !userDetails.city || !userDetails.postalCode)) ||
            (currentStep === 3 && !userDetails.paymentMethod)
          }
          className={`w-[45%] ${currentStep === 3 ? 'bg-[#343A40]' : 'bg-[#343A40]'} text-sm text-center py-2 rounded-md text-[#F5F5F5]`}
        >
          {currentStep === 3 ? 'Confirm Purchase' : 'Next'}
        </button>
      </div>
      <Link to="/" className='w-full md:w-3/4 lg:w-1/2 bg-[#343A40] text-sm text-center py-2 rounded-md text-[#F5F5F5] mt-3'>Back to Home</Link>
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
