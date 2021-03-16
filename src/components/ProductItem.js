import { PropTypes } from "prop-types";
import {
  Link
} from "react-router-dom";


import "./ProductItem.css";

function ProductItem({ product }) {
  return (
    <article className="ProductItem">
      <img src={product.image} alt={product.title} />
      <div className="content">
        <h1>{product.title}</h1>
        <p>Price: {product.price}€</p>
      </div>
      <Link to={`/product/${product.id}`}>View details</Link>
    </article>
  );
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItem;
