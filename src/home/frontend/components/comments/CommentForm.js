import * as React from "react";
import { Box } from "@mui/system";
import { useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import { Button, Stack} from "@mui/material";


import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";


const CommentForm = ({
  handleSubmit,submitLabel,hasCancelButton = false, handleCancel,initialText = "",
}) => {


  const [text, setText] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <Box>
      <form onSubmit={onSubmit}>   
      {/* <EditorToolbar  /> */}
      <SunEditor
        // setContents="My contents"
        showToolbar={true}
  
       onChange={setText}      
        defaultValue={text} 
        setDefaultStyle="height: auto"
        setOptions={{
          showPathLabel: false,
          buttonList: [
            [
              "bold",
              "underline",
              "italic",
              "strike",
              "list",
              "align",
              "fontSize",
              "formatBlock",
              "table",
              "image","fontColor", "hiliteColor"
            ]
          ]
       
        }}
      />
      
          <Stack  direction="row" spacing={1}>
      
          <Button type="submit" variant="contained"    endIcon={<SendIcon />} > {submitLabel} </Button>
    
        {hasCancelButton && (
          <Button   variant="contained"   onClick={handleCancel} >Cancel</Button>
        )}</Stack>
     
        </form>
      </Box>
      </div>

  );

};
export default CommentForm;
