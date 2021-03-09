

import calcTotalPrice from "../services/utility"
export default function HeaderCart({ cart , openModal }) {

  return (
    <div>
      <span id="totalPrice">Total Price: € {calcTotalPrice(cart).toFixed(2)}</span>
      <button type="button" onClick={()=>openModal()}>
        <i id="icon-cart" class="fa fa-shopping-cart"></i>
        <span id="numItemsCart">{cart.length}</span>
      </button>
    </div>
  );
}
