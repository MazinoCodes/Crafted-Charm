import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import mc from '../icons/Mastercard.svg'
import app from '../icons/Apple.svg'
import paypal from '../icons/Paypal.svg'
import visa from '../icons/Visa.svg'
import Navbar from '../Components/Navbar';
const Checkout = ({ cartItems, clearCart }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('');

  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
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

  const handlePaymentMethod = (method) => {
    setPaymentMethod(method);
  };
  const StepProgress = ({ step }) => {
    return (
      <div>
          <div className="flex justify-center items-center mb-6 w-[40vw] phone:w-[80vw] tablet:w-[80vw] tablet:ml-24 phone:ml-16 ml-20 ">
        <div className="flex items-center w-[90vw] h-2 px-2 step-line phone:w-[80vw]">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center w-full">
              <div className={`rounded-full h-10 w-10 flex items-center justify-center z-10 ${step >= s ? 'bg-[#343A40] text-white' : 'bg-[#d1d5db] text-gray-600'}`}>
                {s}
              </div>
              {s < 3 && <div className={`h-2 flex-1 ${step > s ? 'bg-[#343A40]' : 'bg-gray-300'}`}></div>}
             
            </div>
          ))}
        </div>
      </div>
      
        <div className='flex flex-row gap-10  pl-16 font-semibold phone:pr-10 phone:gap-0'>
          <p className='  phone:text-center'>User Details</p>
          <p className='ml-8 phone:ml-7 phone:text-center'>Delivery Details</p>
          <p className='ml-12 phone:mr-5'>Payment</p>
        </div>
      </div>
    );
  };

  if (!cartItems.length) {
    return <h2>Your cart is empty</h2>;
  }

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className='flex flex-col pt-4 w-[90vw] mx-auto gap-5  justify-center'>
      <Navbar/>
      <div className='flex flex-col items-center gap-7'>
      <h2 className='font-semibold text-3xl text-center'>Checkout</h2>
      <StepProgress step={currentStep} />
      {currentStep === 1 && (
        <div className='flex flex-col items-center justify-center'>
          <div className='flex flex-col justify-center items-center w-[100vw] md:w-3/4 lg:w-[40vw] gap-4 tablet:w-[50vw]'>
            <div className='flex flex-col items-start w-full phone:pl-5 tablet:pr-7'>
              <label>Full Name</label>
              <input
                type='text'
                name='name'
                placeholder='John Doe'
                value={userDetails.name}
                onChange={handleInputChange}
                className='border p-2 rounded-md w-[40vw] phone:w-[90vw] tablet:w-[50vw] border-[#343A40]'
              />
            </div>
            <div className='flex flex-col items-start w-full phone:pl-5'>
              <label>Email</label>
              <input
                type='email'
                name='email'
                placeholder='example@email.com'
                value={userDetails.email}
                onChange={handleInputChange}
                className='border p-2 rounded-md w-[40vw] phone:w-[90vw] tablet:w-[50vw] border-[#343A40]'
              />
            </div>
            <div className='flex flex-col items-start w-full phone:pl-5'>
              <label>Mobile Number</label>
              <input
                type='tel'
                name='phone'
                placeholder='+44765-787-76'
                value={userDetails.phone}
                onChange={handleInputChange}
                className='border p-2 rounded-md w-[40vw] phone:w-[90vw] tablet:w-[50vw] border-[#343A40]'
              />
            </div>
          </div>
        </div>
      )}
      {currentStep === 2 && (
        <div className='flex flex-col '>
          <div className='flex flex-col w-[40vw] gap-4 items-center phone:w-[90vw] tablet:w-[50vw]'>
            <div className='flex flex-col items-start w-full'>
              <label>Address</label>
              <input
                type='text'
                name='address'
                placeholder='123 Main St, Apt 4B'
                value={userDetails.address}
                onChange={handleInputChange}
                className='border p-2 rounded-md w-full border-[#343A40]'
              />
            </div>
            <div className=' w-[40vw] flex flex-row justify-between  items-center gap-4 phone:w-[90vw] tablet:w-[50vw]'>
              <div className='flex flex-col items-start w-full'>
                <label>City</label>
                <select
                  name='city'
                  value={userDetails.city}
                  onChange={handleInputChange}
                  className='border p-2 rounded-md w-full border-[#343A40]'
                >
                  <option value=''>Select City</option>
                  <option value='New York'>New York</option>
                  <option value='Los Angeles'>Los Angeles</option>
                  <option value='Chicago'>Chicago</option>
                </select>
              </div>
              <div className='flex flex-col items-start w-full'>
                <label>Postal Code</label>
                <input
                  type='text'
                  name='postalCode'
                  placeholder='12345'
                  value={userDetails.postalCode}
                  onChange={handleInputChange}
                  className='border p-2 rounded-md w-full border-[#343A40]'
                />
              </div>
            </div>
            <div className=' w-[40vw] flex flex-row justify-between  items-center gap-4 phone:w-[90vw] tablet:w-[50vw]'>
              <div className='flex flex-col items-start w-full'>
                <label>State</label>
                <select
                  name='city'
                  value={userDetails.city}
                  onChange={handleInputChange}
                  className='border p-2 rounded-md w-full border-[#343A40]'
                >
                  <option value=''>Lagos</option>
                  <option value='New York'>New York</option>
                  <option value='Los Angeles'>Los Angeles</option>
                  <option value='Chicago'>Chicago</option>
                </select>
              </div>
              <div className='flex flex-col items-start w-full'>
                <label>Country</label>
                <select
                  name='city'
                  value={userDetails.city}
                  onChange={handleInputChange}
                  className='border p-2 rounded-md w-full border-[#343A40]'
                >
                  <option value=''>Nigeria</option>
                  <option value='New York'>New York</option>
                  <option value='Los Angeles'>Los Angeles</option>
                  <option value='Chicago'>Chicago</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
      {currentStep === 3 && (
        <div className='flex flex-col items-center'>
          <div className='flex flex-col w-[40vw] gap-4 tablet:w-[70vw] phone:w-[90vw]'>
            <div className='flex flex-col items-center w-full gap-12'>
              <label className='text-center font-semibold text-3xl'>Payment Method</label>
              <div className='flex flex-row items-center justify-between gap-10 phone:gap-2'>
              <button onClick={() => handlePaymentMethod('paypal')}>
          <img
            src={paypal}
            alt="Paypal"
            className="border-[#343A40] border rounded-[10px] px-[20px] py-[20px] phone:w-20"
          />
        </button>
        <button onClick={() => handlePaymentMethod('mastercard')}>
          <img
            src={mc}
            alt="Mastercard"
            className="border-[#343A40] border rounded-[10px] px-[20px] py-[30px] phone:w-20 phone:py-[28px]"
          />
        </button>
        <button onClick={() => handlePaymentMethod('visa')}>
          <img
            src={visa}
            alt="Visa"
            className="border-[#343A40] border rounded-[10px] px-[20px] py-[40px] phone:w-20 phone:py-[33px]"
          />
        </button>
        <button onClick={() => handlePaymentMethod('apple')}>
          <img
            src={app}
            alt="Apple Pay"
            className="border-[#343A40] border rounded-[10px] px-[25px] py-[20px] phone:w-20 phone:py-[23px]"
          />
        </button>
      </div>
            </div>
          </div>
        </div>
      )}
      <div className='flex flex-col justify-between mt-4 w-[40vw] items-center phone:px-5 phone:w-[100vw] tablet:w-[50vw] gap-4'>

        <div className='flex flex-row w-[40vw] gap-2'>

       
       { currentStep >= 2 ? <button
          onClick={handlePrevStep}
          disabled={currentStep === 1}
          className={`w-[49%] bg-[#f5f5f5] border border-[#343A40] text-[#343A40] text-sm text-center py-2 rounded-md ${currentStep === 1 ? 'text-gray-500 cursor-not-allowed' : 'text-[#343A40]'}`}
        >
          Previous
        </button>: <></>}
        <button
       className={`w-full ${currentStep >= 2 ? 'bg-[#343A40] w-[49%]' : 'bg-[#343A40]'} text-sm text-center py-2 rounded-md text-[#F5F5F5]`}  onClick={handleNextStep}>

            {currentStep === 3 ? <Link to='/payment'>Confirm Purchase</Link> : 'Next'}
         
      </button>
      </div>
      <Link to="/" className='w-[40vw] bg-[#f5f5f5] border border-[#343A40] text-[#343A40] text-sm text-center py-2 rounded-md mt-0 mb-10 phone:w-[90vw] tablet:w-[50vw]'>Back to Home</Link>
      </div>
    </div>
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
