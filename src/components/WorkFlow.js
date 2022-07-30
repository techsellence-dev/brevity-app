import React, { useEffect, useState, useCallback } from "react";
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  updateEdge,
  ReactFlowProvider,
} from "react-flow-renderer";
import DeleteIcon from "@mui/icons-material/Delete";
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "../css/AdminPage.css";
import SaveWorkFlowDefinition from "../server/SaveWorkFlowDefinition";
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";
import saveAsDraft from "../server/SaveAsDraft";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import { Divider, TextField, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";

import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import SaveIcon from "@mui/icons-material/Save";
import SendIcon from "@mui/icons-material/Send";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Item1 = styled(Paper)(({ theme }) => ({
  textAlign: "center",
}));
const style = {
  display: "flex",
  flexWrap: "wrap",
  "& > :not(style)": {
    m: 1,
    width: 1920,
    height: 500,
    backgroundColor: "lightgrey",
  },
};
let newInitialNode = [];
let newInitialEdges = [];



const WorkFow = () => {
  //state which manages backend nodes ,edges array
  const [items, setItems, onitemsChange] = useNodesState([]);
  const [edge, setEdge, onEdgeChange] = useEdgesState([]);
  //state for creating new workflow
  const [newNode, setNodeNodes, onNodeChange] = useNodesState([]);
  const [newEdge, setNewEdge, onNewEdgeChange] = useNodesState([]);
  const [newWorkPlane, setNewWorkPlane] = useState(true);
  const [NodeDataFields, showNodeDataFileds] = useState(false);
  //states for creating Nodes
  const [nodeName, setNodeName] = useState(null);
  const [captureElementClick, setCaptureElementClick] = useState(true);
  const [selectedNode, setSelectedNode] = useState(null);
  const [flowBox, setFlowBox] = useState(false);
  //states for data adding
  const [workFLowName, setWorkFlowName] = useState(null);
  const [workFlowDesc, setWorkFlowDesc] = useState(null);
  //state for setting the list of workflows
  const [workflowList, setWorkFlowList] = useState(null);
  //set save button loading
  const [isLoading,setIsLoading]=useState(false)
console.log("refresh ui ")
  useEffect(async () => {
    const workflowdata = await API.graphql({ query: queries.listWorkflows });
    setWorkFlowList(workflowdata.data.listWorkflows.items);
    setEdge(JSON.parse(workflowList[0].WorkFlowJSON)[1]);
    setItems(JSON.parse(workflowList[0].WorkFlowJSON)[0]);
  }, []);

//set workflow json on react flow
  const setWorkFlow = (data) => {
    console.log(data);
    setEdge(JSON.parse(data.WorkFlowJSON)[1]);
    setItems(JSON.parse(data.WorkFlowJSON)[0]);
  };

//list all workflow
  const listFlow=async()=>{
    const workflowdata = await API.graphql({ query: queries.listWorkflows });
    setWorkFlowList(workflowdata.data.listWorkflows.items)
  }
  //function that add new nodes and edges when user creating it
  const onNodeClick = (event, node) => {
    setSelectedNode(node);
    console.log(node);
  };

  const onInit = (reactFlowInstance) => {
    console.log("flow loaded:", reactFlowInstance);
  };


  const onConnect = useCallback(
    (connection) => setEdge((eds) => addEdge(connection, eds)),
    [setEdge]
  );

  const onEdgeUpdate = (oldEdge, newConnection) =>
    setEdge((els) => updateEdge(oldEdge, newConnection, els));

  //check for nodes
  let isNodePresent = false;
  //function for creating nodes and edges
  const createNode = () => {
    try {
      if (nodeName == null) {
        console.log("Please provide a node name");
      } else {
        if (newInitialNode.length == 0 || selectedNode == null) {
          setNodeNodes([
            ...newNode,
            {
              id: nodeName,
              data: { label: nodeName, isRootNode: true },
              type: "input",
              position: { x: 0, y: 0 },
            },
          ]);
          newInitialNode.push({
            id: nodeName,
            data: { label: nodeName, isRootNode: true },
            type: "input",
            position: { x: 0, y: 0 },
          });
        } else {
          for (let i = 0; i < newNode.length; i++) {
            if (newNode[i].id == nodeName) {
              isNodePresent = true;
            }
          }
          console.log(isNodePresent);
          if (isNodePresent) {
            setNewEdge([
              ...newEdge,
              {
                id: Math.random() * Math.pow(10, 16),
                type: "smoothstep",
                source: selectedNode.id,
                target: nodeName,
              },
            ]);
            newInitialEdges.push({
              id: Math.random() * Math.pow(10, 16),
              type: "smoothstep",
              source: selectedNode.id,
              target: nodeName,
            });
            isNodePresent = false;
          } else {
            setNodeNodes([
              ...newNode,
              {
                id: nodeName,
                data: { label: nodeName, isRootNode: false },
                position: { x: 100, y: 100 },
              },
            ]);
            setNewEdge([
              ...newEdge,
              {
                id: Math.random() * Math.pow(10, 16),
                type: "smoothstep",
                source: selectedNode.id,
                target: nodeName,
              },
            ]);
            newInitialNode.push({
              id: nodeName,
              data: { label: nodeName, isRootNode: false },
              position: { x: 100, y: 100 },
            });
            newInitialEdges.push({
              id: Math.random() * Math.pow(10, 16),
              type: "smoothstep",
              source: selectedNode.id,
              target: nodeName,
            });
          }
        }
      }
      setSelectedNode(null);
    } catch (error) {
      console.log(Error);
    }
  };

//delete node 
  const deleteNode = () => {
    for (let i = newEdge.length - 1; i >= 0; i--) {
      if (selectedNode.id == newEdge[i].source || selectedNode.id == newEdge[i].target){
        // console.log(i,newEdge[i]);
        newInitialEdges.splice(i, 1);
        setNewEdge(newInitialEdges);
        // console.log(newEdge.length)
      }
    }
    for (let i = 0; i < newNode.length; i++) {
      if (selectedNode.id == newNode[i].id) {
        newNode.splice(i, 1);
        newInitialNode.splice(i, 1);
        setNodeNodes(newInitialNode);
        // console.log(newNode.length);
      }
    }
    setNodeNodes(newNode);
  };

//check for trival nodes and single end node
  const [loading, setLoading] = React.useState(false);
  const checkForValidateWorkFlow = async () => {
    try {
      setIsLoading(true);
      let isTrivalNode = false;
      let endNode = false;
      let i = 0;
      let nodecount = 0;
      for (let k = 0; k < newNode.length; k++) {
        for (j = 0; j < newEdge.length; j++) {
          if (newNode[k].id != newEdge[j].source) {
            endNode = true;
            // console.log(endNode,newNode[k].id);
          } else {
            endNode = false;
            // console.log(endNode,newNode[k].id);
            break;
          }
        }
        if (endNode) 
          nodecount++;
        // console.log(nodecount,newNode[k].id);
      }
      while (i < newNode.length) {
        for (let j = 0; j < newEdge.length; j++) {
          if (newNode[i].id != newEdge[j].source &&  newNode[i].id != newEdge[j].target){
            isTrivalNode = true;
          }else{
            isTrivalNode = false;
            break;
          }
        }
        i++;
      }

      if (isTrivalNode == true) {
        throw "Node Without Edge is not allowed";
      } 
      else if(nodecount>1){
        throw "WorkFlow Should be Single EndPoint";
      }
      else if(newNode.length == 0){
        throw "Blank WorkFlow Will not allowed";
      }
      else {
        handleClick()
        let response=await SaveWorkFlowDefinition(workFLowName, workFlowDesc, newNode, newEdge);
        if(response){
          await alert("WorkFlow Created Successfully")
          setIsLoading(false);
          setLoading(false);
          getBack();
          listFlow();
        }
      }
    } catch (error) {
      alert(error);
    }
  };

//funcition for completing the workflow
const completeDraftWorkFlow=(draftedWorkflowjosn,draftedWorkflowname,draftedWorkflowdesc)=>{
  // console.log(draftedWorkflow)
  setNodeNodes(JSON.parse(draftedWorkflowjosn)[0])
  setNewEdge(JSON.parse(draftedWorkflowjosn)[1])
  setWorkFlowDesc(draftedWorkflowdesc)
  setWorkFlowName(draftedWorkflowname)
  setNewWorkPlane(false);
  setFlowBox(false);
  showNodeDataFileds(true);
}

  const handleClick = () => {
    setLoading(true);
  };

//saveasDreaft functionality
const completeSaveasDraft=async()=>{
  await  saveAsDraft(workFLowName,workFlowDesc,newNode,newEdge)
  if(true){
    await alert("WorkFlow save as draft Successfully")
    getBack()
  }
}

//check for workflow name and description
  const onChangeWorkFlowPlane = () => {
    try {
      if (workFLowName == null || workFlowDesc == null) {
        throw "please provide workflow name and description";
      }
      setNewWorkPlane(false);
      setFlowBox(false);
      showNodeDataFileds(true);
    } catch (error) {
      console.log(error);
    }
  };

  const getBack=()=>{
    setNewWorkPlane(true);
    setFlowBox(true);
    showNodeDataFileds(false);
    setNodeNodes([])
    setNewEdge([])
  }
  return (
    <>
      <div>
        {NodeDataFields ? (
          <Grid xl={1}>
            <IconButton aria-label="delete" sx={{ ml: 3, mt: 3 }}>
              <ArrowBackIosNewIcon 
                onClick={()=>getBack()}
              />
            </IconButton>
          </Grid>
        ) : null}
        {newWorkPlane ? (
          <Typography
            variant="h4"
            gutterBottom
            component="div"
            textAlign="center"
            sx={{ m: 6 }}
          >
            MANAGE WORKFLOW
          </Typography>
        ) : null}
        {NodeDataFields ? (
          <Typography
            variant="h4"
            gutterBottom
            component="div"
            textAlign="center"
            sx={{ m: 2 }}
          >
            MANAGE WORKFLOW
          </Typography>
        ) : null}

        {flowBox ? (
          <div>
            <Box sx={{ m: 2 }}>
              <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="center"
              >
                <Grid>
                  <TextField
                    id="filled-basic"
                    label="Workflow Name"
                    variant="outlined"
                    onChange={(workflow) =>
                      setWorkFlowName(workflow.target.value)
                    }
                    sx={{ m: 2 }}
                  />
                </Grid>
                <Grid>
                  <TextField
                    id="multiline-static"
                    label="Description"
                    multiline
                    rows={1}
                    variant="outlined"
                    onChange={(description) =>
                      setWorkFlowDesc(description.target.value)
                    }
                    sx={{ m: 2 }}
                  />
                </Grid>
              </Grid>
            </Box>
            <Box
              sx={{
                maxWidth: "100%",
                mt: 3,
              }}
            >
              <Grid
                container
                spacing={3}
                alignItems="center"
                justifyContent="center"
              >
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    startIcon={<SaveIcon />}
                    onClick={() => onChangeWorkFlowPlane()}
                  >
                    Save
                  </Button>
                  <Button variant="contained"  startIcon={<DoDisturbIcon />}onClick={() => setFlowBox(false)}>
                    Cancel
                  </Button>
                </Stack>
              </Grid>
            </Box>
          </div>
        ) : NodeDataFields ? (
          <div className="" onClick={() => alert("Hello")}>
            {/* <p className="btn-text">Update</p> */}
          </div>
        ) : (
          <div>
            <Box sx={{ textAlign: "center" }}>
              <Button variant="contained"  startIcon={<AddIcon />} onClick={() => setFlowBox(true)}>
                Create Workflow
              </Button>
            </Box>
          </div>
        )}
      </div>
      {NodeDataFields ? (
        <div>
          <Box sx={{ flexGrow: 1, m: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={12} direction="">
                <Item>
                  {" "}
                  <Typography variant="h5">{workFLowName}</Typography>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </div>
      ) : null}
      <div>
        <Box sx={{ flexGrow: 1, m: 3 }}>
          <Grid container spacing={2}>
            {newWorkPlane ? (
              <Grid item xs={12} lg={2}>
                <Item>
                  <div>
                    {workflowList == null ? (
                      <p>No workflow you have</p>
                    ) : (
                      workflowList.map((list) => (
                        <div onClick={() => setWorkFlow(list)} key={list.id}>
                          <Box
                            sx={{
                              display: "flex",
                              flexWrap: "wrap",
                              "& > :not(style)": {
                                width: 20,
                                height: 40,
                              },
                            }}
                          >
                            <Grid item xs={12}>
                              <Paper
                                elevation={4}
                                sx={{ height: 30 }}
                                textAlign="center"
                              >
                                <Typography textAlign="center" sx={{ m: 1 }}>
                                  {list.workflowName}
                                </Typography>
                              </Paper>
                            </Grid>
                          </Box>
                          {list.SaveAsDraft == true ? (
                            <p className="draft-text" onClick={()=>completeDraftWorkFlow(list.WorkFlowJSON,list.workflowName,list.WorkFlowDescription)}>Save as draft</p>
                          ) : null}
                        </div>
                      ))
                    )}
                  </div>
                </Item>
              </Grid>
            ) : null}
            {newWorkPlane ? (
              <Grid item xs={12} lg={10}>
                <Item>
                  <Box sx={style}>
                    <Paper elevation={2}>
                      <ReactFlowProvider>
                        <ReactFlow
                          defaultNodes={newWorkPlane ? items : newNode}
                          defaultEdges={newWorkPlane ? edge : newEdge}
                          onNodesChange={
                            newWorkPlane ? onitemsChange : onNodeChange
                          }
                          onEdgesChange={
                            newWorkPlane ? onEdgeChange : onNewEdgeChange
                          }
                          onInit={onInit}
                          onConnect={onConnect}
                          connectionLineStyle={{
                            stroke: "black",
                            strokeWidth: 2,
                          }}
                          connectionLineType="bezier"
                          snapToGrid={true}
                          onEdgeUpdate={onEdgeUpdate}
                          snapGrid={[16, 16]}
                          onNodeClick={
                            captureElementClick ? onNodeClick : undefined
                          }
                          nodesConnectable={true}
                          nodesDraggable={true}
                        >
                          <Background gap={20} color="black" />
                          <MiniMap nodeColor="black" />
                          <Controls />
                        </ReactFlow>
                      </ReactFlowProvider>
                    </Paper>
                  </Box>
                </Item>
              </Grid>
            ) : null}
      {/* workflow component for making new workflow */}
            {NodeDataFields ? (
              <Grid item xs={12} lg={12}>
                <Item>
                  <Box sx={style}>
                    <Paper elevation={2}>
                      <ReactFlowProvider>
                        <ReactFlow
                          defaultNodes={ newNode}
                          defaultEdges={ newEdge}
                          onNodesChange={onNodeChange}
                          onEdgesChange={onNewEdgeChange}
                          onInit={onInit}
                          onConnect={onConnect}
                          connectionLineStyle={{
                            stroke: "black",
                            strokeWidth: 2,
                          }}
                          connectionLineType="bezier"
                          snapToGrid={true}
                          onEdgeUpdate={onEdgeUpdate}
                          snapGrid={[16, 16]}
                          onNodeClick={
                            captureElementClick ? onNodeClick : undefined
                          }
                          nodesConnectable={true}
                          nodesDraggable={true}
                        >
                          <Background gap={20} color="black" />
                          <MiniMap nodeColor="black" />
                          <Controls />
                        </ReactFlow>
                      </ReactFlowProvider>
                    </Paper>
                  </Box>
                </Item>
              </Grid>
            ) : null}
            {NodeDataFields ? (
              <Grid item xs={12} lg={12}>
                <Box sx={{ flexGrow: 1, m: 3 }}>
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      lg={3}
                      sx={{ textAlign: "center" }}
                    >
             
                      <TextField
                        id="filled-basic"
                        label="Node Name"
                        variant="filled"
                        onChange={(nodeName) =>
                          setNodeName(nodeName.target.value)
                        }
                      />
                    </Grid>
                    <Grid item xs={12} lg={3}></Grid>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      lg={6}
                      sx={{ textAlign: "center" }}
                    >
                      <Typography>
                        Please select a node for its child
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            ) : null}
            {NodeDataFields ? (
              <Grid item xs={12} lg={12}>
                <Box sx={{ flexGrow: 1, m: 3, mt: 1 }}>
                  <Grid container spacing={0}>
                    <Grid
                      item
                      xs={12}
                      lg={2}
                      sx={{ mb: 1, textAlign: "center" }}
                    >
                      <Button variant="contained" startIcon={<AddIcon />} onClick={() => createNode() }>
                        Add Node
                      </Button>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      lg={2}
                      sx={{ mb: 1, textAlign: "center" }}
                    >
                      <Button variant="contained" startIcon={<DeleteIcon />} onClick={() => deleteNode()}>
                        Delete Node
                      </Button>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      lg={2}
                      sx={{ mb: 1, textAlign: "center" }}
                    >
                      <Button
                        variant="contained"
                        startIcon={<SaveIcon />}
                        onClick={() => completeSaveasDraft()}
                      >
                        Save As Draft
                      </Button>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      {" "}
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      lg={2}
                      sx={{ mb: 1, textAlign: "center" }}
                    >
                      <LoadingButton
                        onClick={() => {
                         checkForValidateWorkFlow()
                        }}
                        endIcon={<SendIcon />}
                        loading={isLoading?loading:null}
                        loadingPosition="end"
                        variant="contained"
                      >
                        Save Workflow{" "}
                      </LoadingButton>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            ) : null}
          </Grid>
        </Box>
      </div>
    </>
  );
};
export default WorkFow;
