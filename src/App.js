import "./App.css";
import Header from "./components/Header";
import React, { useState, useEffect } from "react";

import calcTotalPrice from "./services/utility";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Page404 from "./pages/Page404";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const fakeProducts = require("./mocks/data/products.json");
const currentYear = new Date().getFullYear();

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
  const [cart, setCart] = useState([]);
  /***********MODAL LOGIC********* */

  /***********END MODAL LOGIC****************** */

  /***** cart logic *****/

  const cartTotal = calcTotalPrice(cart); //function imported


  function isInCart(product) {
    return product != null && cart.find((p) => p.id === product.id) != null;
  }
  function addToCart(product) {
    setCart([...cart, { ...product, quantity: 1 }]);
  }
  function removeFromCart(productId) {
    setCart(cart.filter((product) => product.id !== productId));
  }
  function setProductQuantity(productId, quantity) {
    setCart(
      cart.map((product) =>
        product.id === productId ? { ...product, quantity } : product
      )
    );
  }

  /*********end cart logic *******/

  return (
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
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:productId">
          <Product
            inCart={isInCart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
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
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
