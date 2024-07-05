import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import leftArrow from '../icons/LeftArrow.svg';
import rightArrow from '../icons/RightArrow.svg';
import arrow from '../icons/BlackArrow.svg'

const Product = ({ products, addToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % product.opic.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + product.opic.length) % product.opic.length);
  };

  return (
    <div className='bg-[#F5F5F5] w-[100vw] h-[100vh] flex flex-col  justify-  pt-5 px-10 overflow-x-hidden gap-12'>
      <Link to="/" className="top-5 absolute rotate-180"><img src={arrow} alt="" />
      </Link>
      <h1 className='text-center font-medium text-2xl'>Product Page</h1>
      <div className='flex flex-row items-center'>
      <div className='flex flex-col flex-[1] items-center justify-start gap-6'>
      <div className="flex flex-row items-center gap-3">
        <button className="bg-[#343A4099] px-3 py-2 rounded-[48px]" onClick={handlePrevImage}>
          <img src={leftArrow} alt="Previous" />
        </button>
        <img src={product.opic[currentImageIndex]} alt={product.name} className="w-[500px] h-[400px] rounded-[5%]" />
        <button className="bg-[#343A4099] px-3 py-2 rounded-[48px]" onClick={handleNextImage}>
          <img src={rightArrow} alt="Next" />
        </button>
      </div>
      <div className="flex flex-row">
        {product.opic.map((pic, index) => (
          <img
            key={index}
            src={pic}
            alt={`${product.name} ${index + 1}`}
            className={`w-16 h-16 cursor-pointer ${index === currentImageIndex ? 'border-2 border-blue-500' : ''}`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
      </div>
    
      <div className="  flex-1 px-9 flex flex-col items-start gap-6">
        <h2 className="text-3xl font-semibold">{product.name}</h2>
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
        <p className="text-gray-600 flex flex-row justify-between items-center w-[100%]">
          <span className='font-semibold text-2xl text-black'>£{product.price.toFixed(2)} </span>
          <button className="bg-[#343A40]  text-white text-sm py-2 px-3 rounded" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
        </p>
      
        <br />
        
      </div>
      </div>
      
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
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Product;
