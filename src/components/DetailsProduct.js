import "./DetailsProduct.css";
import { useState, useEffect } from "react";

export default function DetailsProduct(props) {
  const { title, image, price, description } = props.data;
  const [isInCart, setInCart] = useState(false);
  console.log(props.data);
  console.log("isInCart",isInCart)


  function addInCart() {
    props.setCart((previousState) => [...previousState, { ...props.data }]);
    setInCart(!isInCart)
  }
  return  (
    <div className="modal">
      <div className="modal__overlay" onClick={() => props.isOpen()}>
        <div className="modal__body">
          <button
            type="button"
            onClick={() => props.isOpen()}
            className="btnCloseModal"
          >
            X
          </button>
          <h2>{title}</h2>
          <img src={image} alt="product" />
          <p>{description}</p>
          <hr></hr>
          <br></br>
          <button disabled={isInCart} onClick={()=>addInCart()} id="btnAddProductToCart">
              Add to Cart
            </button>
          <span>Price: € {price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}
