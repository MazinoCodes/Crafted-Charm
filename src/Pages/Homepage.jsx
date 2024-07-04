//import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
//import ProductList from './ProductList';
import PropTypes from 'prop-types';
import Hero from '../Sections/Hero';
//import ProductModal from './ProductModal';

const Homepage = ({ products, addToCart }) => {
 // const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="bg-[#F5F5F5]">
     {/* <h1>Welcome to the Online Store</h1>
      <ProductList products={products} addToCart={addToCart} setSelectedProduct={setSelectedProduct} />
      <nav>
        <Link to="/cart">View Cart</Link>
      </nav>
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          addToCart={addToCart}
        />
      )}*/}
    <Hero/>
    </div>
  );
};

Homepage.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Homepage;
