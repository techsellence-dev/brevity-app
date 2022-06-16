import React, { useState, useEffect } from "react";
import "./components/home.css";
import Navbar from "./components/NavBar";
import File from "./components/File";
import FileViewer from "./components/FileViewer";
import RichTextEditor from "./components/RichTextEditor";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../../aws-exports";
import "react-toastify/dist/ReactToastify.css";
import { styled, useTheme } from "@mui/material/styles";
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
import MailIcon from "@mui/icons-material/Mail";
import Button from "@mui/material/Button";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Popover from "@mui/material/Popover";
import MoreIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import TaskIcon from "@mui/icons-material/Task";
import { useNavigate } from "react-router-dom";
import SignOUT from "../../auth/SignOUT";
import TaskName from "./components/TaskName";
import HomeFilebutton from "./components/HomeFilebutton";
import HomeForwardButton from "./components/HomeFowardButton";
import HomeNextButton from "./components/HomeNextButton";
import HomeSendBackButton from "./components/HomeSendBackButton";
import HomeRejectButton from "./components/HomeRejectButton";
import HomeSmallIcon from "./components/HomeSmallIcon";
import Uploader from "./components/Uploader";
import * as queries from "../../graphql/queries";
import { convertStatus } from "../../gqlFunctions/NotifTable";
import { API } from "aws-amplify";
import AppBar from "./components/appbar/AppBar";
Amplify.configure(awsExports);

const drawerWidth = 320;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);



const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Home() {
  const [filebox] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [anchorE10, setAnchorE10] = React.useState(null);
  const open10 = Boolean(anchorE10);

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

        setNlength(listNotif.data.userByNotifStatus.items.length);
      } catch (error) {
        console.log("Error in list by status", error);
        throw new Error(error);
      }
    };

    listNotifbyStatus();
  });
  const navigate = useNavigate();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleLogout = () => {
    SignOUT();
    navigate("/");
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const [datArray, setDatArray] = useState([]);
  const [nlength, setNlength] = useState(0);
  // const handleClick10 = (event) => {
  //   setAnchorE10(event.currentTarget);

  // };
  const listNotifications = async (event) => {
    try {
      setAnchorE10(event.currentTarget);
      const listNotifData = await API.graphql({
        query: queries.listUserNotifications,
      });
      console.log(listNotifData);

      setDatArray(listNotifData.data.listUserNotifications.items);

      convertStatus();
    } catch (error) {
      console.log("Error in listing", error);
      throw new Error(error);
    }
  };

  const handleClose10 = () => {
    setAnchorE10(null);
  };

  const id10 = open10 ? "simple-popover" : undefined;

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={() => navigate("workflow")}>WorkFlow</MenuItem>
      <MenuItem onClick={() => navigate("task-order")}>Create Order</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <TaskIcon />
        </IconButton>
        <p>Task Name</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={7} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p onClick={SignOUT}>SignOUT</p>
      </MenuItem>
    </Menu>
  );
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      {filebox ? <File /> : null}

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
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <TaskName></TaskName>
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <HomeFilebutton></HomeFilebutton>

              <HomeForwardButton></HomeForwardButton>

              <HomeNextButton></HomeNextButton>

              <HomeSendBackButton></HomeSendBackButton>

              <HomeRejectButton></HomeRejectButton>

              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={nlength} color="error">
                  <NotificationsIcon
                    // onClick={handleClick10}
                    onClick={listNotifications}
                  />
                </Badge>
              </IconButton>
              <Popover
                id={id10}
                open={open10}
                anchorEl={anchorE10}
                onClose={handleClose10}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Typography sx={{ p: 2 }}>
                  <h2>Notifications</h2>
                  {datArray.map(({ Email, NotificationContent }) => (
                    <li className="main_li" key={Email}>
                      {NotificationContent}
                    </li>
                  ))}
                </Typography>
              </Popover>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <HomeSmallIcon></HomeSmallIcon>

              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
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

          <Navbar
          // setTopBarDataFunction={setTopBarOrderFunction}
          ></Navbar>
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

        {renderMobileMenu}
        {renderMenu}
      </Box>
    </>
  );
}
