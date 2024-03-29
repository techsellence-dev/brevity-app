//General imports
import React, {
  Fragment,
  useState,
  useCallback,
  useContext,
  memo,
  useEffect,
} from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  useNodesState,
  useEdgesState,
  updateEdge,
  ReactFlowProvider,
} from "react-flow-renderer";
import "./CreateFlowStyle.css";
import { v4 as uuidv4 } from "uuid"
import checkForValidateWorkFlow from "../functions/SubmitWorkFlow";
import DeleteNode from "../functions/DeleteNode";
import CreateNode from "../functions/AddNode";
import SaveasDraftUI from "../functions/SaveAsDraftUI";
import saveAsDraft from "../server/SaveAsDraft";
import { GlobalVariable } from "./WorkFlowComponent";
import SaveWorkFlowDefinition from "../server/SaveWorkFlowDefinition";
import SaveDraftedWorkflow from "../server/SaveDraftedWorkflow";
import SaveEditedWorkflow from "../server/SaveEditedWorkflow";
//matrial ui imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CustomizedDialogs from "./InfoWorkFlow";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';


//general data
let i = 1;
let nodeData = [];
let dummyNode = [
  {
    id: "4cc48c48c4c8c4",
    data: { label: "Example", isRootNode: true },
    type: "input",
    position: { x: 584, y: 84 },
  },
];
//main function starts
const CreateWorkFlow = () => {
  const {
    changeWorkFlowPlaneState,
    draftedWorkFLow,
    setDraftedWorkflow,
    workflowDescription,
    workflownewname,
    draftedWorkFlowID
  } = useContext(GlobalVariable);
  //data for new workflow
  const [newItems, setNewItems, onNewItemsChange] = useNodesState([]);
  const [newEdge, setNewEdge, onNewEdgeChange] = useEdgesState([]);
  const [selectedNode, setSelectedNode] = useState(null);
  const [nodeName, setNodeName] = useState("");
  const [zoomOnScroll, setZoomOnScroll] = useState(false);
  const [panOnDrag, setpanOnDrag] = useState(false);
  const [loading, setLoading] = useState(null);
  //data and style for MUI
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //set drafted data to workflow pallet
  useEffect(() => {
    if (draftedWorkFLow !== null) {
      setNewItems(JSON.parse(draftedWorkFLow)[0]);
      setNewEdge(JSON.parse(draftedWorkFLow)[1]);
    }
    return () => {
      setDraftedWorkflow(null);
    };
  }, []);
  const onInit = (reactFlowInstance) => {
    // console.log('flow loaded:', reactFlowInstance);
  };
  //select node and change for node color
  const onNodeClick = (event, node) => {
    setSelectedNode(node);
    nodeData = node;
    handleOpen();
    setNewItems((nds) =>
      nds.map((node) => {
        if (node.id === nodeData.id) {
          node.style = { ...node.style, backgroundColor: "#38D8FF" };
        } else {
          node.style = { ...node.style, backgroundColor: "white" };
        }
        return node;
      })
    );
  };
  const onConnect = useCallback(
    (connection) => setNewEdge((eds) => addEdge(connection, eds)),
    [setNewEdge]
  );
  //back function . it empties all the array
  const goBack = useCallback(() => {
    setNewItems([]);
    setNewEdge([]);
    setDraftedWorkflow(null);
    changeWorkFlowPlaneState(true);
  }, []);
  //delete node function
  const deleteData = () => {
    const deletedItems = DeleteNode(
      selectedNode,
      newItems,
      newEdge,
      setNewItems,
      setNewEdge
    );
    setNewItems([...deletedItems[0]]);
    setNewEdge([...deletedItems[1]]);
    setSelectedNode(null);
    handleClose();
  };
  //addData
  const addData = async () => {
    try {
      if (nodeName === "") throw "Please provide a node name";
      CreateNode(
        nodeName,
        newItems,
        newEdge,
        setNewItems,
        setNewEdge,
        selectedNode,
        i++
      );
      console.log(newItems);
      setNodeName("");
      setSelectedNode(null);
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };
  //save as draft
  const saveDraft = async () => {
    try {
      let draftResponse;
      setLoading("savingAsDraft");
      if(draftedWorkFlowID==null){
        draftResponse=await saveAsDraft(uuidv4(),workflownewname, workflowDescription, newItems, newEdge);
      }
      else{
        draftResponse=await saveAsDraft(draftedWorkFlowID,workflownewname, workflowDescription, newItems, newEdge);
      }
      if(draftResponse){
        alert("WorkFlow save as draft Successfully")
      }
      setLoading(null);
      // goBack();
    } catch (error) {
      console.log(error);
    }
  };
  //save workflow
  const saveWorkFLow = async () => {
    try {
      setNewItems((nds) =>
        nds.map((node) => {
            node.style = { ...node.style, backgroundColor: "white" };
          return node;
        })
      );  
      setLoading("savingWorkFlow");
      const validWorkFlowRespone=await checkForValidateWorkFlow(draftedWorkFlowID, workflownewname, workflowDescription, newItems, newEdge );
      let response;
      if(validWorkFlowRespone.result=='validWorkflow'){
        response = await SaveWorkFlowDefinition( draftedWorkFlowID,workflownewname, workflowDescription, newItems, newEdge );
        if(response)
          alert("WorkFLow Created Successfully");
      }
      else if(validWorkFlowRespone.result=='Drafted workflow'){
        response = await SaveDraftedWorkflow( draftedWorkFlowID, workflownewname, newItems, newEdge );
        if(response)
          alert("WorkFlow Saved As Draft");
      }
      else if(validWorkFlowRespone.result=='Edit workflow'){
        response = await SaveEditedWorkflow( draftedWorkFlowID, workflownewname, newItems, newEdge );
        if(response)
          alert("WorkFlow Edited Successful");
      }
      else{
        console.log(validWorkFlowRespone.result)
      }
      setLoading(null);
      goBack();
    } catch (error) {
      console.log(error);
    }
  };
  const onEdgeUpdate = (oldEdge, newConnection) =>
    setNewEdge((els) => updateEdge(oldEdge, newConnection, els));
  return (
    <>
    {/* app bar */}
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{width:"100%",display:"flex",justifyContent:"space-between"}}>
          
          <Typography variant="h6" component="div" >
          <Button variant="outline" onClick={goBack}>Back</Button>
          </Typography>

          <Typography>
          Manage WorkFlow
          </Typography>

          <CustomizedDialogs />
        </Toolbar>
      </AppBar>
    </Box>
      <div className="create-div-flow">
        <h2>{ workflownewname }</h2>
        <div className="flow-style">
          <div className="title-node">
            <p>
              {selectedNode == null
                ? "Please Select a node for its child"
                : selectedNode.data.label}
            </p>
            <div className="checkbox-container">
              <div className="scroll-check">
                <input
                  id="zoomonscroll"
                  type="checkbox"
                  checked={zoomOnScroll}
                  onChange={(event) => setZoomOnScroll(event.target.checked)}
                  className="zoomonscroll"
                />
                <h4 htmlFor="zoomonscroll">Control Scroll Zoom</h4>
              </div>
              <div className="scroll-check">
                <input
                  id="panOnDrag"
                  type="checkbox"
                  checked={panOnDrag}
                  onChange={(event) => setpanOnDrag(event.target.checked)}
                  className="zoomonscroll"
                />
                <h4 htmlFor="panOnDrag">Control Plane Dragging</h4>
              </div>
            </div>
          </div>
          <div style={{ width: "95%", height: 500, backgroundColor: "wheat" }}>
            <ReactFlowProvider>
              <ReactFlow
                defaultNodes={newItems.length == 0 ? dummyNode : newItems}
                defaultEdges={newEdge}
                onNodesChange={onNewItemsChange}
                onEdgesChange={onNewEdgeChange}
                onInit={onInit}
                onConnect={onConnect}
                connectionLineStyle={{ stroke: "black", strokeWidth: 2 }}
                connectionLineType="bezier"
                snapToGrid={true}
                onEdgeUpdate={onEdgeUpdate}
                snapGrid={[16, 16]}
                nodesConnectable={true}
                nodesDraggable={true}
                onNodeClick={onNodeClick}
                zoomOnScroll={zoomOnScroll}
                panOnDrag={panOnDrag}
              >
                <MiniMap nodeColor={"black"} />
              </ReactFlow>
            </ReactFlowProvider>
          </div>
        </div>
        {/* Material UI Modal */}
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Enter Node Name
              </Typography>
              <input
                className="node-input"
                placeholder="Enter Node Name"
                type="text"
                onChange={(nodeName) => setNodeName(nodeName.target.value)}
                autoFocus={true}
                value={nodeName}
              />
              <Box style={{ display: "flex" }}>
                <button className="custom-button-1" onClick={() => addData()}>
                  {" "}
                  Add Node
                </button>
                {newItems.length == 0 ? null : (
                  <button
                    className="custom-button-1"
                    onClick={() => deleteData()}
                  >
                    Delete Node
                  </button>
                )}
              </Box>
            </Box>
          </Modal>
        </div>
        <div className="input-btn-div">
          <div>
            {loading === "savingAsDraft" ? (
              <p>WorkFlow is Saving as draft</p>
            ) : loading === "savingWorkFlow" ? (
              <p>WorkFlow is Saving</p>
            ) : (
              <>
                <button className="custom-button-1" onClick={() => saveDraft()}>
                  Save As Draft
                </button>
                <button className="custom-button-1" onClick={() => saveWorkFLow()}>
                  Save WorkFlow
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(CreateWorkFlow);
