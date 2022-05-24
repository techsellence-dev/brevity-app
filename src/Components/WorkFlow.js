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
import "../Css/AdminPage.css";
import SaveWorkFlowDefinition from "../server/SaveWorkFlowDefinition";
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";
import saveAsDraft from "../server/SaveAsDraft";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import { Divider, TextField, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
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
  const [newNode, setNodeNodes, onNodeChange] = useNodesState(newInitialNode);
  const [newEdge, setNewEdge, onNewEdgeChange] = useNodesState(newInitialEdges);
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
  useEffect(async () => {
    // listWorkflow();
    // console.log(JSON.parse(workflowList[0].WorkFlowJSON))
    const workflowdata = await API.graphql({ query: queries.listWorkflows });
    setWorkFlowList(workflowdata.data.listWorkflows.items);
    setEdge(JSON.parse(workflowList[0].WorkFlowJSON)[1]);
    setItems(JSON.parse(workflowList[0].WorkFlowJSON)[0]);
  }, []);
  const listWorkflow = async () => {
    // const workflowdata=await API.graphql({query:queries.listWorkflows});
    // setWorkFlowList(workflowdata.data.listWorkflows.items);
  };
  const setWorkFlow = (data) => {
    console.log(data);
    setEdge(JSON.parse(data.WorkFlowJSON)[1]);
    setItems(JSON.parse(data.WorkFlowJSON)[0]);
  };
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
          for (var i = 0; i < newNode.length; i++) {
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
    // console.log(newNode.length);
  };
  const showjson = () => {
    console.log(newNode, newEdge);
  };
  const deleteNode = () => {
    for (var i = newEdge.length - 1; i >= 0; i--) {
      if (
        selectedNode.id == newEdge[i].source ||
        selectedNode.id == newEdge[i].target
      ) {
        // console.log(i,newEdge[i]);
        newInitialEdges.splice(i, 1);
        setNewEdge(newInitialEdges);
        // console.log(newEdge.length)
      }
    }
    for (var i = 0; i < newNode.length; i++) {
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
  const checkForValidateWorkFlow = () => {
    try {
      let isTrivalNode = false;
      let endNode = false;
      var i = 0;
      let nodecount = 0;
      for (var k = 0; k < newNode.length; k++) {
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
        if (endNode) nodecount++;
        // console.log(nodecount,newNode[k].id);
      }
      while (i < newNode.length) {
        for (var j = 0; j < newEdge.length; j++) {
          if (
            newNode[i].id != newEdge[j].source &&
            newNode[i].id != newEdge[j].target
          ) {
            isTrivalNode = true;
          } else {
            isTrivalNode = false;
            break;
          }
        }
        i++;
      }

      if (isTrivalNode == true || nodecount > 1 || newNode.length==0) {
        throw "wrong workflow type";
      } else {
        SaveWorkFlowDefinition(workFLowName, workFlowDesc, newNode, newEdge);
        // console.log("Saving start")
      }
    } catch (error) {
     alert(error);
    }
  };

  return (
    <>
      <div >
       
      <Typography variant="h4" gutterBottom component="div" textAlign="center">
       MANAGE WORKFLOW
      </Typography>
    
        {flowBox ? (
          <div className="workflow-name-container">
            <div className="title-input">
              <Box
                sx={{
                  width: 1000,
                  maxWidth: "100%",
                  
                  m: 2,
                
                }}
              >
                <TextField
                  id="filled-basic"
                  fullWidth
                  label="Workflow Name"
                  variant="outlined"
                  
                  onChange={(workflow) =>
                    setWorkFlowName(workflow.target.value)
                  }
                />
              </Box>
            </div>
            <div >
              <Box
                sx={{
                  width: 1000,
                  maxWidth: "100%",
                  m: 2,
                  textAlign:"center",
                }}
              >
                {" "}
                <TextField
                  id="multiline-static"
                  label="Description"
                  multiline
                  rows={2}
                  fullWidth
                  variant="outlined"
                  onChange={(description) =>
                    setWorkFlowDesc(description.target.value)
                  }
                />
              </Box>
            </div>
            <Box
                sx={{
                  width: 1000,
                  maxWidth: "100%",
                  m: 2,
                }}
              > 
            <Stack direction="row" spacing={2}>
              <Button variant="contained" onClick={() => setFlowBox(false)}>
                Cancel
              </Button>

              <Button
                variant="contained"
                onClick={() => onChangeWorkFlowPlane()}
              >
                Save
              </Button>
            </Stack>
            </Box>
          </div>
        ) : NodeDataFields ? (
          <div className="" onClick={() => alert("Hello")}>
            {/* <p className="btn-text">Update</p> */}
          </div>
        ) : (
          <div >
            <Box sx={{textAlign:"center"}}> 
                <Button variant="contained"  onClick={() => setFlowBox(true)}>
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
              <Grid item xs={12} lg={12}>
                <Item>
                  {" "}
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
              <Grid item xs={12} lg={12}>
                <Box sx={{ flexGrow: 1, m: 3 }}>
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      lg={3}
                      sx={{ textAlign: "center" }}
                    >
                      {" "}
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
                      sm={6}
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
              <Grid item xs={12} lg={12}>
                <Box sx={{ flexGrow: 1, m: 3, mt: 1 }}>
                  <Grid container spacing={0}>
                    <Grid
                      item
                      xs={12}
                      lg={2}
                      sx={{ mb: 1, textAlign: "center" }}
                    >
                      <Button variant="contained" onClick={() => createNode()}>
                        Add Node
                      </Button>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      lg={2}
                      sx={{ mb: 1, textAlign: "center" }}
                    >
                      <Button variant="contained" onClick={() => deleteNode()}>
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
                        onClick={() =>
                          saveAsDraft(
                            workFLowName,
                            workFlowDesc,
                            newNode,
                            newEdge
                          )
                        }
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
                      <Button
                        variant="contained"
                        onClick={() =>
                           checkForValidateWorkFlow()
                        }
                      >
                        Save Workflow
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </div>
      ) : null}
      <div className="flow-list-div" >
        {newWorkPlane ? (
          <div className="workflow-list">
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
                        m: 1,
                        width: 250,
                        height: 30,
                      },
                    }}
                  >
                    <Paper elevation={4}>
                      <Typography textAlign="center">
                        {list.workflowName}
                      </Typography>
                    </Paper>
                  </Box>
                  {list.SaveAsDraft == true ? (
                    <p className="draft-text">Save as draft</p>
                  ) : null}
                </div>
              ))
            )}
          </div>
        ) : null}
        <Grid item xs={12} lg={12}>
          <Item>
            {" "}
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
      </div>
    </>
  );
};
export default WorkFow;
