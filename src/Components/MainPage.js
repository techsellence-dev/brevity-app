import '../App.css';
import React, { useState } from 'react';
import App2 from './RichTextEditor';
import NavBar from './NavBar';
import Home from './Home'
import FileViewer from './FileViewer';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../aws-exports';
Amplify.configure(awsExports);

function MainPage() {
  return (
    <>
      <Authenticator >
        {({ signOut, user }) => (

          <div className='arrange-divs'>
            <div className='nav-div'>
              <NavBar />
            </div>
            <div className='home-div'>
              <Home />
              <FileViewer />
              <App2 />
              {/* <button onClick={signOut}>LOgout</button>
              <h1>{user.username}</h1> */}
            </div>

          </div>
        )
        }
      </Authenticator>
    </>
  )
}
export default MainPage;
