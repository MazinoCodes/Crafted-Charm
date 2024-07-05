import PropTypes from 'prop-types';
import Hero from '../Sections/Hero';
import ProductList from '../Sections/ProductList';

const Homepage = ({ products, addToCart }) => {

  return (
    <div className="bg-[#F5F5F5] flex flex-col gap-28">
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
