import { useState, useEffect } from 'react';

import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import ProductModal from "./components/ProductModal";

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

  // API data logic
  const [ products, setProducts ] = useState([])
  const [ isLoading, setIsLoading] = useState(false)
  const [ apiError, setApiError] = useState('')
  const [ retry, setRetry ] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      const hasError = Math.random() > 0.5
      if (!hasError) {
        setProducts(data)
        setIsLoading(false)
        setApiError('')
      } else {
        throw new Error('Product server API call response error')
      }
    })
    .catch((err) => {
      setApiError(err.message)
      setIsLoading(false)
    })
  }, [ retry ])

  return (
    <div className="App">
      <Header logo={data.logo} title={data.title} />
      <Hero
        title={data.title}
        description={data.description}
        cover={data.cover}
      />
      { isLoading
        ? <div>loading data...</div> 
        : !apiError && <ProductList products={products} openProductModal={openProductModal}/>
          
      }
      { apiError && (
        <div>
          <span>{ apiError }</span>
          <button type="button" onClick={() => setRetry(!retry)}>Retry</button>
        </div>
      )}
      <ProductModal isOpen={ modalIsOpen } content={productInModal} closeModal={closeModal} />
    </div>
  );
}

export default App;
