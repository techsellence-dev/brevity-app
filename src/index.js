import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter} from "react-router-dom";
import "./css/index.css";
import reportWebVitals from "./reportWebVitals";
import Amplify from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import awsconfig from "./aws-exports";
import App from './App';
Amplify.configure(awsconfig);
ReactDOM.render(

  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
