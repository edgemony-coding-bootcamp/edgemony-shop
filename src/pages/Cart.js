import React from 'react'
import CartProduct from "./../components/CartProduct"
import "./../components/CartModal.css";
import { Link } from "react-router-dom";
import "./Cart.css"

import { formatPrice } from "../services/utility";

function Cart({products, removeFromCart, setProductQuantity, totalPrice}) {
    return (
        <div className="Cart">
        {products.map((product) => {
          console.log("product", product);
          return (
            <>
             <CartProduct product={product} removeFromCart={removeFromCart} setProductQuantity={setProductQuantity}/>
            </>
          );
        })}
        <span>Total: {formatPrice(totalPrice.toFixed(2))}</span>
        <button>
          <Link to="/checkout">
            Go to Checkout
          </Link>
        </button>
      </div>
    )
}

export default Cart
