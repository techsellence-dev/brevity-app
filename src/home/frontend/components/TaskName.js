import React ,{useContext} from "react";
import "./home.css";
import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import { GlobalState } from "../Home";
export default function TaskName(){
    const [anchorEl1, setAnchorEl1] = React.useState(null);
    //get selected orders from Navbar
    const {order}=useContext(GlobalState)
    const handleClick = (event) => {
        setAnchorEl1(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl1(null);
      };
      const open1 = Boolean(anchorEl1);
      const id = open1 ? "simple-popover" : undefined;
    return(
        <>
              <Button variant="h1" onClick={handleClick}>
                Task Name
              </Button>
              <Popover
                id={id}
                open={open1}
                anchorEl={anchorEl1}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                {/* order will shown here */}
               <Typography sx={{ p: 2 }}>
                  Task Id: 123<br></br>
                  <br></br>Order Name: {order.length==0?null:order.orderID} <br></br>
                  <br></br> Due Date:25 Jan<br></br>
                  <br></br>
                </Typography>
              </Popover> 
        </>
    )
}