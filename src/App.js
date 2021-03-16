import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
//import Products from "./components/Products";
import Footer from "./components/Footer";
import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import ErrorBanner from "./components/ErrorBanner";
//import NavBar from "./components/NavBar";
import WrapProducts from "./components/WrapProducts";
import { fetchProducts, fetchCatogories } from "./services/api";
import ModalSidebar from "./components/ModalSidebar";
import ModalBodyCenter from "./components/ModalBodyCenter";
import Modal from "./components/Modal";
import calcTotalPrice from "./services/utility";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Page404 from "./pages/Page404";
import Product from "./pages/Product";
import Home from "./pages/Home";

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
  const [productInModal, setProductInModal] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isOpenModalCart, setOpenModalCart] = useState(false);

  function openProductModal(product) {
    console.log(product);
    setProductInModal(product);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
    setTimeout(() => {
      setProductInModal(null);
    }, 500);
  }

  /***********END MODAL LOGIC****************** */

  /***** cart logic *****/
  const cartProducts = cart.map((cartItem) => {
    const { price, image, title, id } = [].find(
      (p) => p.id === cartItem.id
    );
    return { price, image, title, id, quantity: cartItem.quantity };
  });

  const cartTotal = calcTotalPrice(cartProducts); //function imported

  function openModalCart() {
    setOpenModalCart(true);
  }

  function closeModalCart() {
    setOpenModalCart(false);
  }
  function isInCart(product) {
    return product != null && cart.find((p) => p.id === product.id) != null;
  }
  function addToCart(productId) {
    setCart([...cart, { id: productId, quantity: 1 }]);
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
        <Header
          logo={data.logo}
          cart={cart}
          totalCart={cartTotal}
          openModal={openModalCart}
        />
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:productId">
          <Product />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
