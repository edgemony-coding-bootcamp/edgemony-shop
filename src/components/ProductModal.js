import { PropTypes } from "prop-types";

import "./ProductModal.css";

function ProductModal({ isOpen, closeModal, product }) {
  return isOpen ? (
    <div className="ProductModal">
      <div className="overlay" onClick={() => closeModal()}></div>
      <div className="modal-content">
        <button onClick={() => closeModal()}>x</button>
        <img src={product.image} alt={product.title} />
        <div className="content">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>Price: {product.price}€</p>
        </div>
      </div>
    </div>
  ) : null;
}

ProductModal.propTypes = {
  product: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ProductModal;
