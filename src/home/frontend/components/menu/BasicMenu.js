import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { blue } from "@mui/material/colors";

//change colour of menu item based on seen not seen

const BasicMenu = ({ anchore, handleClose, open, menuItems }) => {
  console.log(`anchor in basic menu is ${anchore}`);
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchore}
      open={open}
      onClose={handleClose}
      PaperProps={{
        style: { maxHeight: 40 * 4, width: "40ch" },
      }}
    >
      {menuItems.map((item) => (
        <Box bgcolor={item.status === "Unseen" ? "#328da8" : "#69a832"}>
          <MenuItem onClick={handleClose}>{item.label}</MenuItem>
        </Box>
      ))}
    </Menu>
  );
};

export default BasicMenu;
