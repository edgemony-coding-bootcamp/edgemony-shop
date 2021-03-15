import PropTypes from "prop-types";
import CardProduct from "./CardProduct";
import "./Products.css";

function Products({ products, openProductModal}) {
  return (
    <main className="Products">
      <div className="wrapProducts">
        {products.map((item) => {
          return (
            <>
              <CardProduct
                key={item.id}
                product={item} 
                openProductModal={() => openProductModal(item)} 
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
