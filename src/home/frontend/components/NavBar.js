import React, { useEffect, useState } from "react";
import getOrderDetails from "../../../server/GetOrders";
import OrderCard from "./OrderCard";
// import "./SearchInput.css";
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

  return (
    <>
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
