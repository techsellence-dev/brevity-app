import React, { useState ,useContext } from "react";
import { Form, Field } from "react-final-form";
import './WorkFlowinput.css';
import { GlobalVariable } from "./NodeComponent";
const required = (value) => (value ? undefined : "Required");

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const Popp = async (values) => {
  await sleep(1000);
//   alert("Submitted Successfully!");
//   window.alert(JSON.stringify(values, undefined, 2));
};

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
      <header className="App-d">
        <Form onSubmit={Popp}>
          {({ handleSubmit, values, submitting }) => (
            <form onSubmit={handleSubmit} className="input-btns" >
              <h1>Create WorkFlow</h1>
              <div className="input-alignment">
                <div>
                  <input
                    onChange={(workflowname) => setWorkflowname(workflowname.target.value)}
                    name="firstName"
                    component="input"
                    placeholder="WorkFlow Name"
                    validate={required}
                    className="input-field"
                    />
                </div>

                <div>
                  <input
                    onChange={(workflowDescription) => setDescription(workflowDescription.target.value)}
                    name="lastName"
                    component="input"
                    placeholder="WorkFlow Description"
                    validate={required}
                    className="input-field"
                  />
                </div>
              </div>
              <div className="input-btn-div">
              <button
                  className="custom-button"
                  type="submit"
                  disabled={submitting}
                  onClick={manageData}
                >
                  Submit
                </button>
                <button
                  className="custom-button"
                  type="submit"
                  onClick={()=>changeWorkFLowInput(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </Form>
      </header>
    </div>
  );
}

export default WorkFlowInput;
