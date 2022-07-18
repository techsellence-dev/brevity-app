import React, { useState, useEffect, createContext } from "react";
// import "./components/home.css";
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
// import OrderCard from "./OrderCard";
import getOrderDetails from "../../server/GetOrders"
import TextField from "@mui/material/TextField";
import { Auth } from "aws-amplify";
import sha256 from "crypto-js/sha256";
import hmacSHA512 from "crypto-js/hmac-sha512";
import Base64 from "crypto-js/enc-base64";
var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");
var CryptoJS = require("crypto-js");
Amplify.configure(awsExports);

const drawerWidth = Number(Constants.DRAWER_WIDTH);
//create context for access data in childs
export const GlobalState = createContext();

export default function Home() {
  const secret = "Hello123";
  //state that fetch order details and set to task box in home bar
  const [orderData, setOrderData] = useState([]);
  //function that fetch taskdetails from navbar
  const fetchTaskDetails = (items) => {
    setOrderData(items);
    // console.log(orderData)
  };
  const [authedUser, setAuthedUser] = useState("");
  const [open, setOpen] = useState(false);
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
    getOrderDetailsForUser();
  });

  const getOrderDetailsForUser = async () => {
    let currentUser = await Auth.currentAuthenticatedUser();
    setAuthedUser(currentUser.attributes.email);
    const orderDetailsSet = await getOrderDetails(currentUser.attributes.email);
    const data1 = Array.from(orderDetailsSet);
    // console.log(data1)
    // encrypting the navbar Data
    let encrypted = CryptoJS.AES.encrypt(JSON.stringify(data1), secret).toString();
    // console.log(encrypted)
    // setting up to the local storage
    localStorage.setItem("NavbarData", encrypted);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [task, setTask] = useState([]);
  // console.log(`entered Navbar component`);
  // Fetch the data from the data for current
  // Authenticated User

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
              <Box sx={{ flexGrow: 1, width: { xs: 0 } }} />
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
                boxSizing: "border-box",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
            fixed="true"
          >
            <Stack>
              <DrawerHeader>
                <Box
                  sx={{ width: "100%", height: 120 }}
                  justifyItems="flex-end"
                >
                  <Box fullWidth style={{ textAlign: "right" }}>
                    <IconButton
                      onClick={handleDrawerClose}
                      style={{
                        marginTop: "10px",
                        background: "#3198c3",
                        color: "white",
                      }}
                    // className="IconBtn"
                    >
                      {theme.direction === "ltr" ? (
                        <ChevronLeftIcon />
                      ) : (
                        <ChevronRightIcon />
                      )}
                    </IconButton>
                  </Box>
                  <Typography
                    variant="h4"
                    gutterBottom
                    component="div"
                    align="center"
                  >
                    Task List
                  </Typography>
                  {/* <TextField
                    id="outlined-search"
                    label="Search field"
                    type="search"
                    fullWidth
                    onChange={(search) => searchData(search.target.value)}
                  /> */}
                </Box>

                {/* <Stack > */}

                {/* <IconButton
                  onClick={handleDrawerClose}
                  // style={{ background: "white" }}
                  // className="IconBtn"
                >
                  {theme.direction === "ltr" ? (
                    <ChevronLeftIcon />
                  ) : (
                    <ChevronRightIcon />
                  )}
                </IconButton> */}

                {/* <div className="main-nav">
                  {/* <div className="collapse">
                    <h2>Task List</h2>
                  </div> */}
                {/* <div className="app2">
                    <div className="input-element-wrapper">
                      <input
                        placeholder="Search..."
                        className="InputBox"
                        type="text"
                        onChange={(search) => searchData(search.target.value)}
                      />
                    </div>
                  </div>
                </div> */}
                {/* </Stack> */}
              </DrawerHeader>
              <Divider />
              {open && <Navbar />}
              {/* open is needed as the Navbar gets rendered, alternatively, it is a good idea to render the navbar from start  */}
            </Stack>
          </Drawer>
          {/* The main tag is responsible for compressing the text when the navbar is open. 
          Details are at https://mui.com/material-ui/react-drawer/#persistent-drawer  */}
          <Main open={open}>
            <DrawerHeader />
            <FileViewer />
            <Uploader />
            <RichTextEditor />
          </Main>
        </Box>
      </GlobalState.Provider>
    </>
  );
}
