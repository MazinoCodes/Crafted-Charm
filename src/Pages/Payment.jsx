import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';

const Payment = ({ cardLogo }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleCardNumberChange = (e) => {
    const { value } = e.target;
    setCardNumber(value);

    // Determine card type based on starting number
    if (value.startsWith('4')) {
      setCardLogo('visa');
    } else if (value.startsWith('5')) {
      setCardLogo('paypal');
    } else if (value.startsWith('3')) {
      setCardLogo('app');
    } else {
      setCardLogo('mc'); // default logo
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-10">
        <h1 className="font-semibold text-3xl mb-8">Payment Method</h1>
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
              <input
                type="text"
                name="cardNumber"
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={handleCardNumberChange}
                className="border p-2 rounded-md w-full border-[#343A40]"
              />
              <button className="absolute right-3 top-10">
                <img src={`/icons/${cardLogo}.svg`} alt="Card Logo" className="h-8 w-8" />
              </button>
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
              <input type="checkbox" name="saveAddress" className="mr-2" />
              Save billing address as shipping address
            </label>
          </div>
          <Link
            to="/checkout"
            className="w-[49%] bg-[#343A40] text-sm text-center py-2 rounded-md text-[#F5F5F5] mt-3"
          >
            Back to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Payment;
