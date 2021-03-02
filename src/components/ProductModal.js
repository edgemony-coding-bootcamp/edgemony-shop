import { PropTypes } from "prop-types";

import "./ProductModal.css";

function ProductModal({ content, closeModal, isOpen }) {
  return (
    <div className={`ProductModal ${ isOpen ? `isOpen` : '' }`}>
      <div className="overlay" onClick={closeModal} />
      <div className="body">
        <button onClick={closeModal} title="close product modal">×</button>
        { !!content ? (
          <div className="content">
            <img src={content.image} alt={content.title} />
            <h1>{content.title}</h1>
            <p>{content.description}</p>
            <hr />
            <div className="price"><small>Price:</small> {content.price}€</div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

ProductModal.propTypes = {
  product: PropTypes.object,
  closeModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default ProductModal;
