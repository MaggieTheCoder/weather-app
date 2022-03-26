import PropTypes from "prop-types";
import React from "react";
import "../styles/SearchForm.css";

const SearchForm = ({ searchText, setSearchText, onSubmit }) => {
  const handleInputChange = (event) => setSearchText(event.target.value);
  return (
    <div className="search-form">
      <input
        className="search-form__input"
        type="text"
        onChange={handleInputChange}
        value={searchText}
      />
      <button className="search-form__button" type="submit" onClick={onSubmit}>
        Search
      </button>
    </div>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
