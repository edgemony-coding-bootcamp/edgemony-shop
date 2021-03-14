import { PropTypes } from "prop-types";

import "./ProductDetail.css";

function ProductDetail({ product, inCart, addToCart, removeFromCart }) {
  const toggleCart = () => {
    if (inCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product.id);
    }
  };
  return (
    <div className="ProductDetail">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <button type="button" className="addToCart" onClick={toggleCart}>
        {inCart ? "Remove to Cart -" : "Add to Cart +"}
      </button>
      <br />
      <br />
      <hr />
      <div className="price">
        <small>Price:</small> {product.price}€
      </div>
    </div>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired,
  inCart: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default ProductDetail;
