import React, { useEffect, useState } from "react";
import getOrderDetails from "../../../server/GetOrders";
import OrderCard from "./OrderCard";
// import "./SearchInput.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Auth } from "aws-amplify";
import { Stack } from "@mui/material";
import sha256 from "crypto-js/sha256";
import hmacSHA512 from "crypto-js/hmac-sha512";
import Base64 from "crypto-js/enc-base64";
var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");
var CryptoJS = require("crypto-js");

const NavBar = (props) => {
  const secret = "Hello123";
  // let dumArray = [];

  // console.log(`entered Navbar component`);
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
    const data1 = Array.from(orderDetailsSet);
    //encrypting the navbar Data
    let encrypted = CryptoJS.AES.encrypt(JSON.stringify(data1), secret).toString();
    console.log(encrypted)
    //setting up to the local storage
    localStorage.setItem("NavbarData", encrypted);

    let navData = localStorage.getItem("NavbarData")
    var retrieveLocalDecrypt = CryptoJS.AES.decrypt(navData, secret);
    var originalText = retrieveLocalDecrypt.toString(CryptoJS.enc.Utf8).toString();
    console.log(originalText)
    setTask(JSON.parse(originalText))
    console.log(task)



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
