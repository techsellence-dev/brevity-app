import React, { useState, useContext } from "react";
// import "./OrderCard.css";
import { GlobalState } from "../Home";
import { List, ListItemButton, ListItemText, Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
function OrderCard(props) {
  const colorchange = () => {
    console.log("clicked")
    console.log(props.data[0])
  }
  //function that send selected order data to TopBar
  const { taskData } = useContext(GlobalState);
  return (
    <>
      <div
      // style={{ border: "1px solid red" }}
      >


        <List
          sx={{
            width: "100%",
            position: "relative",
            overflow: "auto",
            maxHeight: 630,
            "& ul": { padding: 0 },
          }}
        // style={{ border: "3px solid green" }}
        >
          {props.data.map((items, index) => (
            <ListItem key={index} container disablePadding
            // style={{ border: "3px solid red" }}
            // onclick={colorchange}
            >
              <ListItemButton
                onClick={() => taskData(items)}
                // onClick={colorchange}
                style={{
                  border: "1px solid black",
                  margin: "5px",
                  marginBottom: "10px",
                  background: "skyblue",
                  height: "3cm",
                  fontWeight: "bolder",
                  fontSize: "19px",
                  borderRadius: "7px",


                }}

              >
                <ListItemText
                  primary={`${items.orderName}-${items.createdDate}`}
                  secondary={items.description}

                // primary={`${items.currentTime}`}
                />
                <ListItemText primary={items.currentTime} />
                {/* <ListItemText primary={items.description} /> */}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
}
export default OrderCard;
