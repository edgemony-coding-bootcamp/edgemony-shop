export default function calcTotalPrice(cart) {
  return cart.reduce((acc, product) => (acc += product.price), 0);
}

const formatter = new Intl.NumberFormat("it-IT", {
  style: "currency",
  currency: "EUR",
});

export  function formatPrice(price) {
  return formatter.format(price);
}
