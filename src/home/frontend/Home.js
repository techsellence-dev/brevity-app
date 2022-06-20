import React, { useState, useEffect, createContext } from "react";
import "./components/home.css";
import Navbar from "./components/NavBar";
import Stack from "@mui/material/Stack";
import FileViewer from "./components/FileViewer";
import RichTextEditor from "./components/RichTextEditor";
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
import { Outlet } from "react-router-dom";
import TaskName from "./components/TaskName";
import Uploader from "./components/Uploader";
import * as queries from "../../graphql/queries";
import { API } from "aws-amplify";
import AppBar from "./components/appbar/AppBar";
import DrawerHeader from "./components/appbar/DrawerHeader";
import Main from "./components/appbar/Main";
import Constants from "../../config/Constants";
import MenuWebapp from "./components/menu/MenuWebapp";
import NotificationBell from "./components/notification/NotificationBell";
import { useMediaQuery } from "@mui/material";
import HomeFilebutton from "./components/button/HomeFilebutton";
import HomeForwardButton from "./components/button/HomeFowardButton";
import HomeNextButton from "./components/button/HomeNextButton";
import HomeSendBackButton from "./components/button/HomeSendBackButton";
import HomeRejectButton from "./components/button/HomeRejectButton";
import { width } from "@mui/system";

Amplify.configure(awsExports);

const drawerWidth = Number(Constants.DRAWER_WIDTH);
//create context for access data in childs
export const GlobalState = createContext();
export default function Home() {
  //state that fetch order details and set to task box in home bar
  const [orderData, setOrderData] = useState([]);
  //function that fetch taskdetails from navbar
  const fetchTaskDetails = (items) => {
    setOrderData(items);
    // console.log(orderData)
  };
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  useEffect(() => {
    const listNotifbyStatus = async () => {
      try {
        const enumData = {
          NotificationStatus: "UNSEEN",
        };
        const listNotif = await API.graphql({
          query: queries.userByNotifStatus,
          variables: { NotificationStatus: enumData.NotificationStatus },
        });
      } catch (error) {
        console.log("Error in list by status", error);
        throw new Error(error);
      }
    };

    listNotifbyStatus();
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <GlobalState.Provider
        value={{ order: orderData, taskData: fetchTaskDetails }}
      >
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
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
              <Typography
                style={{ marginRight: "10%" }}
                variant="h6"
                noWrap //check if we can truncate the sentence
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
              <TaskName />
              </Typography>
              <Box sx={{ flexGrow: 1, width:{xs:0} }} />
              <Box sx={{ display: { xs: "flex", md: "flex" } }}>
                <Stack direction="row" spacing={2}>
                  <HomeFilebutton />
                  <HomeForwardButton />
                  <HomeNextButton />
                  <HomeSendBackButton />
                  <HomeRejectButton />
                  <NotificationBell iconColor="inherit" />
                  <MenuWebapp />
                </Stack>
              </Box>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                flexShrink: 0,
                boxSizing: "border-box",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader className="DrawerHeader ">
              <IconButton
                onClick={handleDrawerClose}
                style={{ background: "white" }}
                className="IconBtn"
              >
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <Navbar />
            <Divider />
          </Drawer>
          <Main open={open}>
            <DrawerHeader />
            <Typography paragraph>
              <FileViewer />
            </Typography>

            <Typography paragraph>
              <Uploader />
            </Typography>
            <Typography paragraph>
              <RichTextEditor />
            </Typography>
          </Main>
        </Box>
      </GlobalState.Provider>
      <Outlet />
    </>
  );
}
