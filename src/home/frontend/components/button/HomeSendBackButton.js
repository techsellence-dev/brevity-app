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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function HomeSendBackButton() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [open7, setOpen7] = React.useState(false);
  const handleClickOpen7 = () => {
    setOpen7(true);
  };

  const handleClose7 = () => {
    setOpen7(false);
  };

  return (
    <>
      {matches ? (
        <Button
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          color="inherit"
          onClick={handleClickOpen7}
        >
          Send Back
        </Button>
      ) : (
        <IconButton
          aria-label="Files"
          color="inherit"
          onClick={handleClickOpen7}
        >
          <ArrowBackIcon />
        </IconButton>
      )}

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
  );
}
