import '../Css/MainPage.css'
import React, {useEffect, useState} from 'react';
import '../App.css';
import App2 from './RichTextEditor';
import NavBar from './NavBar';
import Home from './Home'
import FileViewer from './FileViewer';
import {Amplify, Hub ,Auth, API} from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../aws-exports';
import BrevityAuth from "../BrevityAuth";
import getOrderDetails from '../server/GetOrders';
import * as queries from '../graphql/queries';
Amplify.configure(awsExports);

function MainPage() {

// this page is render with in the app.js and contains 
// Navbar components,home component,file viewer and text 
// editor component also.  

  // const [dataItems,setDataItems]=useState([]);
  // const [initialOrderData, setInitialOrderData] = useState({});
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [initialOrder,setInitialOrder]=useState([])
  const [dataItems,setDataItems]=useState([]);
  useEffect(() => {
    Hub.listen("auth", (event) => {
      console.log("Auth event occurred", event);
      if (event.payload.event === "signOut") {
        console.log("it is a sign-out event");
        setIsSignedIn(false);
      }
    });
    getFirstOrder();
  });

  const getFirstOrder=async()=>{
    let currentUser = await Auth.currentAuthenticatedUser();
    // console.log('current user in mainpage is: ' + currentUser.attributes.email);
    // setAuthedUser(currentUser.attributes.email);
    const listOrder=await API.graphql({query:queries.getUser,variables:{email:currentUser.attributes.email}})
    const firstOrder=listOrder.data.getUser.orders.items[0].orderID;
    const orderDetail=await API.graphql({query:queries.getOrder,variables:{orderNum:firstOrder}});
    // console.log("new Order",orderDetail);
  }
  
  // Call Back Function for passing the data from navbar to topbar
  const setDataFunction = (item) => {
    setDataItems(item);
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
