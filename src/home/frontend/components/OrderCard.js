import React, { useState, useContext, useCallback, memo } from "react";
// import "./OrderCard.css";
import { GlobalState } from "../Home";
import { List, ListItemButton, ListItemText, Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";




function OrderCard(props) {
  const [bg, setBg] = useState("#87CEEB")
  const [color,setColor]=useState("red")
  const [select,setSelect]=useState(null)
  // const colorchange = (selectedOrder) => {
  //   props.data.map((Order)=>{
  //     if(selectedOrder.orderID==Order.orderID){
  //       setSelect(Order);
  //     }
  //   })
  //   console.log("ji")
  // };
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
      // style={{ border: "3px solid green" }}
      >
        {props.data.map((items, index) => (
          <ListItem key={index} container disablePadding
          >
            <ListItemButton
              id={items.id}
              onClick={() => taskData(items)}
              // onClick={()=>colorchange(items)}
              style={{
                border: "1px solid black",
                margin: "5px",
                marginBottom: "10px",
                // backgroundColor: select==null ? bg : select.orderID==items.orderID?color:bg ,
                backgroundColor: bg ,
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
export default memo(OrderCard);
