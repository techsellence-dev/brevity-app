// import React, { useEffect, useState } from "react";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import Box from "@mui/material/Box";
// import { blue } from "@mui/material/colors";
// import { listNotifications } from '../../../../gqlFunctions/NotifTable'
// import { API } from 'aws-amplify';
// import * as mutations from '../../../../graphql/mutations';
// import * as queries from '../../../../graphql/queries';
// //change colour of menu item based on seen not seen

// const BasicMenu = ({ anchore, handleClose, open, menuItems }) => {
//   const [status, setStatus] = useState("Unseen")
//   const [bgcolor, setBgcolor] = useState("#69a832")
//   const notifications = [
//     {
//       id: 0,
//       label: "First notification",
//       status: { status }
//     },
//     {
//       id: 1,
//       label: "Second notification",
//       status: { status }
//     },
//     {
//       id: 2,
//       label: "Second notification",
//       status: { status }
//     },
//     {
//       id: 3,
//       label: "Second notification",
//       status: { status }
//     },
//     {
//       id: 4,
//       label: "Second notification",
//       status: { status }
//     },
//     {
//       id: 5,
//       label: "Second notification",
//       status: { status }
//     },
//     {
//       id: 6,
//       label: "Second notification",
//       status: { status }
//     },
//     {
//       id: 7,
//       label: "Second notification",
//       status: { status }
//     },
//     {
//       id: 8,
//       label: "Second notification",
//       status: { status }
//     },
//     {
//       id: 9,
//       label: "Second notification",
//       status: { status }
//     },
//     {
//       id: 10,
//       label: "Second notification",
//       status: { status }
//     },
//     {
//       id: 11,
//       label: "Second notification",
//       status: { status }
//     },
//     {
//       id: 12,
//       label: "Second notification",
//       status: { status }
//     },
//     {
//       id: 13,
//       label: "Second notification",
//       status: { status }
//     },
//     {
//       id: 14,
//       label: "Second notification",
//       status: { status }
//     },
//     {
//       id: 15,
//       label: "Second notification",
//       status: { status }
//     },
//   ];
//   const [listnf, setListnf] = useState([]);
//   useEffect(() => {
//     const listNotifications = async () => {
//       try {
//         const listNotifData = await API.graphql({ query: queries.listUserNotifications });
//         console.log(listNotifData.data.listUserNotifications.items);
//         setListnf(listNotifData.data.listUserNotifications.items)
//         console.log(listnf)
//       } catch (error) {
//         console.log("Error in listing", error)
//         throw new Error(error)
//       }
//     }
//     listNotifications()
//   }, [])
//   function clicky() {
//     console.log("yes")
//     setBgcolor("white")
//     setStatus("seen")
//   }
//   console.log(`anchor in basic menu is ${anchore}`);
//   return (
//     <Menu
//       id="basic-menu"
//       anchorEl={anchore}
//       open={open}
//       onClose={handleClose}
//       PaperProps={{
//         style: { maxHeight: 40 * 8, width: "40ch" },
//       }}
//     >

//       {listnf.map((item) => (
//         <Box bgcolor={bgcolor}>
//           <MenuItem onClick={clicky}>{item.NotificationContent}</MenuItem>
//           {/* {
//             item.label
//           } */}
//         </Box>
//       ))}

//     </Menu>
//   );
// };

// export default BasicMenu;
