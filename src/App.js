import './App.css';
import React, { useState } from 'react';
import { Amplify } from 'aws-amplify';
import { Routes, Route, Link } from 'react-router-dom';
import MainPage from './Components/MainPage';
import Profile from './Components/Forward';
import '@aws-amplify/ui-react/styles.css';
import { Auth } from 'aws-amplify'
import { DataStore } from '@aws-amplify/datastore'
import { useEffect } from 'react';

import { UserTable } from './models';

import { Hub } from 'aws-amplify';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({ signOut, user }) {
  const [isAdmin, setIsAdmin] = useState(false)
  const [useR, setuseR] = useState({})
  const [value, setValue] = useState()

  useEffect(() => {
    const getData = async () => {
      try {

        const useR = await Auth.currentAuthenticatedUser()
        // setIsAdmin(useR.signInUserSession.accessToken.payload['cognito:groups'])
        setuseR(useR)
        // console.log(useR)
      } catch (err) {
        console.error(err)
      }
    }

    const SignUpFunction = async (userEmail) => {
      try {
        console.log('user just signed up with email: ' + userEmail)

        await DataStore.save(
          new UserTable({
            "useremail": userEmail,
            "isadmin": false
          })
        );
        console.log('user data saved in user table successfully')

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
              console.log('payload: ' + JSON.stringify(data.payload));
              console.log('email id: ' + data.payload.data.attributes.email);
              getData()
              console.log(data.payload.data.username)
              console.log(useR.attributes.email);
              break;
            case 'signUp':
              console.log('user signed up: ' + data.payload.data.user.username);
              SignUpFunction(data.payload.data.user.username)

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
  }, [])

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
