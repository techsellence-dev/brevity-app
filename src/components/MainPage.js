import "../ccs/MainPage.css";
import React, { useEffect, useState } from "react";
import Home from "./Home";
import { Amplify,Hub } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../aws-exports";
import BrevityAuth from "../auth/BrevityAuth";


Amplify.configure(awsExports);

function MainPage() {
  const [isSignedIn, setIsSignedIn] = useState(true);
  useEffect(async () => {
    Hub.listen("auth", (event) => {
      console.log("Auth event occurred", event);
      if (event.payload.event === "signOut") {
        console.log("it is a sign-out event");
        setIsSignedIn(false);
      }
    });
  }, []);


  return (
    <>
      {isSignedIn ? (
        <Home/>
      ) : (
        <BrevityAuth />
      )}
    </>
  );
}
export default MainPage;
