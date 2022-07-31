import React from "react";
import TaskName from './TaskName';
import MenuWebapp from "./menu/MenuWebapp";
import NotificationBell from "./notification/NotificationBell";
import HomeFilebutton from "./button/HomeFilebutton";
import HomeForwardButton from "./button/HomeFowardButton";
import HomeNextButton from "./button/HomeNextButton";
import HomeSendBackButton from "./button/HomeSendBackButton";
import HomeRejectButton from "./button/HomeRejectButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
export default function ToolBar1() {
    return (
        <>
            <Typography style={{ marginRight: "10%" }} variant="h6" noWrap component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
            >
                <TaskName />
            </Typography>
            <Typography style={{ marginRight: "10%" }} variant="h6" noWrap //check if we can truncate the sentence
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}  >
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
        </>
    )
}

