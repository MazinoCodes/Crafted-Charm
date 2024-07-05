import PropTypes from 'prop-types';
import Hero from '../Sections/Hero';
import ProductList from '../Sections/ProductList';

const Homepage = ({ products, addToCart }) => {

  return (
    <div className="bg-[#F5F5F5] flex flex-col gap-28  px-6">
      <Hero/>
      <ProductList products={products} addToCart={addToCart}  />
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
