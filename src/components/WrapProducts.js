import Categories from "./Categories";
import { useState,useEffect } from "react";
import RenderProducts from "./RenderProducts";
import SearchProduct from "./SearchProduct";
import "./WrapProducts.css";
import {useLocation,useHistory} from "react-router-dom"


function WrapProducts({ products, openProductModal }) {
  const [inputUser, setInputUser] = useState(false);
  //const [selectedCategories, setSelectedCategories] = useState([]);
  const location = useLocation();
  const history = useHistory();

  const searchParams=new URLSearchParams(location.search)
  const searchUser=searchParams.get("q")||"";
  console.log("location",location);
  console.log("searchParams",searchParams);


  
  // function searchInput(e) {
  //   console.log(e.target.value);
  //   const target = e.target.value;
  //   setInputUser(target.toUpperCase());
  // }
  function updateSearchTerm(term) {
    if (term) {
      searchParams.set("q",term);
      setInputUser(term)
    } else{
      searchParams.delete("q");
    }
    history.push({search:"?"+searchParams.toString()});
  }

  const selectedCategoriesParams=searchParams.get("categories")
  const selectedCategories=selectedCategoriesParams ? selectedCategoriesParams.split(","):[];

  console.log("searchTerm",searchUser);

  function updateCategories(categories) {
    const selectedParam=categories.join(",");
    if(categories.length===0){
      searchParams.delete("categories");
    }else {
      searchParams.set("categories",selectedParam);
    }
    history.push({search: "?"+searchParams.toString()});
  }
  const filteredProducts=products.filter((product)=>
  (inputUser) ?
  product.title.toUpperCase().indexOf(inputUser.toUpperCase())!==-1 && (selectedCategories.length===0 ||selectedCategories.includes(product.category) )
   : 
   selectedCategories.length>0?selectedCategories.includes(product.category) :product)
  

  return (
    <div className="WrapProducts">
      <SearchProduct
       search={updateSearchTerm}
      />
      <Categories
        products={products}
        selectedCategories={selectedCategories}
        onSelectCategory={updateCategories}
      />
      <RenderProducts products={filteredProducts} openProductModal={openProductModal}/>
    </div>
  );
}

export default WrapProducts;
