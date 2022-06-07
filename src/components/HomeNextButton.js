import React from "react";
import "./home.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
export default function HomeNextButton(){
    const [open6, setOpen6] = React.useState(false);
    const handleClickOpen6 = () => {
        setOpen6(true);
      };
    
      const handleClose6 = () => {
        setOpen6(false);
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
                onClick={handleClickOpen6}
              >
                <img
                  className="top-bar-btn"
                  src="https://img.icons8.com/ios-filled/344/ffffff/circled-chevron-right.png"
                  alt=""
                ></img>
                Next Assessor
              </Button>
              <Dialog
                open={open6}
                onClose={handleClose6}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Next Assessor"}
                </DialogTitle>
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
                  <Button onClick={handleClose6}>Cancel</Button>
                  <Button onClick={handleClose6} autoFocus>
                    Accept
                  </Button>
                </DialogActions>
              </Dialog> 
        </>
    )
}