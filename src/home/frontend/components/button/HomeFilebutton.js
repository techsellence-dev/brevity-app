import React from "react";
import "../home.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import File from "../File";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import IconButton from "@mui/material/IconButton";
export default function HomeFilebutton() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
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
      {matches ? (
        <Button
          variant="outlined"
          startIcon={<InsertDriveFileIcon />}
          color="inherit"
          onClick={handleClickOpen9("paper")}
        >
          Files
        </Button>
      ) : (
        <IconButton aria-label="Files" color="inherit">
          <InsertDriveFileIcon />
        </IconButton>
      )}
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
  );
}
