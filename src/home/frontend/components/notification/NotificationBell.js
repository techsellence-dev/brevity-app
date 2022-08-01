import React, { useEffect, useState } from "react";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
// import BasicMenu from "../menu/BasicMenu";
// import { styled } from "@mui/system";
import { API } from "aws-amplify";
import * as mutations from "../../../../graphql/mutations";
import { onCreateUserNotifications } from "../../../../graphql/subscriptions";
import * as queries from "../../../../graphql/queries";
import { Encript } from "../../utils/Encript";
import { Decript } from "../../utils/Decript";
import { GetLS } from "../../../frontend/utils/GetLS";
const NotificationBell = ({ iconColor }) => {
  const [listnf, setListnf] = useState([]);
  const [length, setLength] = useState([]);
  const [mainlength, setMainLength] = useState("");
  useEffect(() => {
    listNotifbyUnseenStatus();
    listNotifications();
    subscribe();
  }, []);
  function subscribe() {
    API.graphql({
      query: onCreateUserNotifications,
      variables: {
        userNotificationsId: "abhishek.jangid643@gmail.com",
      },
    }).subscribe({
      next: (data) => {
        console.log("data: ", data);
        listNotifbyUnseenStatus();
        // updateMessage(data.value.data.onCommentByPostId.content)
        // localStorage.setItem('new1', message);
        //  listNotif();
      },
    });
  }

  const listNotifbyUnseenStatus = async () => {
    try {
      const listNotif = await API.graphql({
        query: queries.userByNotifStatus,
        variables: { NotificationStatus: "UNSEEN" },
      });
      console.log("length");
      setLength(listNotif.data.userByNotifStatus.items);
      setMainLength(listNotif.data.userByNotifStatus.items.length);
    } catch (error) {
      console.log("Error in list by status", error);
      throw new Error(error);
    }
  };
  const listNotifications = async () => {
    const coming = GetLS("notif");
    const pan = Decript(coming);
    setListnf(JSON.parse(pan));
  };
  const convertStatus = async () => {
    try {
      const statusData = {
        NotificationStatus: "UNSEEN",
      };
      const userNotifData = await API.graphql({
        query: queries.userByNotifStatus,
        variables: { NotificationStatus: statusData.NotificationStatus },
      });
      // console.log(
      //   "Notif with Unseen status",
      //   userNotifData.data.userByNotifStatus
      // );
      const listItems = userNotifData.data.userByNotifStatus.items;
      console.log(listItems);
      for (let i = 0; i < listItems.length; i++) {
        // console.log(i);
        // console.log(listItems[i].id);
        const updateList = {
          id: listItems[i].id,
          _version: listItems[i]._version,
          NotificationStatus: "SEEN",
        };
        const updateTheNotifications = await API.graphql({
          query: mutations.updateUserNotifications,
          variables: { input: updateList },
          // authMode: "API_KEY",
          authMode: "AMAZON_COGNITO_USER_POOLS",
        });
        // console.log(
        //   "updated notifs are",
        //   updateTheNotifications.data.updateUserNotifications
        // );
      }
      const listNotifData = await API.graphql({
        query: queries.listUserNotifications,
      });
      // console.log(listNotifData);
      // listNotifications();
    } catch (error) {
      console.log("Error in converting", error);
      throw new Error(error);
    }
  };
  const listNotifications123 = async () => {
    try {
      const listNotifData = await API.graphql({
        query: queries.listUserNotifications,
      });
      const notifica = listNotifData.data.listUserNotifications.items;
      // console.log(notifica)
      Encript("notif", notifica);
    } catch (error) {
      console.log("Error in listing", error);
      throw new Error(error);
    }
  };
  const [open, setOpen] = React.useState(false);
  const [anchore, setAnchore] = React.useState(null);
  const newNotifications = `You have ${mainlength} new notifications!`;
  const noNotifications = "No new notifications";
  const handleOpen = (event) => {
    setAnchore(event.currentTarget);
    convertStatus();
    setOpen(true);
  };
  const handleClose = () => {
    //Here navigate to the required notification
    convertStatus();
    listNotifbyUnseenStatus();
    listNotifications123();
    listNotifications();

    setOpen(false);
  };
  return (
    <div>
      <Tooltip title={length ? newNotifications : noNotifications}>
        <IconButton color={iconColor} onClick={handleOpen} anchorEl={anchore}>
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
          style: { maxHeight: 40 * 10, width: "40ch" },
        }}
        style={{ padding: "30px", marginTop: "15px" }}
      >
        {length.map((item) => (
          <Box style={{ padding: "5px" }}>
            <MenuItem
              onClick={handleClose}
              style={{
                border: "1px solid black",
                borderRadius: "10px",
                backgroundColor: "skyBlue",
              }}
            >
              {item.NotificationContent}
            </MenuItem>
          </Box>
        ))}

        {listnf.map((item) => (
          <Box bgcolor="white" style={{ padding: "5px" }}>
            <MenuItem
              onClick={handleClose}
              style={{ border: "1px solid grey", borderRadius: "10px" }}
            >
              {item.NotificationContent}
            </MenuItem>
          </Box>
        ))}
      </Menu>
    </div>
  );
};
export default NotificationBell;
