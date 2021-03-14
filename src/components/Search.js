import { PropTypes } from "prop-types";
import { ReactComponent as IconSearch } from "../icons/search.svg";

import "./Search.css";

function Search({ onSearch, term }) {
  return (
    <div className="Search">
      <IconSearch />
      <input
        type="search"
        placeholder="Search here..."
        value={term}
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
}

Search.propTypes = {
  term: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};

export default Search;
