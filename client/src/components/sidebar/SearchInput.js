import React from "react";
import { checkResultsFound, checkTitleClicked } from "../../utils";
import SearchIcon from "../../assets/search.svg";

function SearchInput({
  getSearchedAnswers,
  setSearchInput,
  searchInput,
  setPrevSearchedInput,
  answers,
  node,
  prevSearchedInput,
}) {
  return (
    <div className="search_input_section">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="Type to search..."
          name="searchInput"
          value={searchInput}
          onChange={(e) => {
            if (/^[\w ]+$/.test(e.target.value) || e.target.value === "") {
              setSearchInput(e.target.value);
            }
            return;
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            if (!searchInput) return;
            getSearchedAnswers(searchInput);
            setPrevSearchedInput(searchInput);
            setSearchInput("");
          }}
        >
          <img src={SearchIcon} alt="search-icon" />
        </button>
      </form>
      {checkTitleClicked(node, answers) ? (
        <div className="not_found">Please click on any Title below.</div>
      ) : (
        checkResultsFound(node, answers, prevSearchedInput) && (
          <div className="not_found">No search results found.</div>
        )
      )}
    </div>
  );
}

export default SearchInput;
