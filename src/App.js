import './ccs/App.css';
import React from 'react';
import {Amplify, Auth} from 'aws-amplify';
import {Route, Routes} from 'react-router-dom';
import MainPage from './components/MainPage';
import Profile from './components/Forward';
import Test from './test/Test';
import '@aws-amplify/ui-react/styles.css';
import WorkFlow from './components/WorkFlow';
import Node from './components/NodeComponent'
import awsExports from './aws-exports';
import BrevityAuth from './auth/BrevityAuth';

Amplify.configure(awsExports);

var user=Auth.currentAuthenticatedUser();
console.log('current user is ' + user);
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BrevityAuth />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Profile />} isAdmin={false} />
        <Route path="/MainPage/workflow" element={<WorkFlow/>}/>
        <Route path="/MainPage/task-order" element={<Node/>}/>
        <Route path="/test" element={<Test/>} />
      </Routes>
    </>
  )
}
export default App;


// Routing should be 1. Auth page -  Sub pages, if user is not logged in
// 2. MainPage and the other working pages
// 3. Admin Page and its associated pages