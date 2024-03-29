import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";
const drawerWidth = 270;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);


const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const navigate = useNavigate();
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box style={{ display: "flex", justifyContent: "space-between", width: "100%", }}>
                        <Typography variant="h5" noWrap component="div">
                            Admin Page
                        </Typography>
                        <Button variant="outlined" startIcon={<HomeIcon />} style={{ alignSelf: "end", right: "0" }} color="inherit" onClick={() => navigate('/')}>
                            HOME
                        </Button >
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <Box style={{ width: "100%", }}>
                        <Box style={{ textAlign: "right", margin: "5px 0px 5px 0px" }}>

                            <IconButton onClick={handleDrawerClose}
                                style={{ marginTop: "10px", background: "#3198c3", color: "white", }}>
                                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                            </IconButton>
                        </Box>
                        <Box style={{ textAlign: "center", width: '100%', margin: "25px 0px 5px 0px" }}>
                            <Typography style={{ fontSize: "20px", padding: "15px" }}>
                                Welcome Mr Abhishek
                                Designation : Manager
                            </Typography>

                        </Box>
                    </Box>
                </DrawerHeader>
                <Divider />
                <Box style={{ textAlign: "center" }}>

                    <Button variant="outlined" style={{ width: "80%", margin: "20px 0px 10px 0px " }} color="inherit">
                        Task Dashboard
                    </Button >
                    <Button variant="outlined" style={{ width: "80%", margin: "20px 0px 10px 0px " }} color="inherit">
                        Workflows
                    </Button >
                    <Button variant="outlined" style={{ width: "80%", margin: "20px 0px 10px 0px " }} color="inherit">
                        Approvals
                    </Button >
                    <Button variant="outlined" style={{ width: "80%", margin: "20px 0px 10px 0px " }} color="inherit">
                        Requests
                    </Button >
                    <Button variant="outlined" style={{ width: "80%", margin: "20px 0px 10px 0px " }} color="inherit">
                        Team and Access Rights
                    </Button >
                    <Button variant="outlined" style={{ width: "80%", margin: "20px 0px 10px 0px " }} color="inherit">
                        Reports
                    </Button >
                    <Button variant="outlined" style={{ width: "80%", margin: "20px 0px 10px 0px " }} color="inherit">
                        Back to Normal Mode
                    </Button >
                    <Divider style={{ color: "black" }} />
                    <Button variant="outlined" style={{ width: "80%", margin: "20px 0px 10px 0px " }} color="inherit">
                        Support
                    </Button >
                    <Button variant="outlined" style={{ width: "80%", margin: "20px 0px 10px 0px " }} color="inherit">
                        About
                    </Button >
                </Box>

            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                <Typography paragraph>
                    <div style={{ height: 550, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={8}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                        />
                    </div>
                </Typography>

            </Main>
        </Box>
    );
}
