import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import { useParams } from "react-router-dom";

import { fetchProduct } from "./../services/api";
import Loader from "./../components/Loader";
import "./Product.css";

function Product({ addToCart, removeFromCart, isInCart, onError }) {
  let { productId } = useParams();

  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [retry, setRetry] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    onError(undefined);
    fetchProduct(productId)
      .then((product) => {
        setProduct(product);
      })
      .catch(({ message }) =>
        onError({ message, retry: () => setRetry(!retry) })
      )
      .finally(() => setIsLoading(false));
  }, [productId, onError, retry]);

  const toggleCart = () => {
    if (isInCart(product)) {
      removeFromCart(product.id);
    } else {
      addToCart(product.id);
    }
  };

  return (
    <main>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="ProductDetail">
          <img src={product.image} alt={product.title} />
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <button type="button" className="addToCart" onClick={toggleCart}>
            {isInCart(product) ? "Remove to Cart -" : "Add to Cart +"}
          </button>
          <br />
          <br />
          <hr />
          <div className="price">
            <small>Price:</small> {product.price}€
          </div>
        </div>
      )}
    </main>
  );
}

Product.propTypes = {
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
  isInCart: PropTypes.func.isRequired,
};

export default Product;
