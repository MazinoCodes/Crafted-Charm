import { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StepProgress from '../Components/StepProgress';
import app from '../icons/Apple.svg';
import paypal from '../icons/Paypal.svg';
import visa from '../icons/Visa.svg';
import mc from '../icons/Mastercard.svg';
import check from '../icons/checkmark.svg';

const Payment = ({ clearCart }) => {
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardLogo, setCardLogo] = useState(mc);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const savedMethod = localStorage.getItem('paymentMethod');
    switch (savedMethod) {
      case 'paypal':
        setCardLogo(paypal);
        break;
      case 'mc':
        setCardLogo(mc);
        break;
      case 'visa':
        setCardLogo(visa);
        break;
      case 'apple':
        setCardLogo(app);
        break;
      default:
        setCardLogo(mc);
    }
  }, []);

  const handleConfirmPurchase = () => {
    setShowPopup(true);
    clearCart(); // Clear the cart after confirming the purchase
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className='flex flex-col justify-center gap-5 pt-6 w-[100vw] mx-auto'>
      <Navbar className="w-[100vw]" />
      <div className="flex flex-col items-center justify-center pt-7 gap-9">
        <StepProgress step={3} className="w-full" />
        <h1 className="font-semibold text-3xl mb-3">Payment Method</h1>
        <div className="flex flex-col w-[40vw] gap-4 items-center phone:w-[90vw] tablet:w-[50vw]">
          <div className="flex flex-col items-start w-full">
            <label>Card Name</label>
            <input
              type="text"
              name="cardName"
              placeholder="Francis Delis"
              className="border p-2 rounded-md w-full border-[#343A40]"
            />
          </div>
          <div className="w-full flex flex-row justify-between items-center gap-4">
            <div className="flex flex-col items-start w-full relative">
              <label>Card Number</label>
              <div className='flex flex-row items-center'>
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  className="border-y border-l border-[#343A40] p-3 rounded-l-md w-[39vw] phone:w-[87vw] tablet:w-[48vw]"
                />
                <button className="flex items-center justify-center h-fit w-fit border-y border-r border-[#343A40] rounded-r-md pr-4 ">
                  <img src={cardLogo} alt="Card Logo" className="w-[34.5px] py-1 phone:w-[35px] tablet:w-[35px]" />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row justify-between items-center gap-4">
            <div className="flex flex-col items-start w-full">
              <label>Expiry Date</label>
              <input
                type="text"
                name="expiryDate"
                placeholder="MM/YY"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="border p-2 rounded-md w-full border-[#343A40]"
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <label>CVV</label>
              <input
                type="text"
                name="cvv"
                placeholder="123"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="border p-2 rounded-md w-full border-[#343A40]"
              />
            </div>
          </div>
          <div className="flex flex-col items-start w-full">
            <label>
              <input type="checkbox" name="saveAddress" className="mr-2 bg-black" />
              Save billing address as shipping address
            </label>
          </div>
          <div className='flex flex-col justify-between mt-4 w-[40vw] items-center phone:px-5 phone:w-[100vw] tablet:w-[50vw] gap-4'>
            <div className='flex flex-row w-[40vw] gap-2 phone:w-[90vw] tablet:w-[50vw]'>
              <Link to='/checkout' className={'w-1/2 bg-[#f5f5f5] border border-[#343A40] text-[#343A40] text-sm text-center py-2 rounded-md'}>
                <button>Previous</button>
              </Link>
              <button
                onClick={handleConfirmPurchase}
                className="bg-[#343A40] w-1/2 text-sm text-center py-2 rounded-md text-[#F5F5F5]"
              >
                Confirm Purchase
              </button>
            </div>
            <Link to="/" className='w-[40vw] bg-[#f5f5f5] border border-[#343A40] text-[#343A40] text-sm text-center py-2 rounded-md mt-0 mb-10 phone:w-[90vw] tablet:w-[50vw]'>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className=" w-[100vw] fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6  shadow-lg w-[20vw] flex flex-col items-center text-center gap-4 phone:w-[70vw] tablet:w-[40vw] rounded-[20px]">
            <img src={check} />
            <h2 className="text-xl font-semibold mb-4 text-[#40B509]">Payment Successful</h2>
            <p className='text-[#888888]'>Your Order has been placed, it would be sent out for delivery soon</p>
            <Link to='/'>
              <button
                onClick={closePopup}
                className=" w-[18vw] mt-4 bg-[#343A40] text-white py-2 px-4 rounded-md text-xs  phone:w-[60vw] tablet:w-[30vw]"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
Payment.propTypes={
  clearCart: PropTypes.func.isRequired,
}