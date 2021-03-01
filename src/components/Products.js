import PropTypes from "prop-types";
import CardProduct from "./CardProduct";
import "./Products.css";

function Products(props) {
  return (
    <main className="Products">
      <div className="wrapProducts">
        {props.products.map((product, index) => {
          return (
            <>
              <CardProduct
                title={product.title}
                image={product.image}
                price={product.price}
              />
            </>
          );
        })}
      </div>
    </main>
  );
}

Products.propTypes = {
  products: PropTypes.array.isRequired,
};

export default Products;
