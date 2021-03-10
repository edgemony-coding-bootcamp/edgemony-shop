import { PropTypes } from "prop-types";

import "./ModalProduct.css";

function ModalProduct({
  content,
  closeModal,
  isOpen,
  inCart,
  addToCart,
  removeFromCart,
}) {
  const toggleCart = () => {
    if (inCart) {
      removeFromCart(content.id);
    } else {
      addToCart(content.id);
    }
  };
  return (
    <div className={`ModalProduct ${isOpen ? `isOpen` : ""}`}>
      <div className="overlay" onClick={closeModal} />
      <div className="body">
        <button
          onClick={closeModal}
          title="close product modal"
          className="close"
        >
          ×
        </button>
        {!!content ? (
          <div className="content">
            <img src={content.image} alt={content.title} />
            <h2>{content.title}</h2>
            <p>{content.description}</p>
            <button type="button" className="addToCart" onClick={toggleCart}>
              {inCart ? "Remove to Cart -" : "Add to Cart +"}
            </button>
            <br />
            <br />
            <hr />
            <div className="price">
              <small>Price:</small> {content.price}€
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

ModalProduct.propTypes = {
  product: PropTypes.object,
  closeModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  inCart: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default ModalProduct;
