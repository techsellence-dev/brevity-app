import React from "react";
import "../home.css";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Box } from "@mui/system";
import Grid from '@mui/material/Grid';
import Stack from "@mui/material/Stack";
export default function ForwardFunction(){
  const [value, setValue] = React.useState('female');
 
      const handleChange = (event) => {
        setValue(event.target.value);
      };
    return(
        <>
          {/* <Box
  display="flex"
  justifyContent="center"
  alignItems="center"
  minHeight="100vh"
>

       
</Box> */}

  <FormControl sx={{display:'flex' , justifyContent:'center', alignItems:'center'}}>
      <FormLabel id="demo-controlled-radio-buttons-group">Select Any Of The Following</FormLabel>
      <br />
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="person" control={<Radio />} label="People Under {person}" />
        <FormControlLabel value="brevity" control={<Radio />} label="People Outside The Organisation using brevity" />
        <FormControlLabel value="Email" control={<Radio />} label="People Outside The Organisation via Email" />
      </RadioGroup>
    </FormControl>
 
     
        {/* <Button onClick={handleClose5}>Cancel</Button>
        <Button onClick={descriptionHandler} autoFocus>
          Accept
        </Button> */}
     
   
          
        </>
    )
}