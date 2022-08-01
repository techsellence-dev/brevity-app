import React, { useState, useEffect, createContext } from "react";
import Navbar from "./components/NavBar";
import Stack from "@mui/material/Stack";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../../aws-exports";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Uploader from "./components/Uploader";
import * as queries from "../../graphql/queries";
import { API } from "aws-amplify";
import AppBar from "./components/appbar/AppBar";
import DrawerHeader from "./components/appbar/DrawerHeader";
import Main from "./components/appbar/Main";
import Constants from "../../config/Constants";
import { Encrept } from './utils/Encrept';
import { RemoveLS } from './utils/RemoveLS';
import getOrderDetails from "../../WorkflowComponents/server/GetOrders";
import { Auth } from "aws-amplify";
import Comments from "./components/comments/Comments";
import ToolBar1 from './components/ToolBar';
// import { onCreateUserNotifications } from '../../../graphql/subscriptions';
import { onCreateUserNotifications } from '../../graphql/subscriptions'
Amplify.configure(awsExports);

const drawerWidth = Number(Constants.DRAWER_WIDTH);
export const GlobalState = createContext();   //create context for access data in childs
export default function Home() {
  const [setAuthedUser] = useState("");
  const [open, setOpen] = useState(false);
  // const [fileUrl, setFileUrl] = useState(null);
  const [orderData, setOrderData] = useState([]);   //state that fetch order details and set to task box in home bar

  const fetchTaskDetails = (items) => {       //function that fetch taskdetails from navbar
    setOrderData(items);
  };
  const theme = useTheme();
  const listNotifications = async () => {
    const listNotifData = await API.graphql({
      query: queries.listUserNotifications,
    });
    const notifica = listNotifData.data.listUserNotifications.items;
    RemoveLS('notif');
    Encrept("notif", notifica)
  };
  const getOrderDetailsForUser = async () => {      //getting the order details for particular user
    let currentUser = await Auth.currentAuthenticatedUser();
    setAuthedUser(currentUser.attributes.email);
    const orderDetailsSet = await getOrderDetails(currentUser.attributes.email);
    const data1 = Array.from(orderDetailsSet);
    RemoveLS('NavbarData');
    Encrept("NavbarData", data1);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  // const getFileUrl = (url) => {
  //   setFileUrl(url);
  // };
  return (
    <>
      <GlobalState.Provider
        value={{
          order: orderData,
          taskData: fetchTaskDetails,
          // getFileUrl: getFileUrl,
        }}
      >
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          {/* <ToolBar /> */}
          <AppBar position="fixed" open={open}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>
              <ToolBar1 />
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth, flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="persistent"
            anchor="left" open={open} fixed="true"  >
            <Stack>
              <DrawerHeader>
                <Box sx={{ width: "100%", height: 120 }} justifyItems="flex-end">
                  <Box fullWidth style={{ textAlign: "right" }}>
                    <IconButton
                      onClick={handleDrawerClose}
                      style={{ marginTop: "10px", background: "#3198c3", color: "white", }}>
                      {theme.direction === "ltr" ? (
                        <ChevronLeftIcon />
                      ) : (
                        <ChevronRightIcon />
                      )}
                    </IconButton>
                  </Box>
                  <Typography variant="h4" gutterBottom component="div" align="center">
                    Task List
                  </Typography>
                </Box>
              </DrawerHeader>
              <Divider />
              {open && <Navbar />}
            </Stack>
          </Drawer>
          <Main open={open}>
            <DrawerHeader />
            {/* filviewer part   */}
            <div style={{ width: "100%", height: 800, pointerEvents: "initial", display: "flex", alignItems: "center", justifyContent: "center", }}>
              {/* {fileUrl == null ? null : (
                <iframe title="" style={{ width: "90%", height: 750, pointerEvents: "inherit", }}  src={fileUrl}></iframe>
              )} */}
            </div>
            <Uploader />
            <Comments
        commentsUrl="http://localhost:3000"
        currentUserId="1" />
      </Main>
        </Box>
      </GlobalState.Provider>
    </>
  );
}