import React,{useState,useEffect}from "react";
import { fetchProduct } from "./../services/api";
import {useParams} from "react-router-dom";

function Product() {
  let { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct(productId).then((product) => {
      setProduct(product);
    });
  }, [productId]);

  return (
    <div>
      {product ? (
        <div className="content">
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          {/* <button type="button" className="addToCart" onClick={toggleCart}>
            {inCart ? "Remove to Cart -" : "Add to Cart +"}
          </button> */}
          <br />
          <br />
          <hr />
          <div className="price">
            <small>Price:</small> {product.price.toFixed(2)}€
          </div>
        </div>
      ) : <>Loading...</>}
    </div>
  );
}

export default Product;
