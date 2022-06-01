import "../ccs/MainPage.css";
import React, { useEffect, useState } from "react";
// import '../App.ccs';
import RichTextEditor from "./RichTextEditor";
import NavBar from "./NavBar";
import Home from "./Home";
import FileViewer from "./FileViewer";
import { Amplify, API, Auth, Hub } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../aws-exports";
import BrevityAuth from "../auth/BrevityAuth";
import * as queries from "../graphql/queries";


Amplify.configure(awsExports);

function MainPage() {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [topBarOrder, setTopBarOrder] = useState([]);
  useEffect(async () => {
    Hub.listen("auth", (event) => {
      console.log("Auth event occurred", event);
      if (event.payload.event === "signOut") {
        console.log("it is a sign-out event");
        setIsSignedIn(false);
      }
    });
    const firstOrder = await getFirstOrder();
    console.log("setting first order to: " + JSON.stringify(firstOrder));
    setTopBarOrder(firstOrder);
  }, []);

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

  return (
    <>
      {isSignedIn ? (
        <Home
          topBarOrder={topBarOrder} //here data send to home and set to top bar
        />
      ) : (
        <BrevityAuth />
      )}
    </>
  );
}
export default MainPage;
