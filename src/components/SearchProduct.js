import "./SearchProduct.css"


function SearchProduct({search}) {

  return (
    <div className="searchInput">
      <input onChange={(e)=>search(e.target.value)} type="text" placeholder="search product"></input>
    </div>
  );
}

export default SearchProduct;
