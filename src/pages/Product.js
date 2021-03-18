import React, { useState, useEffect } from "react";
import { fetchProduct } from "./../services/api";
import { useParams } from "react-router-dom";
import Loading from "./../components/Loading";

function Product({
  addToCart,
  removeFromCart,
  inCart,
  isLoading,
  setLoading,
  isErrorAPI,
  setErrorAPI,
  retry,
  setRetry,
}) {
  let { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setLoading(true);
    setErrorAPI("");
    try {
      fetchProduct(productId).then((product) => {
        setProduct(product);
      });
    } catch (err) {
      setErrorAPI(err.message);
    } finally {
      setLoading(false);
    }
  }, [productId]);

  const toggleCart = () => {
    if (inCart(product)) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  return (
    <div>
      {!isLoading ? (
        <>
          {!isErrorAPI && (
            <>
              {product ? (
                <div className="content">
                  <img src={product.image} alt={product.title} />
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                  <button
                    type="button"
                    className="addToCart"
                    onClick={toggleCart}
                  >
                    {inCart(product) ? "Remove to Cart -" : "Add to Cart +"}
                  </button>
                  <br />
                  <br />
                  <hr />
                  <div className="price">
                    <small>Price:</small> {product.price.toFixed(2)}€
                  </div>
                </div>
              ) : (
                <></>
              )}
            </>
          )}
        </>
      ) : (
        <>
          <Loading />
        </>
      )}
    </div>
  );
}

export default Product;

/**      {product ? (
        <div className="content">
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <button type="button" className="addToCart" onClick={toggleCart}>
            {inCart(product) ? "Remove to Cart -" : "Add to Cart +"}
          </button>
          <br />
          <br />
          <hr />
          <div className="price">
            <small>Price:</small> {product.price.toFixed(2)}€
          </div>
        </div>
      ) : <>Loading...</>} */
