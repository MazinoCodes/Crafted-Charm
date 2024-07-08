import PropTypes from 'prop-types';
import Hero from '../Components/Hero';
import ProductList from '../Components/ProductList';
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';

const Homepage = ({ products, addToCart }) => {

  return (
    <div className="bg-white flex flex-col gap-15  w-[100vw] mx-auto  phone:gap-16  tablet:gap-16">
      <Hero/>
      <div className='w-[100vw] bg-white flex flex-col gap-32'>
      <ProductList products={products} addToCart={addToCart}  />
    <Contact/>
      </div>

      <Footer/>
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
