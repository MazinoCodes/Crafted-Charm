import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import leftArrow from '../icons/LeftArrow.svg';
import rightArrow from '../icons/RightArrow.svg';
import AddToCartNotification from '../Components/AddToCartNotification';

const Product = ({ products, addToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [notificationItem, setNotificationItem] = useState(null);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    setNotificationItem(product);
    setTimeout(() => {
      setNotificationItem(null);
    }, 3000);
  };

  return (
    <div className='bg-[#F5F5F5] w-[100vw] h-[100vh] flex flex-row justify-between'>
      <h1>Product Page</h1>
      <div>
        <div className="flex flex-row items-center flex-1 justify-center">
          <div>
            <button className="bg-[#343A4099] px-4 py-3 rounded-[48px]"><img src={leftArrow} alt="" /></button>
            <img src={product.pic} alt="" />
            <button className="bg-[#343A40] px-4 py-3 rounded-[48px] "><img src={rightArrow} alt="" /></button>
          </div>
          <div>
            {product.opic.map((img, index) => (<img src={img} alt="" key={index} />))}
          </div>
        </div>
      </div>
      <div>
        {notificationItem && (
          <AddToCartNotification item={notificationItem} onClose={() => setNotificationItem(null)} />
        )}
      </div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <br />
      <Link to="/">Go Back</Link>
    </div>
  );
};

Product.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      pic: PropTypes.string.isRequired,
      opic: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Product;
