import React, { useState, useEffect } from "react";
import "./Categories.css";


function Categories({ products, changeProductsRender }) {
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(false);
  let renderProducts=[].push(products)


  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((res) => {
        setCategories(res);
        setLoading(false);
        console.log("categories", categories);
      });
  }, []);
  

  function getCategory(category) {
    const filterCategory = products.filter(
      (product) => product.category.toUpperCase() === category
    );
    return filterCategory;
  }
  
  function filterProductsOfCategory(ev, list) {
    const productOfCategory = getCategory(ev.target.innerText);
    renderProducts=productOfCategory
    console.log("productsOnClick",renderProducts)
    changeProductsRender(renderProducts)
    console.log("event",ev.target.innerText)
  }

  function filterProductsOfInput (){

  }
  return (
    !isLoading && (
      <>
        <div className="navBarCategories">
          {/* <SearchProduct /> */}
          {categories.map((category) => {
            return (
              <button
                key={category}
                type="button"
                onClick={(ev) => filterProductsOfCategory(ev, products)}
              >
                {category.toUpperCase()}
              </button>
            );
          })}
        </div>
      </>
    )
  );
}

export default Categories;
