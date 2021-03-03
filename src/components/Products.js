import PropTypes from "prop-types";
import CardProduct from "./CardProduct";
import "./Products.css";

function Products(props) {
  return (
    <main className="Products">
      <div className="wrapProducts">
        {props.products.map((item) => {
          return (
            <>
              <CardProduct
                key={item.id}
                product={item}
               
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
