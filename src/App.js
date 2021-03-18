import { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { postItemToCart, deleteItemFromCart, fetchCart } from "./services/api";

import "./App.css";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Page404 from "./pages/Page404";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import ErrorBanner from "./components/ErrorBanner";

const data = {
  title: "Edgemony Shop",
  description: "A fake e-commerce with a lot of potential",
  logo:
    "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
};

function App() {
  // Cart Logic
  const [cart, setCart] = useState(undefined);
  const cartTotal =
    cart?.items.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    ) || 0;
  function isInCart(product) {
    return (
      product != null && cart?.items.find((p) => p.id === product.id) != null
    );
  }
  async function updateCart(fn, ...apiParams) {
    try {
      const cart = await fn(...apiParams);
      setCart(cart);
    } catch (error) {
      console.error(`${fn.name} API call response error! ${error.message}`);
    }
  }
  function addToCart(productId) {
    if (cart) {
      updateCart(postItemToCart, cart.id, productId, 1);
    }
  }
  function removeFromCart(productId) {
    if (cart) {
      updateCart(deleteItemFromCart, cart.id, productId);
    }
  }
  function setProductQuantity(productId, quantity) {
    if (cart) {
      updateCart(postItemToCart, cart.id, productId, quantity);
    }
  }

  const [apiErrors, setApiErrors] = useState({});
  const cartError = apiErrors.cart;
  const errorKey = Object.keys(apiErrors).find((key) => apiErrors[key] != null);
  const setProductListError = useCallback(
    (error) => setApiErrors((errors) => ({ ...errors, productList: error })),
    []
  );
  const setProductError = useCallback(
    (error) => setApiErrors((errors) => ({ ...errors, product: error })),
    []
  );
  const setCartError = useCallback(
    (error) => setApiErrors((errors) => ({ ...errors, cart: error })),
    []
  );

  const [isLoading, setIsLoading] = useState(false);
  const [retry, setRetry] = useState(false);
  // Initial cart fetch from API
  useEffect(() => {
    const cartIdFromLocalStorage = localStorage.getItem("edgemony-cart-id");
    // We fetch only of we have a Cart ID available
    if (!cartIdFromLocalStorage) {
      return;
    }

    setIsLoading(true);
    setCartError(undefined);
    async function fetchCartInEffect() {
      try {
        const cart = await fetchCart(cartIdFromLocalStorage);
        setCart(cart);
      } catch ({ message }) {
        setCartError({ message, retry: () => setRetry(!retry) });
      } finally {
        setIsLoading(false);
      }
    }
    fetchCartInEffect();
  }, [retry, setCartError]);

  return (
    <Router>
      <div className="App">
        <Header
          logo={data.logo}
          title={data.title}
          cartTotal={cartTotal}
          cartSize={cart?.items.length || 0}
          showCart={!isLoading && !cartError}
        />

        <Switch>
          <Route exact path="/">
            <Home onError={setProductListError} />
          </Route>
          <Route path="/product/:productId">
            <Product
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              isInCart={isInCart}
              onError={setProductError}
            />
          </Route>
          <Route path="/cart">
            <Cart
              products={cart?.items || []}
              totalPrice={cartTotal}
              removeFromCart={removeFromCart}
              setProductQuantity={setProductQuantity}
              isLoading={isLoading}
            />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>

        {errorKey ? (
          <ErrorBanner
            message={apiErrors[errorKey].message}
            close={() => setApiErrors({ ...apiErrors, [errorKey]: undefined })}
            retry={apiErrors[errorKey].retry}
          />
        ) : null}
      </div>
    </Router>
  );
}

export default App;
