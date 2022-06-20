import React from "react";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import BasicMenu from "../menu/BasicMenu";
import { styled } from "@mui/system";

const notifications = [
  {
    id: 0,
    label: "First notification",
    status: "seen",
  },
  {
    id: 1,
    label: "Second notification",
    status: "seen",
  },
  {
    id: 1,
    label: "Second notification",
    status: "Unseen",
  },  {
    id: 1,
    label: "Second notification",
    status: "Unseen",
  },  {
    id: 1,
    label: "Second notification",
    status: "Unseen",
  },  {
    id: 1,
    label: "Second notification",
    status: "Unseen",
  },  {
    id: 1,
    label: "Second notification",
    status: "Unseen",
  },  {
    id: 1,
    label: "Second notification",
    status: "Unseen",
  },  {
    id: 1,
    label: "Second notification",
    status: "Unseen",
  },  {
    id: 1,
    label: "Second notification",
    status: "Unseen",
  },  {
    id: 1,
    label: "Second notification",
    status: "Unseen",
  },  {
    id: 1,
    label: "Second notification",
    status: "Unseen",
  },  {
    id: 1,
    label: "Second notification",
    status: "Unseen",
  },  {
    id: 1,
    label: "Second notification",
    status: "Unseen",
  },  {
    id: 1,
    label: "Second notification",
    status: "Unseen",
  },  {
    id: 1,
    label: "Second notification",
    status: "Unseen",
  },
  
];

const NotificationBell = ({ iconColor }) => {
  const [open, setOpen] = React.useState(false);
  const [anchore, setAnchore] = React.useState(null);
  const newNotifications = `You have ${notifications.length} new notifications!`;
  const noNotifications = "No new notifications";
  const handleOpen = (event) => {
        setAnchore(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    //Here navigate to the required notification
    setOpen(false);
  };

  return (
    <div>
      <Tooltip
        title={notifications.length ? newNotifications : noNotifications}
      >
        <IconButton
          color={iconColor}
          onClick={notifications.length ? handleOpen : null}
          anchorEl={anchore}
        >
          <Badge badgeContent={notifications.length} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <BasicMenu
        open={open}
        anchore={anchore}
        handleClose={handleClose}
        menuItems={notifications}
              />
    </div>
  );
};

export default NotificationBell;
