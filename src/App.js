import './css/App.css';
import React from 'react';
import {Amplify, Auth} from 'aws-amplify';
import {Route, Routes} from 'react-router-dom';
import Profile from './components/Forward';
import Test from './test/Test';
import '@aws-amplify/ui-react/styles.css';
import WorkFlow from './components/WorkFlow';
import Node from './components/NodeComponent'
import awsExports from './aws-exports';
import BrevityAuth from './auth/BrevityAuth';
import Home from "./components/Home";

Amplify.configure(awsExports);

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BrevityAuth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Profile />} isAdmin={false} />
        <Route path="/home/workflow" element={<WorkFlow/>}/>
        <Route path="/home/task-order" element={<Node/>}/>
        <Route path="/test" element={<Test/>} />
      </Routes>
    </>
  )
}
export default App;


// Routing should be 1. Auth page -  Sub pages, if user is not logged in
// 2. Home and the other working pages
// 3. Admin Page and its associated pages