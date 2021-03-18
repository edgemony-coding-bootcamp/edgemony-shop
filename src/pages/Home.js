import Hero from "./../components/Hero";
//import Products from "./components/Products";
import Footer from "./../components/Footer";
import React, { useState, useEffect } from "react";
import Loading from "./../components/Loading";
import ErrorBanner from "./../components/ErrorBanner";
//import NavBar from "./components/NavBar";
import WrapProducts from "./../components/WrapProducts";
import { fetchProducts, fetchCategories } from "./../services/api";

const fakeProducts = require("./../mocks/data/products.json");
const currentYear = new Date().getFullYear();
let cache;

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

function Home({isLoading,setLoad,isErrorAPI,setErrorAPI,retry,setRetry}) {
  /******logic fetch */
  const [dataAPI, setDataAPI] = useState(cache ? cache.products : []);
  const [categories, setCategories] = useState(cache ? cache.categories : []);

  useEffect(() => {
    if (cache !== undefined) {
      return;
    } else {
      setLoad(!isLoading);
      setErrorAPI("");
      Promise.all([fetchProducts(), fetchCategories()])
        .then(([products, categories]) => {
          setDataAPI(products);
          setCategories(categories);
          cache = { products, categories };
                })
        .catch((err) => setErrorAPI(err.message))
        .finally(() => setLoad(!isLoading));
    }
  }, [retry]);

  // function changeStateError() {
  //   setRetry=true;
  // }
  /********** END LOGIC FETCH********/

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
              <WrapProducts products={dataAPI} />
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
      {isErrorAPI && (()=>setRetry(true))
      }
    </div>
  );
}

export default Home;
