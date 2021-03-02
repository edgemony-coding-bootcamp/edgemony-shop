import { PropTypes } from "prop-types";
import Product from "./Product";

import "./ProductList.css";

function ProductList({ products }) {
  return (
    <div className="ProductList">
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
