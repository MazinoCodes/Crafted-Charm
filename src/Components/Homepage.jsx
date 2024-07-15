import PropTypes from 'prop-types';
import ProductList from '../Pages/ProductList';
import Footer from './Footer';
import Contact from './Contact';
import Navbar from './Navbar';
const Homepage = ({ products, addToCart }) => {

  return (
    <div className="bg-white flex flex-col gap-15 w-[100vw] mx-auto  phone:gap-10   tablet:gap-5">
      <div className='mt-4 ml-9 phone:ml-2 tablet:mr-4'>
      <Navbar />

      </div>
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
