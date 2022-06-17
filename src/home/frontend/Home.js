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
import DrawerHeader from "./components/appbar/DrawerHeader";
import Main from "./components/appbar/Main";
import Constants from "../../config/Constants";
import MenuWebapp from "./components/menu/MenuWebapp";
Amplify.configure(awsExports);

const drawerWidth = Number(Constants.DRAWER_WIDTH);

export default function Home() {
  const filebox = false;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [anchorE10, setAnchorE10] = React.useState(null);
  const [datArray, setDatArray] = useState([]);
  const [nlength, setNlength] = useState(0);
  const open10 = Boolean(anchorE10);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

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

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

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
              <HomeFilebutton/>
              <HomeForwardButton />
              <HomeNextButton />
              <HomeSendBackButton />
              <HomeRejectButton />
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
              <MenuWebapp />
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

          <Navbar></Navbar>
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
      </Box>
    </>
  );
}
