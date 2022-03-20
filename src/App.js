import './App.css';
import React from 'react';
import {Amplify} from 'aws-amplify';
import {Route, Routes} from 'react-router-dom';
import MainPage from './Components/MainPage';
import Profile from './Components/Forward';
import {Authenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


import awsExports from './aws-exports';

Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <>
      <Authenticator >
        {({ signOut, user }) => (

          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="profile" element={<Profile />} />
          </Routes>

        )
        }
      </Authenticator>
    </>
  )
}
export default App;
