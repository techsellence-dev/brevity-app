import "./css/App.css";
import { React, useEffect, useState } from "react";
import { Amplify, Auth, Hub } from "aws-amplify";
import { Route, Routes, Navigate } from "react-router-dom";
import Test from "./test/Test";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import BrevityAuth from "./auth/BrevityAuth";
import Home from "./home/frontend/Home";
import NoMatch from "./components/NoMatch";
import NoMatch1 from "./components/NoMatch1";
import Node from "./WorkflowComponents/OrderTaskComponents/NodeComponent";
import WorkFlowComponent from './WorkflowComponents/WorkFlow/WorkFlowComponent';
import Admin from './SuperUser/Admin';
import ForwardFunction from "./home/frontend/components/button/Forward";
Amplify.configure(awsExports);


function App() {
  const [user, setUser] = useState(undefined);

  const checkUser = async () => {
    try {
      const response = await Auth.currentAuthenticatedUser();
      setUser(response);
    } catch (error) {
      setUser(null);
    }
  };
  useEffect(() => {
    checkUser();
    // console.log(checkUser);
  }, []);
  useEffect(() => {
    const listner = (data) => {
      if (data.payload.event === "signIn" || data.payload.event === "signOut") {
        checkUser();
      }
    };
    Hub.listen("auth", listner);
    return () => Hub.remove("auth", listner);
  }, []);

  return (
    <>
      <Routes>
        {user ? (
          <>

            <Route path="/" element={<Home />} />
            <Route path="/workflow" element={<WorkFlowComponent />} />
            <Route path="/TaskOrder" element={<Node />} />
            <Route path="/test" element={<Test />} />
            <Route path="*" element={<NoMatch />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/Forward" element={<ForwardFunction />} />


          </>
        ) : (
          <>
            <Route path="/" element={<BrevityAuth />} />
            <Route path="*" element={<NoMatch1 />} />
          </>
        )}
      </Routes>
    </>
  );
}
export default App;

// Routing should be 1. Auth page -  Sub pages, if user is not logged in
// 2. Home and the other working pages
// 3. Admin Page and its associated pages
