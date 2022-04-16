import '../Css/MainPage.css'
import React, {useEffect, useState} from 'react';
import '../App.css';
import App2 from './RichTextEditor';
import NavBar from './NavBar';
import Home from './Home'
import FileViewer from './FileViewer';
import {Amplify, API, Auth, Hub} from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../aws-exports';
import BrevityAuth from "../BrevityAuth";
import * as queries from '../graphql/queries';

Amplify.configure(awsExports);

function MainPage() {

// this page is render with in the app.js and contains 
// Navbar components,home component,file viewer and text 
// editor component also.  

  const [isSignedIn, setIsSignedIn] = useState(true);
  const [topBarOrder,setTopBarOrder]=useState([]);
  useEffect(async () => {
    Hub.listen("auth", (event) => {
      console.log("Auth event occurred", event);
      if (event.payload.event === "signOut") {
        console.log("it is a sign-out event");
        setIsSignedIn(false);
      }
    });
    const firstOrder = await getFirstOrder();
    console.log('setting first order to: ' + JSON.stringify(firstOrder));
    setTopBarOrder(firstOrder);
  }, []);

  const getFirstOrder=async()=>{
    let currentUser = await Auth.currentAuthenticatedUser();
    const userOrderList=await API.graphql({query:queries.getUser,variables:{email:currentUser.attributes.email}})
    const orderItemList=userOrderList.data.getUser.orders.items;
    const firstOrder = orderItemList[0].order;
    console.log('First Order is: ' + JSON.stringify(firstOrder));
    return firstOrder;
  }
  
  // Call Back Function for passing the data from navbar to topbar
  const setDataFunction = (item) => {
    setTopBarOrder(item);
  }
  
  return (
    <>

      {isSignedIn ? <div className='arrange-divs'>
        <div className='nav-div'>
          <NavBar
              dataFunction={setDataFunction}  // here data get from navbar using the call back function
          />
        </div>
        <div className='home-div'>
          <Home
              topBarOrder={topBarOrder} //here data send to home and set to top bar
          />
          <FileViewer />
          <App2 />
        </div>

      </div> : <BrevityAuth/>}
        )
    </>
  )
}
export default MainPage;
