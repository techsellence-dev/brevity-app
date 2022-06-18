import "./css/App.css";
import React from "react";
import { Amplify } from "aws-amplify";
import { Route, Routes } from "react-router-dom";
import Test from "./test/Test";
import "@aws-amplify/ui-react/styles.css";
// import WorkFlow from "./components/WorkFlow";
import awsExports from "./aws-exports";
import BrevityAuth from "./auth/BrevityAuth";
import Home from "./home/frontend/Home";
import NoMatch from "./components/NoMatch";
import WorkFlow from './WorkFlow/NodeComponent'
Amplify.configure(awsExports);

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BrevityAuth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/workflow" element={<WorkFlow />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}
export default App;

// Routing should be 1. Auth page -  Sub pages, if user is not logged in
// 2. Home and the other working pages
// 3. Admin Page and its associated pages
