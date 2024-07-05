// ProductList.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
    <div className='flex flex-col justify-center w-[100vw] px-6'>
      <h2 className='font-medium text-[32px] text-center'>Our Products</h2>
      <div className='flex flex-row justify-between w-[90vw] mx-auto'>
        <div className='flex flex-row items-center justify-between gap-[30px]'>
        <button>All</button>
        <button>Living Room</button>
        <button>Bathroom</button>
        <button>Kitchen</button>
        <button>Table</button>
        </div>
        
        <select>
          <option value="Price" key="1">Price</option>
          <option value="New" key="1">New Arrival</option>
          <option value="Rating" key="1">rating</option>
        </select>
      </div>
      <div className="grid grid-cols-3 gap-4">
      {products.map(product => (
        <div key={product.id} className="">
          <img src={product.pic} alt={product.name} className="w-full mb-2" />
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-600">Price: ${product.price}</p>
          <button
            className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded"
            onClick={() => setSelectedProduct(product)}
          >
            View Details
          </button>
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
