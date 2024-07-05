// ProductModal.jsx
import PropTypes from 'prop-types';

const ProductModal = ({ product, quantity, setQuantity, handleAddQuantity, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>{product.name}</h3>
        <img src={product.pic} alt={product.name} width="100" />
        <p>{product.review}</p>
        <p>Rating: {product.rating} / 5</p>
        <p>${product.price}</p>
        <div>
          <button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
        <button onClick={handleAddQuantity}>Add to Cart</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

ProductModal.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    pic: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
  quantity: PropTypes.number.isRequired,
  setQuantity: PropTypes.func.isRequired,
  handleAddQuantity: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProductModal;
