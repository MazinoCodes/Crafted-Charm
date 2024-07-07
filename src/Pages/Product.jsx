import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import leftArrow from '../icons/LeftArrow.svg';
import rightArrow from '../icons/RightArrow.svg';
import arrow from '../icons/BlackArrow.svg';
import AddToCartNotification from '../Components/AddToCartNotification';

const Product = ({ products, addToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [notificationItem, setNotificationItem] = useState(null);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % product.opic.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + product.opic.length) % product.opic.length);
  };

  const handleAddToCart = () => {
    addToCart(product);
    setNotificationItem(product);
    setTimeout(() => {
      setNotificationItem(null);
    }, 3000);
  };

  return (
    <div className='bg-[#F5F5F5] w-full min-h-screen flex flex-col justify-start pt-5 px-10 overflow-x-hidden gap-12'>
      <Link to="/" className="top-5 absolute rotate-180">
        <img src={arrow} alt="Back" />
      </Link>
      <h1 className='text-center font-medium text-2xl'>Product Page</h1>
      <div className='flex flex-col md:flex-row items-center justify-center gap-12'>
        <div className='flex flex-col items-center gap-3'>
          <div className="flex items-center gap-3">
            <button className="bg-[#343A4099] px-3 py-2 rounded-[48px]" onClick={handlePrevImage}>
              <img src={leftArrow} alt="Previous" />
            </button>
            <img src={product.opic[currentImageIndex]} alt={product.name} className="w-[500px] h-[400px] rounded-[5%]" />
            <button className="bg-[#343A4099] px-3 py-2 rounded-[48px]" onClick={handleNextImage}>
              <img src={rightArrow} alt="Next" />
            </button>
          </div>
          <div className="flex flex-row gap-3">
            {product.opic.map((pic, index) => (
              <img
                key={index}
                src={pic}
                alt={`${product.name} ${index + 1}`}
                className={`w-20 h-20 cursor-pointer border-2 border-[#343A40] ${index === currentImageIndex ? 'border-yellow-600' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="flex-[0.7] px-9 flex flex-col items-start gap-6">
          <h2 className="text-4xl font-semibold">{product.name}</h2>
          <span className='font-semibold text-2xl text-black'>£{product.price.toFixed(2)}</span>
          <p className='text-[#747373] text-md'>{product.description}</p>
          <div className='flex flex-row gap-4'>
            <div className='w-[45px] h-[45px] rounded-[60px] bg-[#2A2D30]'></div>
            <div className='w-[45px] h-[45px] rounded-[60px] bg-[#234566]'></div>
            <div className='w-[45px] h-[45px] rounded-[60px] bg-[#C6CFD7]'></div>
            <div className='w-[45px] h-[45px] rounded-[60px] bg-[#BBB1A7]'></div>
            <div className='w-[45px] h-[45px] rounded-[60px] bg-[#82572C]'></div>
            <div className='w-[45px] h-[45px] rounded-[60px] bg-[#82572C]'></div>
            <div className='w-[45px] h-[45px] rounded-[60px] bg-[#82572C]'></div>
          </div>
          <div className='flex flex-col justify-between items-center w-full gap-2'>
            <button className="w-full bg-[#343A40] text-white text-sm py-2 px-3 rounded" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="w-full bg-white text-[#343A40] text-sm py-2 px-3 rounded font-semibold">
              Add to WishList
            </button>
          </div>
        </div>
      </div>

      {notificationItem && (
        <AddToCartNotification item={notificationItem} onClose={() => setNotificationItem(null)} />
      )}
    </div>
  );
};

Product.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      opic: PropTypes.arrayOf(PropTypes.string).isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Product;
