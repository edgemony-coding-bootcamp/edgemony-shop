import { useState } from "react";
import { PropTypes } from "prop-types";
import ProductModal from "./ProductModal";

import "./Product.css";

function Product({ product }) {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <article className="Product">
      <img src={product.image} alt={product.title} />
      <div className="content">
        <h1>{product.title}</h1>
        <p>Price: {product.price}€</p>
      </div>
      <button onClick={() => setModalOpen(true)}>View details</button>
      <ProductModal
        isOpen={isModalOpen}
        product={product}
        closeModal={() => setModalOpen(false)}
      />
    </article>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
