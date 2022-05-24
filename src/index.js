import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BrevityAuth from "./BrevityAuth";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import WorkFlow from './Components/WorkFlow';
import WorkFlowDefinition from './Components/orderCreatebox';
import Node from './Components/NodeComponent'
import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AmplifyProvider>
        {/* <App /> */}
        <BrevityAuth/>
        {/* <Node/> */}
        {/* <WorkFlow/> */}
        {/* <WorkFlowDefinition/> */}
      </AmplifyProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
