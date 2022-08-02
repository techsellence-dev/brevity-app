import React, { useContext } from "react";
import "./home.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import { GlobalState } from "../Home";
import OrderPallet from "../../../WorkflowComponents/OrderTaskComponents/ViewOrder";
export default function TaskName() {
  const [anchore, setAnchore] = React.useState(null);
  //get selected orders from Navbar
  const { order } = useContext(GlobalState)

  const handleClick = (event) => {
    setAnchore(event.currentTarget);
  };

  const handleClose = () => {
    setAnchore(null);
  };
  const open1 = Boolean(anchore);
  const id = open1 ? 'simple-popover' : undefined;

  return (
    <>
      <Button variant="h1" onClick={handleClick}>
        Task Name
      </Button>
      <Popover
        id={id}
        open={open1}
        anchorEl={anchore}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {/* order will shown here */}
        <Typography sx={{ p: 2 }}>
          Order Id: {order.length === 0 ? null : order.orderID}<br></br>
          <br></br>Order Name: {order.length === 0 ? "" : order.orderName} <br></br>
          <br></br> Description:{order.length === 0 ? "" : order.description}<br></br>
          <br></br>Date of Creation:{order.length === 0 ? "" : order.createdDate}<br></br>
          <br></br>Created At:{order.length === 0 ? "" : order.currentTime}<br></br>
        </Typography>
        <Typography sx={{ p: 4 }}>
          {
            order.length === 0 ? null : <Button variant="contained"> <OrderPallet /> </Button>

          }
        </Typography>
      </Popover>
    </>
  )
}