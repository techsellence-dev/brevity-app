import React, { useState ,useContext } from "react";
import { Form, Field } from "react-final-form";
import './WorkFlowinput.css';
import { GlobalVariable } from "./WorkFlowComponent";
import OrderTaskTest from "../test/OrderTaskTest";
function WorkFlowInput() {
  const {changeWorkFlowPlaneState,changeWorkFLowInput,setWorkflowData}=useContext(GlobalVariable)
  const [workflowname, setWorkflowname] = useState(null);
  const [workflowDescription, setDescription] = useState(null);
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
              onClick={()=>changeWorkFLowInput(false)}
            >
              Cancel
            </button>
          </div>
        </div>
    </div>
  );
}

export default WorkFlowInput;
