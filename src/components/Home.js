import React, {useState} from "react";
import "./home.css";
import Navbar from "./NavBar";
import File from "./File";
import FileViewer from "./FileViewer";
import RichTextEditor from "./RichTextEditor";
import {Amplify} from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../aws-exports";
import "react-toastify/dist/ReactToastify.css";
import {styled, useTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
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
import MoreIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import TaskIcon from "@mui/icons-material/Task";
import { useNavigate } from 'react-router-dom'
import SignOUT from "../auth/SignOUT";


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

export default function Home() {
  const [filebox] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [anchorE10, setAnchorE10] = React.useState(null);
  const open10 = Boolean(anchorE10);
  const [open5, setOpen5] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);
  const [open7, setOpen7] = React.useState(false);
  const [open9, setOpen9] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [anchorEl1, setAnchorEl1] = React.useState(null);

  const navigate=useNavigate();


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
    navigate('/');
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
 
  
  const handleClick10 = (event) => {
    setAnchorE10(event.currentTarget);
  };

  const handleClose10 = () => {
    setAnchorE10(null);
  };

  const id10 = open10 ? 'simple-popover' : undefined;
 

  const handleClickOpen5 = () => {
    setOpen5(true);
  };

  const handleClose5 = () => {
    setOpen5(false);
  };

  const handleClickOpen6 = () => {
    setOpen6(true);
  };

  const handleClose6 = () => {
    setOpen6(false);
  };

  const handleClickOpen7 = () => {
    setOpen7(true);
  };

  const handleClose7 = () => {
    setOpen7(false);
  };

  const handleClickOpen9 = (scrollType) => () => {
    setOpen9(true);
    setScroll(scrollType);
  };

  const handleClose9 = () => {
    setOpen9(false);
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
      <MenuItem onClick={()=>navigate('workflow')}>WorkFlow</MenuItem>
      <MenuItem onClick={()=>navigate('task-order')}>Create Order</MenuItem>
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


  const handleClick = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl1(null);
  };
  const open1 = Boolean(anchorEl1);
  const id = open1 ? "simple-popover" : undefined;

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
{/* order will shown here */}
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
                 // css of this is not working in home.css Need to check
                style={{
                  border: "1px solid white",
                  margin: "0px 7px",
                  padding: "0px 25px",
                }}
                onClick={handleClickOpen9('paper')}
              >
               
                <img
                  className="top-bar-btn"
                  src="https://img.icons8.com/ios-filled/2x/ffffff/file.png"
                  alt=""></img>{" "}
                Files
              </Button>
              <Dialog
        open={open9}
        onClose={handleClose9}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Files</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
           
          
          >
            
What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose9}>Cancel</Button>
          
        </DialogActions>
      </Dialog>
              
              <Button
                variant="h1"
                className="blue_btn2"
                 // css of this is not working in home.css Need to check
                style={{
                  border: "1px solid white",
                  margin: "0px 7px",
                  padding: "0px 25px",
                }}
                onClick={handleClickOpen5}
              >
                <img
                  src="https://img.icons8.com/glyph-neue/2x/ffffff/forward.png"
                  className="top-bar-btn"
                  alt=""
                  
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

                // css of this is not working in home.css Need to check
                style={{
                  border: "1px solid white",
                  margin: "0px 7px",
                  padding: "0px 25px",
                }}
                onClick={handleClickOpen6}
              >
                <img
                className="top-bar-btn"
                  src="https://img.icons8.com/ios-filled/344/ffffff/circled-chevron-right.png"
                  alt=""
                 
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
                 // css of this is not working in home.css Need to check
                style={{
                  border: "1px solid white",
                  margin: "0px 7px",
                  padding: "0px 25px",
                }}
                onClick={handleClickOpen7}
              >
                <img
                className="top-bar-btn"
                  src="https://img.icons8.com/ios-filled/2x/ffffff/send-backward.png"
                  alt=""
                 
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
                  // css of this is not working in home.css Need to check
                style={{
                  border: "1px solid white",
                  margin: "0px 7px",
                  padding: "0px 25px",
                }}
              >
                <img
                className="top-bar-btn"
                  src="https://img.icons8.com/ios-filled/2x/ffffff/delete-user-male.png"
                  alt=""
                 
                ></img>
                Reject
              </Button>

              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon onClick={handleClick10} />
                </Badge>
              </IconButton>
              <Popover
        id={id10}
        open={open10}
        anchorEl={anchorE10}
        onClose={handleClose10}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>Notifications</Typography>
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
              <img
                src="https://img.icons8.com/ios-filled/2x/ffffff/file.png"
                className="icon-img"
                alt=""
               
                onClick={handleClickOpen9('paper')}
              ></img>
              <img
                src="https://img.icons8.com/glyph-neue/2x/ffffff/forward.png"
                alt=""
                className="icon-img"
               
                onClick={handleClickOpen5}
              ></img>
              <img
                src="https://img.icons8.com/ios-filled/344/ffffff/circled-chevron-right.png"
                alt=""
                className="icon-img"
                
                onClick={handleClickOpen6}
              ></img>
              <img
                src="https://img.icons8.com/ios-filled/2x/ffffff/send-backward.png"
                alt=""
                className="icon-img"
               
                onClick={handleClickOpen7}
              ></img>
              <img
                src="https://img.icons8.com/ios-filled/2x/ffffff/delete-user-male.png"
                alt=""
                className="icon-img"
               
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
          <DrawerHeader 
          className="DrawerHeader "
          
          >
            <IconButton onClick={handleDrawerClose} 
            style={{background:"white"}}
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
            <RichTextEditor />
          </Typography>
        </Main>

        {renderMobileMenu}
        {renderMenu}
      </Box>
    </>
  );
}
