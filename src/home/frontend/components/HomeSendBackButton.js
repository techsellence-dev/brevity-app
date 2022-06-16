import React from "react";
import "./home.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
export default function HomeNextButton(){
    const [open7, setOpen7] = React.useState(false);
    const handleClickOpen7 = () => {
        setOpen7(true);
      };
    
      const handleClose7 = () => {
        setOpen7(false);
      };
    
    return(
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
                onClick={handleClickOpen7}
              >
                <img
                  className="top-bar-btn"
                  src="https://img.icons8.com/ios-filled/2x/ffffff/send-backward.png"
                  alt=""
                ></img>
                Send Back
              </Button>
              <Dialog
                open={open7}
                onClose={handleClose7}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">{"Send back"}</DialogTitle>
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
                  <Button onClick={handleClose7}>Cancel</Button>
                  <Button onClick={handleClose7} autoFocus>
                    Accept
                  </Button>
                </DialogActions>
              </Dialog>
        </>
    )
}