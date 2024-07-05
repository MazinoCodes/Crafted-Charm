// ProductList.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import star from '../icons/Star.svg'
import heart from '../icons/Heart.svg'
import addCart from '../icons/CartShoppingBag.svg'
const ProductList = ({ products, addToCart, setSelectedProduct }) => {
 /* const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (productId, amount) => {
    setQuantities({
      ...quantities,
      [productId]: Math.max(1, (quantities[productId] || 1) + amount),
    });
  };

  const handleAddToCart = (product) => {
    addToCart(product, quantities[product.id] || 1);
    setQuantities({ ...quantities, [product.id]: 1 });
  };*/

  return (
    <div className='flex flex-col justify-center w-[100vw] px-8 items-center gap-[60px]'>
      <h2 className='font-medium text-[32px] text-center mb-[40px]'>Our Products</h2>
      <div className='flex flex-row justify-between w-[95vw] mx-auto'>
        <div className='flex flex-row items-center justify-between gap-[30px] text-[#747373] font-semibold'>
        <button className='text-black '>All</button>
        <button>Living Room</button>
        <button>Bathroom</button>
        <button>Kitchen</button>
        <button>Table</button>
        </div>
        
        <select className='w-fit'>
        <option value="Price" key="1" disabled>Filter</option>
         
        </select>
      </div>
      <div className="grid grid-cols-3 gap-7 ">
      {products.map(product => (
        <div key={product.id} className="bg-white w-fit rounded-xl">
          <img src={product.pic} alt={product.name} className="w-[35vw] mb-2 rounded-t-xl" />
          <div className='flex flex-row items-center justify-between px-3 py-4'>
            <div className='flex flex-col gap-4'>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <div className='flex flex-col gap-1'>
                <p className="font-semibold text-2xl">£{product.price}.00</p>
                <p className=' text-xs font-normal flex flex-row gap-1'><img src={star} alt="" />{product.rating} <span className='text-[#747373]'> ({product.review} Reviews) </span></p>
            </div>
          
            </div>
            <div className='flex flex-row gap-2'>
                <img src={addCart} alt="" />
                <img src={heart} alt="" />
            </div>
          </div>
          
          {/*<button
            className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded"
            onClick={() => setSelectedProduct(product)}
          >
            View Details
          </button>*/}
        </div>
      ))}
    </div>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      pic: PropTypes.string.isRequired,
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
  setSelectedProduct: PropTypes.func.isRequired,
};

export default ProductList;
