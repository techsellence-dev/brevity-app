import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import EmailIcon from "@mui/icons-material/Email";
export default function Forwardfunction() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Paper
          sx={{
            m: 1,
            width: 800,
      height:400,
      maxWidth: '100%',
            backgroundColor: "grey",
          }}
        >

          <Box sx={{m:3}}>
            <Typography>Task to be sent to:</Typography> <Typography>Persons Name:</Typography>{" "}
            <Typography>Due date :1/1/11</Typography> <Typography>Subject Requesting Documents </Typography>{" "}
            <Typography>Body</Typography>
            <Box
      sx={{
        width: 800,
       
        maxWidth: '100%',
      }}
    > <TextField
          id="outlined-textarea"
          fullWidth
          multiline={true}
          rows={6}
         
        />  </Box>
         <Button variant="outlined" sx={{mt:3}}>Send</Button>
          </Box>{" "}

        </Paper>
        <Paper
          sx={{
            m: 1,
            width: 600,
            maxWidth: '100%',
height:200,
maxHeight:"100%",
            backgroundColor: "grey",
          }}
        >
          {" "}
          <Box
            sx={{
              display: "flex",
              m: 5,maxHeight:"100%",maxWidth:"100%"
            }}
          >
            {" "}
            <Avatar
              sx={{ mr: 3, width: 100, height: 100 }}
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
            />{" "}
            <Box>
              {" "}
              <Typography>john</Typography>{" "}
              <Typography>Employee id:224</Typography>{" "}
              <Typography>Group Chil Development</Typography>{" "}
              <Typography>reports to john</Typography>{" "}
         
            </Box>{" "}
          </Box>
        </Paper>
        <Paper  sx={{
            m: 1,
            width: 800,
            maxWidth: '100%',
height:200,
maxHeight:"100%",
            backgroundColor: "grey",
          }}>Files</Paper>
      </Box>
    </>
  );
}
