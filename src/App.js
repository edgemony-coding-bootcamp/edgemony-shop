import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Page404 from "./pages/Page404";
import Header from "./components/Header";
import Modal from "./components/Modal";
import ModalBodySidebar from "./components/ModalBodySidebar";
import Cart from "./components/Cart";

const data = {
  title: "Edgemony Shop",
  description: "A fake e-commerce with a lot of potential",
  logo:
    "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
};

function useModal() {
  const [isModalOpen, setModalOpen] = useState(false);
  function openModal() {
    setModalOpen(true);
  }
  function closeModal() {
    setModalOpen(false);
  }

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.height = `100vh`;
      document.body.style.overflow = `hidden`;
    } else {
      document.body.style.height = ``;
      document.body.style.overflow = ``;
    }
  }, [isModalOpen]);

  return [isModalOpen, openModal, closeModal];
}

function App() {
  // Modal logic
  const [isCartModalOpen, openCartModal, closeCartModal] = useModal();

  // Cart Logic
  const [cart, setCart] = useState([]);
  const cartTotal = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
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

  return (
    <Router>
      <div className="App">
        <Header
          logo={data.logo}
          title={data.title}
          cartTotal={cartTotal}
          cartSize={cart.length}
          onCartClick={openCartModal}
        />
        <Modal isOpen={isCartModalOpen} close={closeCartModal}>
          <ModalBodySidebar
            title="Cart"
            isOpen={isCartModalOpen}
            close={closeCartModal}
          >
            <Cart
              products={cart}
              totalPrice={cartTotal}
              removeFromCart={removeFromCart}
              setProductQuantity={setProductQuantity}
            />
          </ModalBodySidebar>
        </Modal>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/product/:productId">
            <Product addToCart={addToCart} removeFromCart={removeFromCart} isInCart={isInCart}  />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
