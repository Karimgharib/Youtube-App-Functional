import React, { useState } from "react";

const SearchBar = ({ whenFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    whenFormSubmit(term);
  };
  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <input
            value={term}
            type="text"
            placeholder="Search for a video..."
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
