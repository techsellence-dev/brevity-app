import React, { useState } from "react";
import "./SearchInput.css";
import { AiOutlineSearch } from "react-icons/ai";

const SearchInput = (props) => {
  const [authedUser, setAuthedUser] = useState("");
  const [task, setTask] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const searchData = (searchItem) => {
    setSearch(searchItem);
    if (search != "") {
      const searchedOrders = task.filter((filteredOrders) => {
        return Object.values(filteredOrders)
          .join(" ")
          .toLowerCase()
          .includes(searchItem.toLowerCase());
      });
      setSearchResult(searchedOrders);
    } else {
      setSearchResult(task);
    }
  };
  return (
    <div className="app2">
      <div className="input-element-wrapper">
        <input
          placeholder="Enter Search"
          className="InputBox"
          type="text"
          onChange={(search) => searchData(search.target.value)}
        />
        <button className="passwordButton">
          <AiOutlineSearch />
        </button>
      </div>
    </div>
  );
};
export default SearchInput;
