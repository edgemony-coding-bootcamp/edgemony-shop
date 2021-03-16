import { Link } from "react-router-dom";


import Hero from "./../components/Hero";
//import Products from "./components/Products";
import Footer from "./../components/Footer";
import React, { useState, useEffect } from "react";
import Loading from "./../components/Loading";
import ErrorBanner from "./../components/ErrorBanner";
//import NavBar from "./components/NavBar";
import WrapProducts from "./../components/WrapProducts";
import { fetchProducts, fetchCategories } from "./../services/api";
import ModalSidebar from "./../components/ModalSidebar";
import ModalBodyCenter from "./../components/ModalBodyCenter";
import Modal from "./../components/Modal";
import Cart from "./../components/Cart";
import ProductDetail from "./../components/ProductDetail";

const fakeProducts = require("./../mocks/data/products.json");
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

function Home() {

    /******logic fetch */
  const [dataAPI, setDataAPI] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isErrorAPI, setErrorAPI] = useState(false);
  const [retry, setRetry] = useState(false);
  const [categories,setCategories]=useState([])

  useEffect(() => {
    setLoading(true);
    setErrorAPI("");
    Promise.all([fetchProducts(), fetchCategories()])
      .then(([products, categories]) => {
        setDataAPI(products);
        setCategories(categories)
      })
      .catch((err) => setErrorAPI(err.message))
      .finally(() => setLoading(false));
  }, [retry]);

  function changeStateError() {
    setRetry(!retry);
  }
 /********** END LOGIC FETCH********/ 

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

//   function isInCart(product) {
//     return product != null && cart.find((p) => p.id === product.id) != null;
//   }
//   function addToCart(productId) {
//     setCart([...cart, { id: productId, quantity: 1 }]);
//   }
//   function removeFromCart(productId) {
//     setCart(cart.filter((product) => product.id !== productId));
//  }
  

  return (
      <div className="App">
        {!isLoading ? (
          <>
            {!isErrorAPI && (
              <>
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

export default Home;
