import { PropTypes } from "prop-types";
import Product from "./Product";

import "./ProductList.css";

function ProductList({ products, openProductModal }) {
  return (
    <div className="ProductList">
      {products.map((product) => (
        <Product product={product} key={product.id} openProductModal={() => openProductModal(product)} />
      ))}
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  openProductModal: PropTypes.func.isRequired,
};

export default ProductList;
