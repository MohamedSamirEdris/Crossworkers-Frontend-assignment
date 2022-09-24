import React, { useState } from "react";

const SearchToDo = ({ searchForTodo }: any) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e: any) => {
    searchForTodo(e.target.value);
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <form className="form">
        <label htmlFor="searchTodo">Search: </label>
        <input
          type="text"
          className="form-input search-input"
          placeholder="Search"
          value={searchValue}
          onChange={handleInputChange}
          id="searchTodo"
        />
      </form>
    </div>
  );
};

export default SearchToDo;
