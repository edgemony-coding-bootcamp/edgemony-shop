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
  const [dataAPI, setDataAPI] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isErrorAPI, setErrorAPI] = useState(false);
  const [retry, setRetry] = useState(false);
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
  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((res) => {
        const randomError = Math.random() > 0.5;
        if (!randomError) {
          setDataAPI(res);
          setLoading(false);
          setErrorAPI("");
        } else {
          throw new Error("API CALL ERROR!!");
        }
      })
      .catch((error) => {
        setErrorAPI(error.message);
        setLoading(false);
      });
  }, [retry]);

  useEffect(() => {
    setLoading(true);
    setErrorAPI("");
    Promise.all([fetchProducts(), fetchCatogories()])
      .then(([products, categories]) => {
        setDataAPI(products);
        //categories
      })
      .catch((err) => setErrorAPI(err.message))
      .finally(() => setLoading(false));
  }, [retry]);

  function changeStateError() {
    setRetry(!retry);
  }

  /***** cart logic *****/
  const cartProducts = cart.map((cartItem) => {
    const { price, image, title, id } = dataAPI.find(
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
    <div className="App">
      <Header
        logo={data.logo}
        cart={cart}
        totalCart={cartTotal}
        openModal={openModalCart}
      />
      {!isLoading ? (
        <>
          {!isErrorAPI && (
            <>
              <Modal isOpen={isOpenModalCart} close={closeModalCart}>
                <ModalSidebar
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
                </ModalSidebar>
              </Modal>
               <Modal isOpen={modalIsOpen} closeModal={closeModal}> 
                <ModalBodyCenter 
                isOpen={modalIsOpen} 
                closeModal={closeModal}>
                  <ProductDetail
                    content={productInModal}
                    inCart={isInCart(productInModal)}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                  />
                </ModalBodyCenter>
              </Modal> 
              <Hero
                title={data.title}
                image={data.cover}
                description={data.description}
              />
              <WrapProducts
                products={dataAPI}
                openProductModal={openProductModal}
              />
              <Footer
                logo={data.logo}
                company={data.company}
                year={currentYear}
              />
            </>
          )}
        </>
      ) : (
        <>
          <Loading />
        </>
      )}
      {isErrorAPI && (
        <ErrorBanner changeStateError={changeStateError} error={isErrorAPI} />
      )}
    </div>
  );
}

export default App;
