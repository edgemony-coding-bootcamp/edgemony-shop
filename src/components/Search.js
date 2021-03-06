import { PropTypes } from "prop-types";
import { ReactComponent as IconSearch } from "../icons/search.svg";

import "./Search.css";

function Search({ onSearch }) {
  return (
    <div className="Search">
      <IconSearch />
      <input
        type="search"
        placeholder="Search here..."
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
