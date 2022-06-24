import React, { useEffect, useState } from "react";
import getOrderDetails from "../../../server/GetOrders";
import OrderCard from "./OrderCard";
// import "./SearchInput.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Auth } from "aws-amplify";
import { Stack } from "@mui/material";

const NavBar = (props) => {
  console.log(`entered Navbar component`);
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
      <Box sx={{ width: "100%", height: 70 }} justifyItems="flex-end">
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          fullWidth
          onChange={(search) => searchData(search.target.value)}
        />
      </Box>
      <div style={{ fontSize: "20px" }}>
        <OrderCard
          data={searchResult.length > 0 ? searchResult : task}
          onclick={props.setTopBarDataFunction}
        />
      </div>
    </>
  );
};
export default NavBar;
