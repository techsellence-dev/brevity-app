import './App.css';
import React, { useState } from 'react';
import { Amplify } from 'aws-amplify';
import { Routes, Route, Link } from 'react-router-dom';
import MainPage from './Components/MainPage';
import Profile from './Components/Forward';
import '@aws-amplify/ui-react/styles.css';
import { Auth } from 'aws-amplify'
import { DataStore } from '@aws-amplify/datastore'
import { useEffect } from 'react'
import { Hub } from 'aws-amplify';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({ signOut, user }) {
  const [isAdmin, setIsAdmin] = useState(false)
  const [useR, setuseR] = useState({})

  useEffect(() => {
    const getData = async () => {
      try {

        const useR = await Auth.currentAuthenticatedUser()
        // setIsAdmin(useR.signInUserSession.accessToken.payload['cognito:groups'])
        setuseR(useR)
        console.log(useR)
      } catch (err) {
        console.error(err)
      }
    }

    const HUBauth = async (user) => {
      try {
        Hub.listen('auth', (data) => {
          switch (data.payload.event) {
            case 'signIn':
              console.log('user signed in');
              console.log(user);
              break;
            case 'signUp':
              console.log('user signed up');
              break;
            case 'signOut':
              console.log('user signed out');
              break;
            case 'signIn_failure':
              console.log('user sign in failed');
              break;
            case 'configured':
              console.log('the Auth module is configured');
              break;
            default:
              console.log("Running HUB event lisener");
          }
        });
      } catch (err) {
        console.error(err)
      }
    }
    HUBauth()
    
    getData()
  }, [user])

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="/admin" element={<Profile />} isAdmin={isAdmin} />
      </Routes>
    </>
  )
}
export default App;
