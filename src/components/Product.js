import { PropTypes } from "prop-types";

import "./Product.css";

function Product({ product, openModalProduct }) {
  return (
    <article className="Product">
      <img src={product.image} alt={product.title} />
      <div className="content">
        <h1>{product.title}</h1>
        <p>Price: {product.price}€</p>
      </div>
      <button onClick={openModalProduct}>View details</button>
    </article>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  openModalProduct: PropTypes.func.isRequired,
};

export default Product;
