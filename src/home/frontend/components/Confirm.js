import React from 'react';
// import './Confirm.css';
// function Confirm(props){
//     return(
//         <>
//             <div className='box-body'>
//                 <h1 className='confirm-box-title'> 
//                    {props.title}
//                 </h1>
//                 <h2 className='confirm-box-description'>
//                     {props.description}
//                 </h2>
//                 <p className='confirm-message'>
//                     {props.message}
//                 </p>
//                 <div className='confirm-box-buttons'>
//                     {props.children}
//                 </div>
//             </div>
//         </>
//     )
// }
// export default Confirm;


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
     
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        {props.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          {props.description}
          {props.message}

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
