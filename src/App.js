import { useState } from 'react';

import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import ProductModal from "./components/ProductModal";

const fakeProducts = require("./mocks/data/products.json");

const data = {
  title: "Edgemony Shop",
  description: "A fake e-commerce with a lot of potential",
  logo:
    "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  products: fakeProducts,
};

function App() {
  const [ productInModal, setProductInModal ] = useState(null)
  const [ modalIsOpen, setModalIsOpen ] = useState(false)

  function openProductModal(product) {
    console.log(product)
    setProductInModal(product)
    setModalIsOpen(true)
  }

  function closeModal() {
    setModalIsOpen(false)
    setTimeout(() => {
      setProductInModal(null)
    }, 500)
  }
  return (
    <div className="App">
      <Header logo={data.logo} title={data.title} />
      <Hero
        title={data.title}
        description={data.description}
        cover={data.cover}
      />
      <ProductList products={data.products} openProductModal={openProductModal}/>
      <ProductModal isOpen={ modalIsOpen } content={productInModal} closeModal={closeModal} />
    </div>
  );
}

export default App;
