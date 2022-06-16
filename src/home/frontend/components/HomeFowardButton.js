import React from "react";
import "./home.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
export default function HomeForwardButton(){
    const [open5, setOpen5] = React.useState(false);
    const handleClickOpen5 = () => {
        setOpen5(true);
      };
    
      const handleClose5 = () => {
        setOpen5(false);
      };
    
    return(
        <>
                <Button
                variant="h1"
                className="blue_btn2"
                // css of this is not working in home.css Need to check
                style={{
                  border: "1px solid white",
                  margin: "0px 7px",
                  padding: "0px 25px",
                }}
                onClick={handleClickOpen5}
              >
                <img
                  src="https://img.icons8.com/glyph-neue/2x/ffffff/forward.png"
                  className="top-bar-btn"
                  alt=""
                ></img>
                Forward
              </Button>
              <Dialog
                open={open5}
                onClose={handleClose5}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">{"Forward"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    {"Please Provide the Comments to forward the email"}
                    <br></br>
                    <br></br>
                    {
                      "Make sure you have checked all files and upload necessary documnets"
                    }
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose5}>Cancel</Button>
                  <Button onClick={handleClose5} autoFocus>
                    Accept
                  </Button>
                </DialogActions>
              </Dialog>
        </>
    )
}