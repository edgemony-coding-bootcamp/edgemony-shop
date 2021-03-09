export default function calcTotalPrice(cart) {
    return ( cart.reduce((acc, product) => (acc += product.price), 0));
  }
