import React from 'react'
import CartProduct from "./CartProduct"
import "./CartModal.css";

import { formatPrice } from "../services/utility";

function Cart({products, removeFromCart, setProductQuantity, totalPrice}) {
    return (
        <div>
        {products.map((product) => {
          console.log("product", product);
          return (
            <>
             <CartProduct product={product} removeFromCart={removeFromCart} setProductQuantity={setProductQuantity}/>
            </>
          );
        })}
        <span>Total: {formatPrice(totalPrice.toFixed(2))}</span>
      </div>
    )
}

export default Cart
