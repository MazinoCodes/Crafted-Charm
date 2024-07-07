import { useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import leftArrow from '../icons/LeftArrow.svg';
import rightArrow from '../icons/RightArrow.svg';
import AddToCartNotification from '../Components/AddToCartNotification';
import Navbar from '../Components/Navbar';

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
    <div className='w-[100vw] bg-white min-h-screen flex flex-col pt-5 px-1 md:px-10 overflow-x-hidden gap-6 md:gap-12 phone:gap-20  tablet: tablet:flex-col  tablet:'>
      <Navbar className='w-[100vw]'/>
      
      <div className='flex flex-col md:flex-row items-center justify-center gap-16 md:gap-12 tablet:flex-col'>
        <div className='flex flex-col items-center gap-3'>
          <div className="flex items-center gap-3">
            <button className="bg-[#343A4099] px-3 py-2 rounded-[48px]" onClick={handlePrevImage}>
              <img src={leftArrow} alt="Previous" />
            </button>
            <img src={product.opic[currentImageIndex]} alt={product.name} className="w-[500px] h-[240px]  md:w-[500px]  rounded-[5%] phone:w-[230px]" />
            <button className="bg-[#343A4099] px-3 py-2 rounded-[48px]" onClick={handleNextImage}>
              <img src={rightArrow} alt="Next" />
            </button>
          </div>
          <div className="flex flex-row gap-2 md:gap-3">
            {product.opic.map((pic, index) => (
              <img
                key={index}
                src={pic}
                alt={`${product.name} ${index + 1}`}
                className={`w-16 h-16 md:w-20 md:h-20 cursor-pointer border-[0.8px] border-[#343A40] ${index === currentImageIndex ? 'border-yellow-600' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="flex-[0.7] px-4 md:px-9 flex flex-col items-start gap-6 phone:gap-10 ">
          <h2 className="text-3xl md:text-4xl font-semibold">{product.name}</h2>
          <span className='font-semibold text-2xl text-black'>£{product.price.toFixed(2)}</span>
          <p className='text-[#747373]  md:text-md'>{product.description}</p>
          <div className='flex flex-row gap-2 md:gap-4 mx-auto'>
            <div className='w-[60px] h-[60px] md:w-[45px] md:h-[45px] rounded-full bg-[#2A2D30] border-4 border-[#E4851A]'></div>
            <div className='w-[60px] h-[60px] md:w-[45px] md:h-[45px] rounded-full bg-[#234566]'></div>
            <div className='w-[60px] h-[60px] md:w-[45px] md:h-[45px] rounded-full bg-[#C6CFD7]'></div>
            <div className='w-[60px] h-[60px] md:w-[45px] md:h-[45px] rounded-full bg-[#BBB1A7]'></div>
            <div className='w-[60px] h-[60px] md:w-[45px] md:h-[45px] rounded-full bg-[#82572C]'></div>
          
          </div>
          <div className='flex flex-col justify-between items-center w-full gap-2  phone:pb-9'>
            <button className="w-full bg-[#343A40] text-white text-sm py-2 px-3 rounded tablet:w-[40vw] tablet:py-3" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="w-full bg-[#F5F5F5] text-[#343A40] text-sm py-2 px-3 rounded font-semibold tablet:w-[40vw] tablet:py-3">
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
