import React, { useState ,useContext } from "react";
import { Form, Field } from "react-final-form";
import './WorkFlowinput.css';
import { GlobalVariable } from "./WorkFlowComponent";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
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
      <div>
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
            <div  className="input-btns" >
              <h1>Create WorkFlow</h1>
              <div className="input-alignment">
                <div>
                  <input
                    onChange={(workflowname) => setWorkflowname(workflowname.target.value)}
                    name="firstName"
                    component="input"
                    placeholder="WorkFlow Name"
                    className="input-field"
                    />
                </div>
                <div>
                  <input
                    onChange={(workflowDescription) => setDescription(workflowDescription.target.value)}
                    name="lastName"
                    component="input"
                    placeholder="WorkFlow Description"
                    className="input-field"
                  />
                </div>
              </div>
              <div className="input-btn-div">
              <button
                  className="custom-button-2"
                  type="submit"
                  onClick={manageData}
                >
                  Submit
                </button>
                <button
                  className="custom-button-2"
                  type="submit"
                  onClick={handleClose}
                >
                  Cancel
                </button>
              </div>
            </div>
            <div>
          </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default WorkFlowInput;
