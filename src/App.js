import "./css/App.css";
import { React, useEffect, useState } from "react";
import { Amplify, Auth, Hub } from "aws-amplify";
import { Route, Routes, Navigate } from "react-router-dom";
import Test from "./test/Test";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import BrevityAuth from "./auth/BrevityAuth";
//auth imports
import SignIn from "./BrevityAuth/Frontend/SignIn";
import ForgotPassword from './BrevityAuth/Frontend/ForgotPassword'
import Confirm from './BrevityAuth/Frontend/Confirm'
import SignUp from './BrevityAuth/Frontend/SignUp';
import ConfirmSignUp from './BrevityAuth/Frontend/ConfirmSignUp';
import Unauthorized from "./BrevityAuth/Roles/Unauthorized";
//other imports
import Home from "./home/frontend/Home";
import NoMatch from "./components/NoMatch";
import NoMatch1 from "./components/NoMatch1";
import Node from "./WorkflowComponents/OrderTaskComponents/NodeComponent";
import WorkFlowComponent from './WorkflowComponents/WorkFlow/WorkFlowComponent';
import Admin from './SuperUser/Admin';
Amplify.configure(awsExports);

function App() {
  const [user, setUser] = useState(undefined);

  const checkUser = async () => {
    try {
      const response = await Auth.currentAuthenticatedUser({bypassCache:true});
      setUser(response);
    } catch (error) {
      setUser(null);
    }
  };
  useEffect(() => {
    checkUser();
    console.log(user);
  }, []);
  useEffect(() => {
    const listner = (data) => {
      if (data.payload.event === "signIn" || data.payload.event === "signOut") {
        checkUser();
        console.log(data.payload.event);
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
<<<<<<< HEAD

=======
>>>>>>> authbranch
            <Route path="/" element={<Home />} />
            <Route path="/workflow" element={<WorkFlowComponent />} />
            <Route path="/TaskOrder" element={<Node />} />
            <Route path="/test" element={<Test />} />
            <Route path="*" element={<NoMatch />} />
<<<<<<< HEAD
            <Route path="/Admin" element={<Admin />} />


=======
>>>>>>> authbranch
          </>
        ) : (
          <>
              <Route path='/' element={<SignIn />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/forgot' element={<ForgotPassword />} />
              <Route path='/confirm' element={<Confirm />} />
              <Route path='/unauthorized' element={<Unauthorized />} />
              <Route path='/confirmsignup' element={<ConfirmSignUp />} />
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
