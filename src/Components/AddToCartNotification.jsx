import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cart from '../icons/CartShoppingBag.svg'
const AddToCartNotification = ({ item, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (item) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [item, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white border rounded shadow-lg p-4 flex items-center gap-4">
      <img src={cart}/>
      <div>
        <h4 className="font-semibold">{item.name}</h4>
        <p>Added to cart</p>
      </div>
    </div>
  );
};

AddToCartNotification.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    pic: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default AddToCartNotification;
