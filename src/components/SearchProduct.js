import "./SearchProduct.css"
import React, { useState,useEffect } from "react";

function SearchProduct({ products, productsRender }) {
  const [inputUser, setInput] = useState("");
  const [productsSearch, setProductsSearch] = useState([]);
  const [isActiveSearch,setActiveSearch]=useState(false)

  function search(e) {
    console.log(e.target.value);
    const target = e.target.value;
    setInput(target);
   
  }

  useEffect(() => {
    const results=filterProductsSearch()
    productsRender(results)
  }, [inputUser])

  function filterProductsSearch() {
    return products.filter((product) => {
      return product.title.toUpperCase().includes(inputUser.toUpperCase());
    });
  }

  return (
    <div className="searchInput">
      <input onChange={search} type="text" placeholder="search product"></input>
    </div>
  );
}

export default SearchProduct;
