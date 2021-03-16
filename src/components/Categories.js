import React, { useState, useEffect } from "react";
import BtnCategory from "./BtnCategory";
import { fetchCategories } from "./../services/api";
import "./Categories.css";

function Categories({ selectedCategories, onSelectCategory }) {
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(false);

  //activeCategory(false)

  useEffect(() => {
    setLoading(true);
    fetchCategories()
      .then((res) => {
        setCategories(res);
        setLoading(false);
        console.log("categories", categories);
      });
  }, []);

  
  return !isLoading ? (
    <>
      <div className="navBarCategories">
        {/* <SearchProduct /> */}
        {categories.map((category) => {
          return (
            <>
              <BtnCategory
                key={category}
                name={category}
                selectedCategories={selectedCategories}
                onSelectCategory={onSelectCategory}
              />
            </>
          );
        })}
        {/* {productsActive ?
            changeProductsRender(productsActive[0]):changeProductsRender(products)
          } */}
      </div>
    </>
  ) : (
    <></>
  );
}

export default Categories;
