import './App2.css';
import React, { useState } from 'react';
import { Amplify, Auth, Hub } from 'aws-amplify';
// import Authentication from "./Components/authentication";
import '@aws-amplify/ui-react/styles.css';
import eimg from "./Components/images/Ellipse4eclips.png";

import ConfirmSignup from "./ConfirmSignup";
import SignUP from "./SignUP";
import { SignUP2 } from "./signuppp";
import SIgnIN from "./SignIN";
import Forgotpass from "./Forgotpass";
import ConfirmForgotPass from "./ConfirmForgotPass";

import awsExports from './aws-exports';
import App from "./App";

Amplify.configure(awsExports);

const initialFormState = {
  username: '', password: '', email: '', authCode: '', firstname: '', lastname: '', employID: '', phonenumber: '', formType: 'signUp'
}
// function App({ signOut, user }) {
function BrevityAuth() {
  const [formState, updatedFormState] = useState(initialFormState)
  const [isAdmin, setIsAdmin] = useState(false)
  const [user, setuser] = useState('')

  function Onchange(e) {
    e.persist()
    updatedFormState(() => ({ ...formState, [e.target.name]: e.target.value }))
  }

  const { formType } = formState
  // const { username, email, password } = formState


  async function signUp() {
    try {
      const { username, password, email, name, phone_number } = formState
      const { user } = await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,          // optional
          name,
          phone_number
          // firstname,
          // lastname,
          // employID,
          // phonenumber
        }
      });
      console.log(user);
      updatedFormState(() => ({ ...formState, formType: "ConfirmsignUp" }))
    } catch (error) {
      alert(error);
      console.log('error signing up:', error);
    }
  }



  async function ConfirmsignUp() {
    try {
      const { username, authCode } = formState
      await Auth.confirmSignUp(username, authCode) // After retrieveing the confirmation code from the user
      // const { user } =
      // Auth.confirmSignUp(username, code, {
      //   // Optional. Force user confirmation irrespective of existing alias. By default set to True.
      //   forceAliasCreation: true
      // }).then(data => console.log(data))
      //   .catch(err => console.log(err));

      updatedFormState(() => ({ ...formState, formType: "signIn" }))
      // console.log(user);
    } catch (error) {
      alert(error);
      console.log('error in ConfirmsignUp:', error);
    }
  }

  async function ForgotPass() {
    try {
      const { username } = formState
      // Send confirmation code to user's email
      await Auth.forgotPassword(username)
        .catch(err => console.log(err));

      updatedFormState(() => ({ ...formState, formType: "ConfirmForgotpassword" }))
    } catch (error) {
      alert(error);
      console.log('error forgot password:', error);
    }
  }

  async function ConfirmForgotPas() {
    try {
      const { username, authCode, new_password } = formState
      // Collect confirmation code and new password , then
      await Auth.forgotPasswordSubmit(username, authCode, new_password)
        .catch(err => console.log(err));

      // console.log(user);
      updatedFormState(() => ({ ...formState, formType: "signIn" }))
    } catch (error) {
      alert(error);
      console.log('error confirming forgot password:', error);
    }
  }



  async function SignIN() {
    try {
      const { username, password } = formState
      let signInResponse = await Auth.signIn(username, password)
      console.log('sign in response: ' + JSON.stringify(signInResponse));
      updatedFormState(() => ({ ...formState, formType: "signedIn" }));
      let authedUserResponse = await Auth.currentAuthenticatedUser();
      setuser(authedUserResponse.attributes.email);
    } catch (error) {
      alert(error);
      console.log('error in ConfirmsignUp:', error);
    }

  }

  async function SignOUT() {
    try {
      let signOutResponse = await Auth.signOut({ global: true });
      console.log('sign out response: ' + signOutResponse);
      updatedFormState(() => ({ ...formState, formType: "signUp" }))
    } catch (error) {
      alert(error);
      console.log('error signing out: ', error);
    }
  }

  async function resendConfirmationCode() {
    try {
      const { username } = formState
      await Auth.resendSignUp(username);
      console.log('code resent successfully');
    } catch (err) {
      alert(err);
      console.log('error resending code: ', err);
    }
  }

  async function checkUser() {
    try {
      const user = Auth.currentAuthenticatedUser()
      console.log("USER:", user)
      updatedFormState(() => ({ ...formState, formType: "signIn" }))
      setuser(user)
    } catch (error) {
      alert(error);
      console.log(error)

    }

  }

  async function setAuthListner() {
    try {
      Hub.listen('auth', (data) => {
        switch (data.payload.event) {
          case 'signIn':
            console.log('user signed in');
            alert('user signed in');
            updatedFormState(() => ({ ...formState, formType: "signedIn" }))
            break;
          case 'signUp':
            updatedFormState(() => ({ ...formState, formType: "ConfirmsignUp" }))
            console.log('user signed up');
            break;
          case 'signOut':
            updatedFormState(() => ({ ...formState, formType: "signIn" }))
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
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {/* <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="/admin" element={<Profile />} isAdmin={isAdmin} />
        <Route path="/auth" element={<Authentication />} />
      </Routes> */}
      {
        formType === 'signUp' && (
          new SignUP(Onchange, signUp, updatedFormState, formState, eimg)
          // <SignUP2 />
        )
      }
      {
        formType === 'ConfirmsignUp' && (
          ConfirmSignup(Onchange, ConfirmsignUp, resendConfirmationCode, eimg)
        )
      }
      {
        formType === 'signIn' && (
          SIgnIN(Onchange, SignIN, updatedFormState, formState)
        )
      }

      {
        formType === 'signedIn' && (
          <App />
        )
      }
      {
        formType === 'Forgotpass' && (
          Forgotpass(Onchange, ForgotPass, updatedFormState, formState, eimg)

        )
      }
      {
        formType === 'ConfirmForgotpassword' && (
          ConfirmForgotPass(Onchange, ConfirmForgotPas, updatedFormState, formState, eimg)
        )
      }
    </>
  )
}
export default BrevityAuth;
