import React from "react";
import "./home.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import File from "./File";

export default function HomeSmallIcon() {
  const [open9, setOpen9] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const handleClickOpen9 = (scrollType) => () => {
    setOpen9(true);
    setScroll(scrollType);
  };

  const handleClose9 = () => {
    setOpen9(false);
  };
  const [open6, setOpen6] = React.useState(false);
  const handleClickOpen6 = () => {
    setOpen6(true);
  };

  const handleClose6 = () => {
    setOpen6(false);
  };
  const [open5, setOpen5] = React.useState(false);
  const handleClickOpen5 = () => {
    setOpen5(true);
  };

  const handleClose5 = () => {
    setOpen5(false);
  };
  const [open7, setOpen7] = React.useState(false);
  const handleClickOpen7 = () => {
    setOpen7(true);
  };

  const handleClose7 = () => {
    setOpen7(false);
  };

  return (
    <>
      <img
        src="https://img.icons8.com/ios-filled/2x/ffffff/file.png"
        className="icon-img"
        alt=""
        onClick={handleClickOpen9("paper")}
      ></img>
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
      <img
        src="https://img.icons8.com/glyph-neue/2x/ffffff/forward.png"
        alt=""
        className="icon-img"
        onClick={handleClickOpen5}
      ></img>
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
      <img
        src="https://img.icons8.com/ios-filled/344/ffffff/circled-chevron-right.png"
        alt=""
        className="icon-img"
        onClick={handleClickOpen6}
      ></img>
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
      <img
        src="https://img.icons8.com/ios-filled/2x/ffffff/send-backward.png"
        alt=""
        className="icon-img"
        onClick={handleClickOpen7}
      ></img>

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
      <img
        src="https://img.icons8.com/ios-filled/2x/ffffff/delete-user-male.png"
        alt=""
        className="icon-img"
      ></img>
    </>
  );
}
