import React, { useCallback, memo, useState, useEffect,useContext} from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TreeView from "@mui/lab/TreeView";
import TreeItem, { treeItemClasses } from "@mui/lab/TreeItem";
import Typography from "@mui/material/Typography";
import MailIcon from "@mui/icons-material/Mail";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CommentIcon from "@mui/icons-material/Comment";
import IconButton from "@mui/material/IconButton";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import FileCopyTwoToneIcon from '@mui/icons-material/FileCopyTwoTone';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { FcFolder } from "react-icons/fc";
import { FcEmptyTrash } from "react-icons/fc";
import { GlobalState } from "../Home";

import * as queries from '../../../graphql/queries';
import * as mutations from '../../../graphql/mutations'
import {API,Auth, graphqlOperation,Storage, label} from "aws-amplify";
import Amplify from "aws-amplify";
Amplify.configure({
  Auth: {
      identityPoolId: "us-east-1:64a85e4d-9bb4-44b5-9866-e3e160cab005", //REQUIRED - Amazon Cognito Identity Pool ID
      region: "us-east-1", // REQUIRED - Amazon Cognito Region
      userPoolId: "us-east-1_tLnpzMsI0", //OPTIONAL - Amazon Cognito User Pool ID
      userPoolWebClientId: "6qjgne1dbig18no8trj3e0kkpa", //OPTIONAL - Amazon Cognito Web Client ID
  },
  Storage: {
      AWSS3: {
          bucket: "brevitystorage151458-staging", //REQUIRED -  Amazon S3 bucket name
          region: "us-east-1", //OPTIONAL -  Amazon service region
      }
  }
});

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [`& .${treeItemClasses.content}`]: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    "&.Mui-expanded": {
      fontWeight: theme.typography.fontWeightRegular,
    },
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
    "&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused": {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
      color: "var(--tree-view-color)",
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: "inherit",
      color: "inherit",
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 0,
    [`& .${treeItemClasses.content}`]: {
      paddingLeft: theme.spacing(2),
    },
  },
}));

function StyledTreeItem(props) {
  const {
    bgColor,
    color,
    labelIcon: LabelIcon,
    labelInfo,
    labelText,
    ...other
  } = props;

  return (
    <StyledTreeItemRoot
      label={
        <Box sx={{ display: "flex", alignItems: "center", p: 0.5, pr: 0 }}>
          <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
          <Typography
            variant="body2"
            sx={{ fontWeight: "inherit", flexGrow: 1 }}
          >
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </Box>
      }
      style={{
        "--tree-view-color": color,
        "--tree-view-bg-color": bgColor,
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};
function File() {

  const[fileName,setfileName]=useState("");
	const[filePath,setfilePath]=useState("");
	const [filelist,setfilelist]=useState([])
  const [files3Url,seFileS3url]=useState(null);
  const {order,getFileUrl}=useContext(GlobalState)
  // console.log(order)
  useEffect(() =>{
         fetchorderfile()
  },[])
  
  
  const fetchorderfile=async()=>{
    try {
      const orderfile =await API.graphql({query:queries.taskByorderTasksId,variables:{orderTasksId:order.orderID}})
     // console.log(orderfile.data.taskByorderTasksId.items)
      const filedate =orderfile.data.taskByorderTasksId.items
      const sortedData= date(filedate)
        setfilelist(sortedData)
        console.log(filelist)
      } catch (error) {
        console.log(error)
      }
  }
  
 const date=(filedate)=>{
    for (let i =1 ; i<filedate.length; i++) {
      let j = i - 1
      let temp = filedate[i]
      while (j >= 0 && filedate[j].createdAt > temp.createdAt) {
        filedate[j + 1] = filedate[j]
        j--
      }
      filedate[j+1] = temp
    }
    console.log(filedate)
    return filedate
  }
  const[icon,seticon]= useState(true);
  const deleteItem = async (value)=>{
    for (var i = 0; i < filelist.length; i++) {
      if (value.orderID === filelist[i].orderID) {
        filelist.splice(i, 1);
        // console.log(filelist);
       
        console.log("data deleted");
        const orderFileData=await API.graphql({
          query:mutations.deleteOrder,
          variables:{
            input:{orderID:value.OrderID}
          }
        })
        console.log(orderFileData)
        setfilelist([...filelist]);
      }  
    }
   }
  

async function fetchdata(filedata){
	try {
		//  const fileAccessURL = await Storage.get(filedata.UserFilePathList[0]);
  

   const fileAccessURL=  await Storage.get('sample.pdf', { 
         level: 'public',
         expires: 10,
     });
    //  getFileUrl(fileAccessURL);
    //  console.log(fileAccessURL)
	} catch (error) {
		console.log('error')
	}
}

  return (
    <>
      
      <TreeView
        aria-label="gmail"
        defaultExpanded={["3"]}
        defaultCollapseIcon={<ArrowDropDownIcon />}
        defaultExpandIcon={<ArrowRightIcon />}
        defaultEndIcon={<div style={{ width: 24 }} />}
        sx={{ height: 300, flexGrow: 1, maxWidth: 800,width:300}}
      >
        <StyledTreeItem  nodeId="3" labelText="File3" labelIcon={FcFolder}  >
          <List
            style={{ marginLeft: "20%",color:"black" }}
            sx={{ width: "100%", maxWidth: 200, bgcolor: "background.paper" }}
          >
            {filelist.map((items) => (
                <> 
                  <Box style={{display:"flex",paddingBottom:"0.1px"}}> 
                    <ListItem
                      key={items.TaskID}
                      disableGutters
                        // onClick={() => deleteItem(items)} 
                    >
                    {
                      items.UserFilePathList.map((files)=>(
                        <ListItem key={items.files} 
                          style={{display:'flex',flexDirection: 'column',}}
                          secondaryAction={
                          <IconButton aria-label="comment">
                          {icon ? <DeleteRoundedIcon  onClick={() => deleteItem(items)} style={{ color: "#4169E1" ,fontSize:"large"}} />:null}
                            {/* <DeleteIcon  onClick={() => deleteItem(items)} />  */}
                          </IconButton>
                        } >
                          <IconButton sx={{flexGrow:1}}><PictureAsPdfIcon style={{ color: "#D32F2F",fontSize:"large" }} /></IconButton>
                          <ListItemText onClick={()=>fetchdata(items)} primary={files} />
                        </ListItem>
                      ))
                    }
                  </ListItem>
                </Box> 
              </>
            ))} 
           </List>  
        </StyledTreeItem>
        
      </TreeView>
    </>
  );
}
export default File;
