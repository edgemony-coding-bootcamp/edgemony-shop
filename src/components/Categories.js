import React, { useState, useEffect } from "react";
import "./Categories.css";
import Products from "./Products"

function Categories({ products }) {
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [renderProducts,setRenderProducts]=useState(products)

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
    setRenderProducts(productOfCategory)
  }
  return (
    !isLoading && (
      <>
        <div className="navBarCategories">
          {categories.map((category, index) => {
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
        <Products products={renderProducts}/>
      </>
    )
  );
}

export default Categories;
