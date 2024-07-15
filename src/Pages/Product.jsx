import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import leftArrow from '../icons/LeftArrow.svg';
import rightArrow from '../icons/RightArrow.svg';
import AddToCartNotification from '../Components/AddToCartNotification';
import Navbar from '../Components/Navbar';
import ColorPicker from '../Components/ColorPicker';

const Product = ({products, addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [notificationItem, setNotificationItem] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://timbu-get-single-product.reavdev.workers.dev/${id}?organization_id=a6f9987b21424f83ad7b2dd34dfd6da2&reverse_sort=true&page=1&Appid=E77TEKW1ASD0G0J&Apikey=3abc772599e34d95a8e35bb58adf98a420240712204745465546`);
        const data = await response.json();
        setProduct(data); 
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('favorites')) || [];
    setWishlist(storedWishlist);
  }, []);

  const updateWishlist = (newWishlist) => {
    setWishlist(newWishlist);
    localStorage.setItem('favorites', JSON.stringify(newWishlist));
  };

  const handleAddToWishlist = () => {
    if (wishlist.includes(product.unique_id)) {
      const newWishlist = wishlist.filter(item => item !== product.unique_id);
      updateWishlist(newWishlist);
    } else {
      const newWishlist = [...wishlist, product.unique_id];
      updateWishlist(newWishlist);
    }
  };

  if (!product) {
    return <h2>Loading product...</h2>;
  }

  // Extract image URLs from product.photos
  const productImages = product.photos.map(photo => `/${photo.url}`);
  
  const handleNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % productImages.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + productImages.length) % productImages.length);
  };

  const handleAddToCart = () => {
    addToCart(product);
    setNotificationItem(product);
    setTimeout(() => {
      setNotificationItem(null);
    }, 3000);
  };

  return (
    <div className='w-[100vw] bg-white min-h-screen flex flex-col pt-5 px-1 md:px-10 overflow-x-hidden gap-6 md:gap-12 phone:gap-20 tablet:flex-col'>
      <Navbar className='w-[100vw]'/>
      
      <div className='flex flex-col md:flex-row items-center justify-center gap-16 md:gap-12 tablet:flex-col'>
        <div className='flex flex-col items-center gap-3'>
          <div className="flex items-center gap-3">
            <button className="bg-[#343A4099] px-3 py-2 rounded-[48px]" onClick={handlePrevImage}>
              <img src={leftArrow} alt="Previous" />
            </button>
            <img src={`/api/images/${productImages[currentImageIndex]}`} alt={product.name} className="w-[400px] md:w-[400px] rounded-[5%] phone:w-[230px] tablet:w-[300px]" />
            <button className="bg-[#343A4099] px-3 py-2 rounded-[48px]" onClick={handleNextImage}>
              <img src={rightArrow} alt="Next" />
            </button>
          </div>
          <div className="flex flex-row gap-2 md:gap-3">
            {productImages.map((pic, index) => (
              <img
                key={index}
                src={`/api/images/${pic}`}
                alt={`${product.name} ${index + 1}`}
                className={`w-16 h-16 md:w-20 md:h-20 cursor-pointer border-[0.8px] border-[#343A40] ${index === currentImageIndex ? 'border-yellow-600' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="flex-[0.7] px-4 md:px-9 flex flex-col items-start gap-6 phone:gap-10">
          <h2 className="text-3xl md:text-4xl font-semibold">{product.name}</h2>
          <span className='font-semibold text-2xl text-black'>£{product.current_price}</span>
          <p className='text-[#747373] md:text-md'>{product.description}</p>
          <div className='flex flex-row gap-2 md:gap-4 mx-auto'>
            <ColorPicker/>
          </div>
          <div className='flex flex-col justify-between items-center w-full gap-2 phone:pb-9'>
            <button className="w-full bg-[#343A40] text-white text-sm py-2 px-3 rounded tablet:w-[40vw] tablet:py-3" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button
              className={`w-full bg-[#F5F5F5] text-[#343A40] text-sm py-2 px-3 rounded border font-semibold tablet:w-[40vw] tablet:py-3 border-[#343A40] ${wishlist.includes(product.unique_id) ? 'bg-[#343A40]' : ''}`}
              onClick={handleAddToWishlist}
            >
              {wishlist.includes(product.unique_id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
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
  addToCart: PropTypes.func.isRequired,
};

export default Product;
