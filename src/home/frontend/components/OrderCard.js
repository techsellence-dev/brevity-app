import React, { useState, useContext } from "react";
// import "./OrderCard.css";
import { GlobalState } from "../Home";
import { List, ListItemButton, ListItemText } from "@mui/material";
import ListItem from "@mui/material/ListItem";
function OrderCard(props) {
  //function that send selected order data to TopBar
  const { taskData } = useContext(GlobalState);
  return (
    <>
      <List
      sx={{
        width: '100%',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 700,
        '& ul': { padding: 0 },
      }}>
        {props.data.map((items, index)=>(
            <ListItem key={items} disablePadding>
                <ListItemButton onClick={() => taskData(items)}>
                <ListItemText primary={`${items.orderID} - ${items.currentData}`} secondary={items.description}/>
                <ListItemText primary={items.currentTime}/>
                <ListItemText primary={items.description}/>
                </ListItemButton>
            </ListItem>
        ))}
      </List>

      {/* <div>
        {props.data.map((items, index) => (
          <div key={index} className="cardBody" onClick={() => taskData(items)}>
            <div className="orderDiv ">
              <p style={{ fontWeight: "bold" }}>{items.orderID} </p>
              <p style={{ fontWeight: "bold" }}>{items.currentTime}</p>
            </div>
            <div className="orderDiv ">
              <p style={{ fontWeight: "bold" }}>{items.description} </p>
              <p style={{ fontWeight: "bold" }}>{items.currentData}</p>
            </div>
          </div>
        ))}
      </div> */}
    </>
  );
}
export default OrderCard;
