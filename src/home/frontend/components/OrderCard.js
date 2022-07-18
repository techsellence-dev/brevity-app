import React, { useState, useContext } from "react";
// import "./OrderCard.css";
import { GlobalState } from "../Home";
import { List, ListItemButton, ListItemText, Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
function OrderCard(props) {
  //function that send selected order data to TopBar
  const { taskData } = useContext(GlobalState);
  return (
    <>
      <List
        sx={{
          width: "100%",
          position: "relative",
          overflow: "auto",
          maxHeight: 630,
          "& ul": { padding: 0 },
        }}
      >
        {props.data.map((items, index) => (
          <ListItem key={items.orderName} container disablePadding>
            <ListItemButton
              onClick={() => taskData(items)}
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
    </>
  );
}
export default OrderCard;
