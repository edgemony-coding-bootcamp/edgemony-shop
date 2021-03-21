import "./App.css";
import Header from "./components/Header";
import React, { useState, useEffect } from "react";

import calcTotalPrice from "./services/utility";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Page404 from "./pages/Page404";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Loading from "./components/Loading";
import ErrorBanner from "./components/ErrorBanner";
import Checkout from "./pages/Checkout";

import {
  fetchCart,
  fetchAddToCart,
  fetchDeleteItemFromCart,
} from "./services/api";

const fakeProducts = require("./mocks/data/products.json");
const currentYear = new Date().getFullYear();
let cartId;
const data = {
  title: "Edgemony Shop",
  description: "A fake e-commerce with a lot of potential",
  logo:
    "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  company: "SZH Inc.",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  products: fakeProducts,
};

function App() {
  const [isLoading, setLoading] = useState(false);
  const [isErrorAPI, setErrorAPI] = useState(false);
  const [retry, setRetry] = useState(false);
  const [newCart,setNewCart]=useState("");
  const [cart, setCart] = useState([]);
  /***********MODAL LOGIC********* */

  /***********END MODAL LOGIC****************** */

  /***** cart logic *****/

  const cartTotal = calcTotalPrice(cart); //function imported

  function isInCart(product) {
    return product != null && cart.find((p) => p.id === product.id) != null;
  }
  // function addToCart(product) {
  //   setCart([...cart, { ...product, quantity: 1 }]);
  // }
  // function removeFromCart(productId) {
  //   setCart(cart.filter((product) => product.id !== productId));
  // }
  // function setProductQuantity(productId, quantity) {
  //   setCart(
  //     cart.map((product) =>
  //       product.id === productId ? { ...product, quantity } : product
  //     )
  //   );
  // }
  async function updateCart(fn, ...apiParams) {
    try {
      const cartObj = await fn(...apiParams);
      setCart(cartObj.items);
    } catch (error) {
      console.error(`${fn.name} API call response error! ${error.message}`);
    }
  }
  function addToCart(productId) {
    updateCart(fetchAddToCart, cartId, productId, 1);
  }
  function removeFromCart(productId) {
    updateCart(fetchDeleteItemFromCart, cartId, productId);
  }
  function setProductQuantity(productId, quantity) {
    updateCart(fetchAddToCart, cartId, productId, quantity);
  }

//fetch cart
  useEffect(() => {
    const cartIdFromLocalStorage = localStorage.getItem("edgemony-cart-id");
    if (cartIdFromLocalStorage) {
      async function fetchCartEffect() {
        try {
          setLoading(true);
          setErrorAPI("");
          const cartObj = await fetchCart(cartIdFromLocalStorage);
          setCart(cartObj.items);
          cartId = cartObj.id;
        } catch (error) {
          setErrorAPI(error.message);
        } finally {
          setLoading(false);
        }
      }
      fetchCartEffect();
    }
  }, [retry,newCart]);
  /*********end cart logic *******/

  return (
    <>
      <Router>
        <div className="App">
          <Header logo={data.logo} cart={cart} totalCart={cartTotal} />
        </div>
        {/* <ModalSidebar
                  isOpen={isOpenModalCart}
                  close={closeModalCart}
                  title="Cart"
                  >
                  <Cart
                  products={cartProducts}
                  removeFromCart={removeFromCart}
                  setProductQuantity={setProductQuantity}
                  totalPrice={cartTotal}
                  />
                </ModalSidebar> */}
        {!isLoading ? (
          <>
            {!isErrorAPI && (
              <>
                <Switch>
                  <Route exact path="/">
                    <Home
                      isLoading={isLoading}
                      setLoad={setLoading}
                      isErrorAPI={isErrorAPI}
                      setErrorAPI={setErrorAPI}
                      retry={retry}
                      setRetry={setRetry}
                    ></Home>
                  </Route>
                  <Route path="/products/:productId">
                    <Product
                      inCart={isInCart}
                      addToCart={addToCart}
                      removeFromCart={removeFromCart}
                      isLoading={isLoading}
                      setLoad={setLoading}
                      isErrorAPI={isErrorAPI}
                      setErrorAPI={setErrorAPI}
                      retry={retry}
                      setRetry={setRetry}
                    />
                  </Route>
                  <Route exact path="/cart">
                    <Cart
                      products={cart}
                      removeFromCart={removeFromCart}
                      setProductQuantity={setProductQuantity}
                      totalPrice={cartTotal}
                    />
                  </Route>
                  <Route exact path="/checkout">
                    <Checkout cartId={cartId} setNewCart={setNewCart}/>
                  </Route>
                  <Route path="*">
                    <Page404 />
                  </Route>
                </Switch>
              </>
            )}
          </>
        ) : (
          <>
            <Loading />
          </>
        )}
        {isErrorAPI && (
          <ErrorBanner
            changeStateError={() => setRetry(!retry)}
            error={isErrorAPI}
          />
        )}
      </Router>
    </>
  );
}

export default App;
