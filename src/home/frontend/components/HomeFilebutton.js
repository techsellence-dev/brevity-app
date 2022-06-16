import React from "react";
import "./home.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

import File from "./File";
export default function HomeFilebutton() {
  const [open9, setOpen9] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const handleClickOpen9 = (scrollType) => () => {
    setOpen9(true);
    setScroll(scrollType);
  };

  const handleClose9 = () => {
    setOpen9(false);
  };
  return (
  <>
      <Button
         variant="h1"
         className="blue_btn"
          // css of this is not working in home.css Need to check
         style={{
           border: "1px solid white",
           margin: "0px 7px",
           padding: "0px 25px",
         }}
         onClick={handleClickOpen9("paper")}
       >
         <img
           className="top-bar-btn"
           src="https:img.icons8.com/ios-filled/2x/ffffff/file.png"
           alt=""
         ></img>{" "}
         Files
       </Button>
       <Dialog
         open={open9}
         onClose={handleClose9}
         scroll={scroll}
         aria-labelledby="scroll-dialog-title"
         aria-describedby="scroll-dialog-description"
       >
         <DialogTitle id="scroll-dialog-title">Files</DialogTitle>
         <DialogContent dividers={scroll === "paper"}>
           <DialogContentText id="scroll-dialog-description">
             <File></File>
           </DialogContentText>
         </DialogContent>
         <DialogActions>
           <Button onClick={handleClose9}>Cancel</Button>
         </DialogActions>
       </Dialog> 
   </>
  )
}
