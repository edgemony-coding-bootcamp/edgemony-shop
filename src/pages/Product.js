import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import {
  useParams
} from "react-router-dom";

import { fetchProduct } from "./../services/api";
import Loader from "./../components/Loader";
import ErrorBanner from "./../components/ErrorBanner";
import './Product.css'

function Product({ addToCart, removeFromCart, isInCart }) {
  let { productId } = useParams();

  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [retry, setRetry] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setApiError("");
    fetchProduct(productId)
      .then((product) => {
        setProduct(product);
      })
      .catch((err) => setApiError(err.message))
      .finally(() => setIsLoading(false));
  }, [productId, retry])

  const toggleCart = () => {
    if (isInCart(product)) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };


  return (
    <main>
      {isLoading ? (
        <Loader />
      ) : apiError ? (
        <ErrorBanner
          message={apiError}
          close={() => setApiError("")}
          retry={() => setRetry(!retry)}
        />
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
  )
}

Product.propTypes = {
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  isInCart: PropTypes.func.isRequired,
};


export default Product