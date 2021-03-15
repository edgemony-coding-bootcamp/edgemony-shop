

import { formatPrice } from "../services/utility";
export default function HeaderCart({ cart , openModal, cartTotal}) {
  console.log("cartTotal",cartTotal);
  const nItems=cart.length;
  return (
    <div className="HeaderCart">
     { !! nItems && <span id="totalPrice">Total Price: € {formatPrice(cartTotal)}</span>}
      <button type="button" onClick={()=>openModal()}>
        <i id="icon-cart" class="fa fa-shopping-cart"></i>
        <span id="numItemsCart">{nItems}</span>
      </button>
    </div>
  );
}
