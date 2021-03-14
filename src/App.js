import { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import ProductList from "./components/ProductList";
import Modal from "./components/Modal";
import ErrorBanner from "./components/ErrorBanner";
import Cart from "./components/Cart";
import { fetchProducts, fetchCatogories } from "./services/api";
import ModalSidebar from "./components/ModalSidebar";
import ProductDetail from "./components/ProductDetail";

const data = {
  title: "Edgemony Shop",
  description: "A fake e-commerce with a lot of potential",
  logo:
    "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
};

function App() {
  // Modal logic
  const [productInModal, setProductInModal] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);

  function openModalProduct(product) {
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

  useEffect(() => {
    if (modalIsOpen || isCartOpen) {
      document.body.style.height = `100vh`;
      document.body.style.overflow = `hidden`;
    } else {
      document.body.style.height = ``;
      document.body.style.overflow = ``;
    }
  }, [modalIsOpen, isCartOpen]);

  // API data logic
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [retry, setRetry] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setApiError("");
    Promise.all([fetchProducts(), fetchCatogories()])
      .then(([products, categories]) => {
        setProducts(products);
        setCategories(categories);
      })
      .catch((err) => setApiError(err.message))
      .finally(() => setIsLoading(false));
  }, [retry]);

  // Cart Logic
  const [cart, setCart] = useState([]);
  const cartProducts = cart.map((cartItem) => {
    const { price, image, title, id } = products.find(
      (p) => p.id === cartItem.id
    );
    return { price, image, title, id, quantity: cartItem.quantity };
  });
  const cartTotal = cartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
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

  return (
    <div className="App">
      <Header
        logo={data.logo}
        title={data.title}
        cartTotal={cartTotal}
        cartSize={cart.length}
        products={products}
        onCartClick={() => setCartOpen(true)}
      />
      <Hero
        title={data.title}
        description={data.description}
        cover={data.cover}
      />
      <main>
        {isLoading ? (
          <Loader />
        ) : apiError ? (
          <ErrorBanner
            message={apiError}
            close={() => setApiError("")}
            retry={() => setRetry(!retry)}
          />
        ) : (
          <ProductList
            products={products}
            categories={categories}
            openModalProduct={openModalProduct}
          />
        )}
      </main>
      <ModalSidebar
        title="Cart"
        isOpen={isCartOpen}
        close={() => setCartOpen(false)}
      >
        <Cart
          products={cartProducts}
          totalPrice={cartTotal}
          removeFromCart={removeFromCart}
          setProductQuantity={setProductQuantity}
        />
      </ModalSidebar>
      <Modal isOpen={modalIsOpen} close={closeModal}>
        {productInModal && (
          <ProductDetail
            product={productInModal}
            inCart={isInCart(productInModal)}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        )}
      </Modal>
    </div>
  );
}

export default App;
