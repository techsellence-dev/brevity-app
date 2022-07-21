import React, { useEffect, useState } from "react";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import BasicMenu from "../menu/BasicMenu";
import { styled } from "@mui/system";
import { listNotifications } from '../../../../gqlFunctions/NotifTable'
import { API } from 'aws-amplify';
import * as mutations from '../../../../graphql/mutations';
import * as queries from '../../../../graphql/queries';
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
  },
  {
    id: 1,
    label: "Second notification",
    status: "Unseen",
  },
  {
    id: 1,
    label: "Second notification",
    status: "Unseen",
  },
  {
    id: 1,
    label: "Second notification",
    status: "Unseen",
  },
  {
    id: 1,
    label: "Second notification",
    status: "Unseen",
  },
  {
    id: 1,
    label: "Second notification",
    status: "Unseen",
  },
  {
    id: 1,
    label: "Second notification",
    status: "Unseen",
  },
  {
    id: 1,
    label: "Second notification",
    status: "Unseen",
  },
  {
    id: 1,
    label: "Second notification",
    status: "Unseen",
  },
  {
    id: 1,
    label: "Second notification",
    status: "Unseen",
  },
  {
    id: 1,
    label: "Second notification",
    status: "Unseen",
  },
  {
    id: 1,
    label: "Second notification",
    status: "Unseen",
  },
  {
    id: 1,
    label: "Second notification",
    status: "Unseen",
  },
  {
    id: 1,
    label: "Second notification",
    status: "Unseen",
  },
];

const NotificationBell = ({ iconColor }) => {
  const [status, setStatus] = useState("Unseen")
  const [bgcolor, setBgcolor] = useState("#69a832")
  const [listnf, setListnf] = useState([]);
  function clicky() {
    console.log("yes")
    setBgcolor("white")
    setStatus("seen")
  }
  useEffect(() => {
    const listNotifbyUnseenStatus = async () => {
      try {
        const listNotif = await API.graphql({ query: queries.userByNotifStatus, variables: { NotificationStatus: "UNSEEN" } });
        console.log(listNotif.data.userByNotifStatus.items)
      } catch (error) {
        console.log("Error in list by status", error)
        throw new Error(error)
      }
    }
    listNotifbyUnseenStatus();

    const listNotifications = async () => {
      try {
        const listNotifData = await API.graphql({ query: queries.listUserNotifications });
        console.log(listNotifData.data.listUserNotifications.items);
        setListnf(listNotifData.data.listUserNotifications.items)
        console.log(listnf)
        console.log(listnf.length)
      } catch (error) {
        console.log("Error in listing", error)
        throw new Error(error)
      }
    }
    listNotifications()
  }, [])


  const [open, setOpen] = React.useState(false);
  const [anchore, setAnchore] = React.useState(null);
  const newNotifications = `You have ${listnf.length} new notifications!`;
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
          <Badge badgeContent={listnf.length} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu"
        anchorEl={anchore}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: { maxHeight: 40 * 8, width: "40ch" },
        }}
      >

        {listnf.map((item) => (
          <Box bgcolor={bgcolor}>
            <MenuItem onClick={clicky}>{item.NotificationContent}</MenuItem>
            {/* {
            item.label
          } */}
          </Box>
        ))}

      </Menu>
    </div>
  );
};

export default NotificationBell;
