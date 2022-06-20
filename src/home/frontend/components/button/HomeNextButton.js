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
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export default function HomeNextButton(){
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
    const [open6, setOpen6] = React.useState(false);
    const handleClickOpen6 = () => {
        setOpen6(true);
      };
    
      const handleClose6 = () => {
        setOpen6(false);
      };
    
    return(
        <>
              
              {matches ? (
                    <Button
                      variant="outlined"
                      startIcon={<ArrowForwardIcon />}
                      color="inherit"
                      onClick={handleClickOpen6}
                    >
                      Next Assessor
                    </Button>
                  ) : (
                    <IconButton aria-label="Files" color="inherit">
                      <ArrowForwardIcon />
                    </IconButton>
                  )}
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