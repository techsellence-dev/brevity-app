import React, { useState ,useContext } from "react";
import { Form, Field } from "react-final-form";
import './WorkFlowinput.css';
import { GlobalVariable } from "./WorkFlowComponent";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
// or
import { Input } from '@mui/material';

import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '35%',
  height:'45%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function WorkFlowInput() {

  const {setWorkflowData}=useContext(GlobalVariable)
  const [workflowname, setWorkflowname] = useState(null);
  const [workflowDescription, setDescription] = useState(null);
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const manageData = () => {
    try {
        if(workflowname==null || workflowDescription==null)
            throw "Please Provide WorkFlow name and Description"
        setWorkflowData(workflowname,workflowDescription)
    } catch (error) {
        alert(error)
    }
  };
  return (
    <div className="input-box">
   <Button
          variant="outlined"
          startIcon={<ForwardToInboxIcon />}
          style={{ alignSelf: "end", right: "0" }}
          color="inherit"
          onClick={handleOpen}
        >
          Create Workflow
        </Button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2"
        style={{textAlign:"center",fontSize:"28px"}}
        >
        Create WorkFlow
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2}}
        style={{display:"flex", flexDirection: "column"}}
        >
         <Input
          style={{border:"2px solid black",borderRadius:"4px",width:"80%",alignSelf:"center"}} 
          onChange={(workflowname) => setWorkflowname(workflowname.target.value)}
         
          component="input"
           placeholder="WorkFlow Name"
         ></Input>
          <Input
          style={{border:"2px solid black",borderRadius:"4px",width:"80%",alignSelf:"center",marginBlock:"5%"}} 
          onChange={(workflowDescription) => setDescription(workflowDescription.target.value)}
          
          component="input"
          placeholder="WorkFlow Description"
         ></Input>
        </Typography>
        <Typography
        style={{paddingLeft:"24%"}}
        >
        <Button  variant="outlined"
            //  style={{margin:'20px',border:"2px solid black"}}
            style={{margin:"5%"}}
              sx={{ color: 'black', backgroundColor: ' rgb(0, 195, 255)', borderColor: 'black'}}
              // style={{marginInline:"10%"}}
              onClick={manageData}
        >Submit</Button>
        <Button  variant="outlined"
             style={{margin:"5%"}}
             sx={{ color: 'black', backgroundColor: ' rgb(0, 195, 255)', borderColor: 'black'}}
            
             onClick={handleClose}
       >Cancel</Button>
        </Typography>
      </Box>
    </Modal>
  </div>
  );
}

export default WorkFlowInput;
