import React, { useEffect, useState } from "react";
import "../css/NavBar.css";
import "./inputs.css";
import getOrderDetails from "../server/GetOrders";
import "./OrderCard.css";
import OrderCard from "./OrderCard";
import "./SearchInput.css";
import { Auth } from "aws-amplify";

const NavBar = (props) => {
  const [authedUser, setAuthedUser] = useState("");
  const [task, setTask] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    getOrderDetailsForUser();
  }, []);

// Fetch the data from the data for current
// Authenticated User
  const getOrderDetailsForUser = async () => {
    let currentUser = await Auth.currentAuthenticatedUser();
    setAuthedUser(currentUser.attributes.email);
    const orderDetailsSet = await getOrderDetails(currentUser.attributes.email);
    setTask(Array.from(orderDetailsSet));
  };
// function that gives search functionality
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
    <>
      <div
        style={{
          textAlign: "center",
          position: "sticky",
          top: "64px",
          background: "rgb(255, 255, 255)",
          borderBottom: "3px solid black",
        }}
      >
        <div
          className="collapse"
          style={{
            textAlign: "center",
            position: "sticky",
            top: "64px",
            background: "rgb(255, 255, 255)",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Task List</h2>
        </div>
        <div
          className="app2"
          style={{
            position: "sticky",
            top: "140px",
            width: "95%",
            marginLeft: "5px",
            background: "rgb(255, 255, 255)",
            marginBottom: "15px",
          }}
        >
          <div className="input-element-wrapper">
            <input
              placeholder="Search..."
              className="InputBox"
              type="text"
              onChange={(search) => searchData(search.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="App">
        <div
          id="item"
          style={{
            background: "white",
            width: "97%",
            zIndex: "-1",
            border: "none",
          }}
          className="itemDiv"
        >
          <OrderCard
            data={searchResult.length > 0 ? searchResult : task}
            onclick={props.setTopBarDataFunction}
          />
        </div>
      </div>
    </>
  );
};
export default NavBar;
