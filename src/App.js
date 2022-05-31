import './Css/App.css';
import React from 'react';
import {Amplify} from 'aws-amplify';
import {Route, Routes} from 'react-router-dom';
import MainPage from './Components/MainPage';
import Profile from './Components/Forward';
import Test from './test/Test';
import '@aws-amplify/ui-react/styles.css';
import WorkFlow from './Components/WorkFlow';
import Node from './Components/NodeComponent'
import awsExports from './aws-exports';
import BrevityAuth from './auth/BrevityAuth';

Amplify.configure(awsExports);

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
