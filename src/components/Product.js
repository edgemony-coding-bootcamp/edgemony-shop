import { PropTypes } from "prop-types";

import "./Product.css";

function Product({ product }) {
  return (
    <article className="Product">
      <img src={product.image} alt={product.title} />
      <div className="content">
        <h1>{product.title}</h1>
        <p>Price: {product.price}€</p>
      </div>
      <button>View details</button>
    </article>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
