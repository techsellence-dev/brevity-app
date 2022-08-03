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
        style={{ width: "60%" }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {/* order will shown here */}
        <Typography sx={{ p: 2 }}>
          <Typography sx={{ p: 2 }}>Order Name: {order.length === 0 ? "" : order.orderName} </Typography>
          <Typography sx={{ p: 2 }}>Description:{order.length === 0 ? "" : order.description}</Typography>
          <Typography sx={{ p: 2 }}>Date of Creation:{order.length === 0 ? "" : order.createdDate}</Typography>
          <Typography sx={{ p: 2 }}>Created At:{order.length === 0 ? "" : order.currentTime}</Typography>
        </Typography>
        <Typography sx={{ p: 3 }}>
          {
            order.length === 0 ? null : <Button variant="contained"> <OrderPallet /> </Button>
          }
        </Typography>
      </Popover>
    </>
  )
}