import React from "react";
import "../home.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import InputUnstyled from '@mui/base/InputUnstyled';
import { styled } from '@mui/system'
import { useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ComponentOne from "./forward";
const blue = {
  100: '#DAECFF',
  200: '#80BFFF',
  400: '#3399FF',
  600: '#0072E5',
};

const grey = {
  50: '#F3F6F9',
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};

const StyledInputElement = styled('input')(
  ({ theme }) => `
  width: 100%;
  font-size: 0.875rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  border-radius: 8px;
  padding: 12px 12px;
  m:4;

  &:hover {
    background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
    border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:focus {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
  }
`,
);

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return (
    <InputUnstyled components={{ Input: StyledInputElement }} {...props} ref={ref} />
  );
});
export default function HomeForwardButton(){
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [send, setSend] = useState(false);
	const [comment, setComment] = useState(true);
  const [open5, setOpen5] = React.useState(false);
  
	const descriptionHandler = () => {
		setSend(true);
		setComment(false);
	};
 const handleClickOpen5 = () => {
        setOpen5(true);
      };
const handleClose5 = () => {
        setOpen5(false);
        setSend(false);
        setComment(true);
      };

    return(
        <>
          
            <Dialog
               
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-send"
              >
                <DialogTitle id="alert-dialog-title">Forward</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-send">
                    {"Please Provide the Comments to forward the email"}
                    <Typography>‎</Typography>                    <CustomInput aria-label="Demo input" placeholder="Type something…" />  <Typography>‎</Typography> 
                    {
                      "Make sure you have checked all files and upload necessary documents"
                    }
                    
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose5}>Cancel</Button>
                  <Button onClick={descriptionHandler} autoFocus>
                    Accept
                  </Button>
                </DialogActions>
              </Dialog>    
          
        </>
    )
}