import React from "react";
import "../home.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
export default function HomeForwardButton(){
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
    const [open5, setOpen5] = React.useState(false);
    const handleClickOpen5 = () => {
        setOpen5(true);
      };
    
      const handleClose5 = () => {
        setOpen5(false);
      };
    
    return(
        <>
               {matches ? (
                    <Button
                      variant="outlined"
                      startIcon={<ForwardToInboxIcon />}
                      color="inherit"
                      onClick={handleClickOpen5}
                    >
                      Forward
                    </Button>
                  ) : (
                    <IconButton aria-label="Files" color="inherit" onClick={handleClickOpen5}>
                      <ForwardToInboxIcon />
                    </IconButton>
                  )} 
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