import '../Css/MainPage.css'
import React, {useEffect, useState} from 'react';
import '../App.css';
import App2 from './RichTextEditor';
import NavBar from './NavBar';
import Home from './Home'
import FileViewer from './FileViewer';
import {Amplify, Hub} from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../aws-exports';
import BrevityAuth from "../BrevityAuth";

Amplify.configure(awsExports);

function MainPage() {

// this page is render with in the app.js and contains 
// Navbar components,home component,file viewer and text 
// editor component also.  

  const [dataItems,setDataItems]=useState([]);
  const [initialOrderData, setInitialOrderData] = useState({});
  const [isSignedIn, setIsSignedIn] = useState(true);

  useEffect(() => {
    Hub.listen("auth", (event) => {
      console.log("Auth event occurred", event);
      if (event.payload.event === "signOut") {
        console.log("it is a sign-out event");
        setIsSignedIn(false);
      }
    });
  });

  
  // Call Back Function for passing the data from navbar to topbar
  const setDataFunction = (item) => {
    console.log('setting data item: ', item);
    setDataItems(item);
    console.log(dataItems)
    // console.log("in Main",item)
  }
  
  return (
    <>
      {/* <Authenticator >
        {({ signOut, user }) => ( */}

      {isSignedIn ? <div className='arrange-divs'>
        <div className='nav-div'>
          <NavBar
              dataFunction={setDataFunction}  // here data get from navbar using the call back function
          />
        </div>
        <div className='home-div'>
          <Home
              userData={dataItems} //here data send to home and set to top bar
          />
          <FileViewer />
          <App2 />
          {/* <button onClick={signOut}>LOgout</button>
              <h1>{user.username}</h1> */}
        </div>

      </div> : <BrevityAuth/>}
        )
        {/* } */}
      {/* </Authenticator> */}
    </>
  )
}
export default MainPage;
