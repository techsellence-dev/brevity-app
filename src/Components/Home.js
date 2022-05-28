import React, { useEffect, useState } from "react";
import "../Css/Home.css";
import Navbar from "./NavBar";
import File from "./File";
import FileViewer from "./FileViewer";
import RichTextEditor from "./RichTextEditor";
import Confirm from "./Confirm";
import SubButtons from "./SubButtons";
import { Amplify, Auth } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../aws-exports";
// import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { amplify, API } from "aws-amplify";
// import * as mutations from '../graphql/mutations';
import * as queries from "../graphql/queries";
// import WorkflowTable, { createNewNotif } from './gqlFunction/NotifTable';
// import { createNewWorkflow,updateNotif,deleteNotifByMail } from './gqlFunction/NotifTable';
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
// import List from '@mui/material/List';
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MailIcon from "@mui/icons-material/Mail";
import Button from "@mui/material/Button";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Popover from "@mui/material/Popover";
import InputBase from "@mui/material/InputBase";
import MoreIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import TaskIcon from "@mui/icons-material/Task";
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';



import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';


Amplify.configure(awsExports);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
async function SignOUT() {
  try {
    let signOutResponse = await Auth.signOut();
    console.log("sign out response: " + signOutResponse);
  } catch (error) {
    console.log("error signing out: ", error);
  }
}

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

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const [filebox, showFileBox] = useState(false);
  const [forward, setForward] = useState(false);
  const [back, setBack] = useState(false);
  const [next, setNext] = useState(false);
  const [authedUser, setAuthedUser] = useState("");

  const [isSignedIn, setIsSignedIn] = useState(true);
  const [topBarOrder, setTopBarOrder] = useState([]);

  const getFirstOrder = async () => {
    let currentUser = await Auth.currentAuthenticatedUser();
    const userOrderList = await API.graphql({
      query: queries.getUser,
      variables: { email: currentUser.attributes.email },
    });
    const orderItemList = userOrderList.data.getUser.orders.items;
    const firstOrder = orderItemList[0].order;
    console.log("First Order is: " + JSON.stringify(firstOrder));
    return firstOrder;
  };

  // Call Back Function for passing the data from navbar to topbar
  const setTopBarOrderFunction = (item) => {
    setTopBarOrder(item);
  };

  useEffect(async () => {
    let currentUser = await Auth.currentAuthenticatedUser();
    // console.log('current user is: ' + currentUser.attributes.email);
    setAuthedUser(currentUser.attributes.email);
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

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

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const [open4, setOpen4] = React.useState(false);


  

  const handleClickOpen4 = () => () => {
    setOpen4(true);
    
  };

  const handleClose4 = () => {
    setOpen4(false);
  };

  
 
  const [open5, setOpen5] = React.useState(false);

  const handleClickOpen5 = () => {
    setOpen5(true);
  };

  const handleClose5 = () => {
    setOpen5(false);
  };
  const [open6, setOpen6] = React.useState(false);

  const handleClickOpen6 = () => {
    setOpen6(true);
  };

  const handleClose6 = () => {
    setOpen6(false);
  };
  const [open7, setOpen7] = React.useState(false);

  const handleClickOpen7 = () => {
    setOpen7(true);
  };

  const handleClose7 = () => {
    setOpen7(false);
  };
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
  const [anchorEl1, setAnchorEl1] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl1(null);
  };
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const open1 = Boolean(anchorEl1);
  const id = open1 ? "simple-popover" : undefined;
  const id1 = open1 ? "simple-popover" : undefined;

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
              <Button variant="h1" onClick={handleClick}>
                Task Name
              </Button>
              <Popover
                id={id}
                open={open1}
                anchorEl={anchorEl1}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Typography sx={{ p: 2 }}>
                  Task Id: 123<br></br>
                  <br></br>Order Name: Medicine Order <br></br>
                  <br></br> Due Date:25 Jan<br></br>
                  <br></br>
                </Typography>
              </Popover>
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button
                variant="h1"
                className="blue_btn"
                style={{
                  border: "1px solid white",
                  color: "white",
                  margin: "0px 7px",
                  padding: "0px 25px",
                }}
                onClick={handleClickOpen4('paper')}
              >
               
                <img
                  src="https://img.icons8.com/ios-filled/2x/ffffff/file.png"
                  alt=""
                  style={{ width: "25px", height: "20px", marginRight: "5px" }}
                ></img>{" "}
                Files
              </Button>
              <Dialog
        fullScreen
        open={open4}
        onClose={handleClose4}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose4}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Files
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose4}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="File1"/>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="File2"
              
            />
          </ListItem>
        </List>
      </Dialog>
              <Button
                variant="h1"
                className="blue_btn"
                style={{
                  border: "1px solid white",
                  color: "white",
                  margin: "0px 7px",
                  padding: "0px 25px",
                }}
                onClick={handleClickOpen5}
              >
                <img
                  src="https://img.icons8.com/glyph-neue/2x/ffffff/forward.png"
                  alt=""
                  style={{ width: "25px", height: "20px", marginRight: "5px" }}
                ></img>
                Forward
              </Button>
              <Dialog
                open={open5}
                onClose={handleClose5}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">{"Forward"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    {"Please Provide the Comments to forward the email"}
                    <br></br>
                    <br></br>
                    {
                      "Make sure you have checked all files and upload necessary documnets"
                    }
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose5}>Cancel</Button>
                  <Button onClick={handleClose5} autoFocus>
                    Accept
                  </Button>
                </DialogActions>
              </Dialog>
              <Button
                variant="h1"
                className="blue_btn"
                style={{
                  border: "1px solid white",
                  color: "white",
                  margin: "0px 7px",
                  padding: "0px 25px",
                }}
                onClick={handleClickOpen6}
              >
                <img
                  src="https://img.icons8.com/ios-filled/344/ffffff/circled-chevron-right.png"
                  alt=""
                  style={{ width: "25px", height: "20px", marginRight: "5px" }}
                ></img>
                Next Assessor
              </Button>
              <Dialog
                open={open6}
                onClose={handleClose6}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Next Assessor"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    {"Please Provide the Comments to forward the email"}
                    <br></br>
                    <br></br>
                    {
                      "Make sure you have checked all files and upload necessary documnets"
                    }
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose6}>Cancel</Button>
                  <Button onClick={handleClose6} autoFocus>
                    Accept
                  </Button>
                </DialogActions>
              </Dialog>
              <Button
                variant="h1"
                className="blue_btn"
                style={{
                  border: "1px solid white",
                  color: "white",
                  margin: "0px 7px",
                  padding: "0px 25px",
                }}
                onClick={handleClickOpen7}
              >
                <img
                  src="https://img.icons8.com/ios-filled/2x/ffffff/send-backward.png"
                  alt=""
                  style={{ width: "25px", height: "20px", marginRight: "5px" }}
                ></img>
                Send Back
              </Button>
              <Dialog
                open={open7}
                onClose={handleClose7}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">{"Send back"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    {"Please Provide the Comments to forward the email"}
                    <br></br>
                    <br></br>
                    {
                      "Make sure you have checked all files and upload necessary documnets"
                    }
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose7}>Cancel</Button>
                  <Button onClick={handleClose7} autoFocus>
                    Accept
                  </Button>
                </DialogActions>
              </Dialog>
              <Button
                variant="h1"
                className="blue_btn"
                style={{
                  border: "1px solid white",
                  color: "white",
                  margin: "0px 7px",
                  padding: "0px 25px",
                }}
              >
                <img
                  src="https://img.icons8.com/ios-filled/2x/ffffff/delete-user-male.png"
                  alt=""
                  style={{ width: "25px", height: "20px", marginRight: "5px" }}
                ></img>
                Reject
              </Button>

              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>

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
              <img
                src="https://img.icons8.com/ios-filled/2x/ffffff/file.png"
                alt=""
                style={{
                  width: "25px",
                  height: "20px",
                  marginTop: "16px",
                  marginRight: "10px",
                }}
                onClick={handleClickOpen4('paper')}
              ></img>
              <img
                src="https://img.icons8.com/glyph-neue/2x/ffffff/forward.png"
                alt=""
                style={{
                  width: "25px",
                  height: "20px",
                  marginTop: "16px",
                  marginRight: "10px",
                }}
                onClick={handleClickOpen5}
              ></img>
              <img
                src="https://img.icons8.com/ios-filled/344/ffffff/circled-chevron-right.png"
                alt=""
                style={{
                  width: "25px",
                  height: "20px",
                  marginTop: "16px",
                  marginRight: "10px",
                }}
                onClick={handleClickOpen6}
              ></img>
              <img
                src="https://img.icons8.com/ios-filled/2x/ffffff/send-backward.png"
                alt=""
                style={{
                  width: "25px",
                  height: "20px",
                  marginTop: "16px",
                  marginRight: "10px",
                }}
                onClick={handleClickOpen7}
              ></img>
              <img
                src="https://img.icons8.com/ios-filled/2x/ffffff/delete-user-male.png"
                alt=""
                style={{
                  width: "25px",
                  height: "20px",
                  marginTop: "16px",
                  marginRight: "10px",
                }}
              ></img>

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
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />

          <Navbar setTopBarDataFunction={setTopBarOrderFunction}></Navbar>
          <Divider />
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <Typography paragraph>
            <FileViewer />
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
