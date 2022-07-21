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
import { API } from 'aws-amplify';
import * as mutations from '../../../../graphql/mutations';
import * as queries from '../../../../graphql/queries';
const NotificationBell = ({ iconColor }) => {
  const [status, setStatus] = useState("Unseen")
  const [bgcolor, setBgcolor] = useState("white")
  const [listnf, setListnf] = useState([]);
  const [length, setLength] = useState([]);
  const [mainlength, setMainLength] = useState("")
  function clicky() {
    console.log("yes")
    setBgcolor("white")
    setStatus("seen")
  }
  useEffect(() => {
    listNotifbyUnseenStatus();
    listNotifications()
  }, [])
  const listNotifbyUnseenStatus = async () => {
    try {
      const listNotif = await API.graphql({ query: queries.userByNotifStatus, variables: { NotificationStatus: "UNSEEN" } });
      // console.log(listNotif.data.userByNotifStatus.items)
      setLength(listNotif.data.userByNotifStatus.items)
      setMainLength(listNotif.data.userByNotifStatus.items.length)
      // console.log(mainlength)
      // setLength(listNotif.data.userByNotifStatus.items)
    } catch (error) {
      console.log("Error in list by status", error)
      throw new Error(error)
    }
  }
  const listNotifications = async () => {
    try {
      const listNotifData = await API.graphql({ query: queries.listUserNotifications });
      // console.log(listNotifData.data.listUserNotifications.items);
      setListnf(listNotifData.data.listUserNotifications.items)
      // console.log(listnf)
      // console.log(listnf.length)
    } catch (error) {
      console.log("Error in listing", error)
      throw new Error(error)
    }
  }
  const convertStatus = async () => {
    try {
      const statusData = {
        NotificationStatus: "UNSEEN",
      }
      const userNotifData = await API.graphql({ query: queries.userByNotifStatus, variables: { NotificationStatus: statusData.NotificationStatus } });
      console.log("Notif with Unseen status", userNotifData.data.userByNotifStatus)
      const listItems = userNotifData.data.userByNotifStatus.items;
      console.log(listItems.length)
      for (var i = 0; i < listItems.length; i++) {
        console.log(i)
        console.log(listItems[i].id)
        const updateList = {
          id: listItems[i].id,
          _version: listItems[i]._version,
          NotificationStatus: "SEEN"
        }
        const updateTheNotifications = await API.graphql({ query: mutations.updateUserNotifications, variables: { input: updateList } });
        console.log("updated notifs are", updateTheNotifications.data.updateUserNotifications);
      }
      const listNotifData = await API.graphql({ query: queries.listUserNotifications });
      console.log(listNotifData);
      listNotifications()
    }
    catch (error) {
      console.log("Error in converting", error);
      throw new Error(error)
    }
  }
  const [open, setOpen] = React.useState(false);
  const [anchore, setAnchore] = React.useState(null);
  const newNotifications = `You have ${mainlength} new notifications!`;
  const noNotifications = "No new notifications";
  const handleOpen = (event) => {
    setAnchore(event.currentTarget);
    convertStatus()
    setOpen(true);
  };
  const handleClose = () => {
    //Here navigate to the required notification
    setOpen(false);
    listNotifbyUnseenStatus()
  };
  return (
    <div>
      <Tooltip
        title={length ? newNotifications : noNotifications}
      >
        <IconButton
          color={iconColor}
          onClick={handleOpen}
          anchorEl={anchore}
        >
          <Badge badgeContent={mainlength} color="error">
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
        style={{ padding: "30px" }}
      >
        {length.map((item) => (
          <Box style={{ padding: "5px" }}>
            <MenuItem onClick={handleClose} style={{ border: "1px solid black", borderRadius: "10px", backgroundColor: "skyBlue" }}>{item.NotificationContent}</MenuItem>
          </Box>
        ))}

        {listnf.map((item) => (
          <Box bgcolor="white" style={{ padding: "5px" }}>
            <MenuItem onClick={handleClose} style={{ border: "1px solid black", borderRadius: "10px" }}>{item.NotificationContent}</MenuItem>
          </Box>
        ))}
      </Menu>
    </div>
  );
};
export default NotificationBell;